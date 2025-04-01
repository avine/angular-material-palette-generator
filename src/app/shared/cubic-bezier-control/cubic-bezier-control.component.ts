import { CdkDrag } from '@angular/cdk/drag-drop';
import {
  afterRenderEffect,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  model,
  untracked,
  viewChild,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { cubicBezierFactory, CubicBezierParams } from '../cubic-bezier';

@Component({
  selector: 'app-cubic-bezier-control',
  host: {
    class: 'app-cubic-bezier-control',
    '[style.--app-cubic-bezier-control-canvas-size]': 'canvasSize() + "px"',
    '[style.--app-cubic-bezier-control-point-size]': 'pointSize() + "px"',
  },
  imports: [CdkDrag, MatRippleModule],
  templateUrl: './cubic-bezier-control.component.html',
  styleUrl: './cubic-bezier-control.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CubicBezierControlComponent implements ControlValueAccessor {
  private containerElement: HTMLElement = inject(ElementRef).nativeElement;

  params = model<CubicBezierParams>({ p1x: 0, p1y: 0, p2x: 1, p2y: 1 });

  private cubicBezier = computed(() => cubicBezierFactory(this.params()));

  private canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private canvasContext = computed(() => this.canvasRef().nativeElement.getContext('2d'));

  canvasSize = input(200);

  private p1 = viewChild.required<ElementRef<HTMLElement>>('p1');

  private p2 = viewChild.required<ElementRef<HTMLElement>>('p2');

  pointSize = input(24);

  lineColor = input<string>();

  skipNextParamsEffect = false;

  disabled = model(false);

  private cdkDrags = viewChildren(CdkDrag);

  constructor() {
    afterRenderEffect(() => this.updateCanvas());

    afterRenderEffect(() => {
      const params = this.params();
      if (this.skipNextParamsEffect) {
        this.skipNextParamsEffect = false;
        return;
      }
      untracked(() => this.positioningPoints(params));
    });

    const ngControl = inject(NgControl, { optional: true, self: true });
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  private positioningPoints(params: CubicBezierParams) {
    const baseSize = this.canvasSize() - this.pointSize();

    const [p1Drag, p2Drag] = this.cdkDrags();

    p1Drag.setFreeDragPosition({
      x: params.p1x * baseSize,
      y: baseSize - params.p1y * baseSize,
    });
    p2Drag.setFreeDragPosition({
      x: params.p2x * baseSize,
      y: baseSize - params.p2y * baseSize,
    });
  }

  protected updateParam(p: 'p1' | 'p2') {
    const container = this.containerElement.getBoundingClientRect();
    const point = this[p]().nativeElement.getBoundingClientRect();
    const baseSize = this.canvasSize() - this.pointSize();

    this.skipNextParamsEffect = true;
    this.params.update((params) => {
      const x = Math.round((1000 * (point.x - container.x)) / baseSize) / 1000;
      const y = Math.round(1000 - (1000 * (point.y - container.y)) / baseSize) / 1000;

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

  private updateCanvas() {
    const ctx = this.canvasContext();
    const canvasSize = this.canvasSize();
    const cubicBezier = this.cubicBezier();
    const lineColor = this.lineColor();

    if (!ctx) {
      console.warn('ColorGenBezierComponent: canvas is not supported');
      return;
    }

    ctx.strokeStyle = lineColor ?? 'red';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.beginPath();
    ctx.moveTo(0, canvasSize);
    for (let step = 0; step <= canvasSize; step += 1) {
      ctx.lineTo(step, (1 - cubicBezier(step / canvasSize)) * canvasSize);
    }
    ctx.stroke();
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
}
