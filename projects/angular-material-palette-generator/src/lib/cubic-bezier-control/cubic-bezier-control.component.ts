import { CdkDrag } from '@angular/cdk/drag-drop';
import {
  afterRenderEffect,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  model,
  signal,
  untracked,
  viewChild,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CubicBezierControlColorsComponent } from '../cubic-bezier-control-colors/cubic-bezier-control-colors.component';
import { cubicBezierFactory } from '../cubic-bezier/cubic-bezier';
import { CubicBezierParams } from '../cubic-bezier/cubic-bezier.types';
import { PALETTE_FORM_CONTROL_SIZE_DEFAULT } from '../palette-gen.config';
import { CubicBezierControlDirectionDirective } from './cubic-bezier-control-direction.directive';
import { CubicBezierControlRippleDirective } from './cubic-bezier-control-ripple.directive';
import { CubicBezierControlColors, CubicBezierControlDirection } from './cubic-bezier-control.types';
import {
  CanvasHandler,
  cubicBezierParamsToPoints,
  moveCubicBezierParams,
  pointToCubicBezierParam,
} from './cubic-bezier-control.utils';
import { CubicBezierParamsPipe } from './cubic-bezier-params.pipe';

@Component({
  selector: 'pg-cubic-bezier-control',
  host: {
    class: 'pg-cubic-bezier-control',
    '[class.pg-cubic-bezier-control--disabled]': 'disabled()',
    '[style.--pg-cubic-bezier-control-canvas-size]': 'canvasSize() + "px"',
  },
  imports: [
    CdkDrag,
    MatTooltipModule,
    CubicBezierControlColorsComponent,
    CubicBezierControlDirectionDirective,
    CubicBezierControlRippleDirective,
    CubicBezierParamsPipe,
  ],
  templateUrl: './cubic-bezier-control.component.html',
  styleUrl: './cubic-bezier-control.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CubicBezierControlComponent implements ControlValueAccessor {
  private container: HTMLElement = inject(ElementRef).nativeElement;

  params = model<CubicBezierParams>({ p1x: 0, p1y: 0, p2x: 1, p2y: 1 });

  private cubicBezier = computed(() => cubicBezierFactory(this.params()));

  private canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private canvasHandler = computed(() => {
    const ctx = this.canvasRef().nativeElement.getContext('2d');
    return ctx ? new CanvasHandler(ctx, this.canvasSize(), this.colorMap()) : undefined;
  });

  canvasSize = input(PALETTE_FORM_CONTROL_SIZE_DEFAULT);

  private p1 = viewChild.required<ElementRef<HTMLElement>>('p1');

  private p2 = viewChild.required<ElementRef<HTMLElement>>('p2');

  disabled = model(false);

  skipNextPointsUpdate = false;

  private cdkDrags = viewChildren(CdkDrag);

  constructor() {
    afterRenderEffect(() => this.updatePoints());
    afterRenderEffect(() => this.updateCanvas());

    const ngControl = inject(NgControl, { optional: true, self: true });
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  private updatePoints() {
    const params = this.params();
    const size = this.canvasSize();

    if (this.skipNextPointsUpdate) {
      this.skipNextPointsUpdate = false;
      return;
    }

    const { p1, p2 } = cubicBezierParamsToPoints({ params, size });

    const [p1Drag, p2Drag] = untracked(() => this.cdkDrags());
    p1Drag.setFreeDragPosition(p1);
    p2Drag.setFreeDragPosition(p2);
  }

  protected updateParam(p: 'p1' | 'p2') {
    const point = this[p]().nativeElement.getBoundingClientRect();
    const container = this.container.getBoundingClientRect();
    const size = this.canvasSize();

    this.skipNextPointsUpdate = true;
    this.params.update((params) => {
      const { x, y } = pointToCubicBezierParam({ point, container, size });

      const newParams = { ...params };
      if (p === 'p1') {
        newParams.p1x = x;
        newParams.p1y = y;
      } else {
        newParams.p2x = x;
        newParams.p2y = y;
      }
      return newParams;
    });
    this.onChange(this.params());
    this.onTouched();
  }

  protected moveParams(p: 'p1' | 'p2', direction: CubicBezierControlDirection) {
    this.params.update((params) => moveCubicBezierParams(params, p, direction));
    this.onChange(this.params());
    this.onTouched();
  }

  private updateCanvas() {
    const canvasHandler = this.canvasHandler();
    if (!canvasHandler) {
      console.warn('ColorGenBezierComponent: canvas is not supported');
      return;
    }
    canvasHandler.clear().linear().curve(this.cubicBezier()).sticks(this.params());
  }

  // ----- ControlValueAccessor -----

  private onChange: (params: CubicBezierParams) => void = () => undefined;

  private onTouched: () => void = () => undefined;

  registerOnChange(onChange: (params: CubicBezierParams) => undefined): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  writeValue(params: CubicBezierParams | null | undefined): void {
    this.params.set(params ?? { p1x: 0, p1y: 0, p2x: 1, p2y: 1 });
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled.set(disabled);
  }

  // ----- Material colors in RGB (for the canvas configuration) -----

  protected cssVarConfig: CubicBezierControlColors = {
    linearColor: '--mat-sys-surface-container-highest',
    curveColor: '--mat-sys-primary',
    stickColor: '--mat-sys-on-surface-variant',
  };

  protected colorMap = signal<typeof this.cssVarConfig>({
    linearColor: 'grey',
    curveColor: 'grey',
    stickColor: 'grey',
  });
}
