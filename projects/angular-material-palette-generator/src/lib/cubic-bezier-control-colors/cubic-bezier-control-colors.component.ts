import { Component, computed, effect, input, output, viewChildren, ViewEncapsulation } from '@angular/core';
import { CubicBezierControlColorsDirective } from './cubic-bezier-control-colors.directive';

@Component({
  selector: 'pl-cubic-bezier-control-colors',
  host: {
    class: '.pl-cubic-bezier-control-colors',
    '[attr.role]': '"presentation"',
  },
  imports: [CubicBezierControlColorsDirective],
  templateUrl: './cubic-bezier-control-colors.component.html',
  styleUrl: './cubic-bezier-control-colors.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CubicBezierControlColorsComponent<T extends string> {
  cssVarConfig = input.required<Record<T, string>>();

  protected cssVarNames = computed(() => Object.values(this.cssVarConfig()) as string[]);

  protected cssVarItems = viewChildren(CubicBezierControlColorsDirective);

  protected colorMap = computed<Record<T, string>>(() => {
    const keys = Object.keys(this.cssVarConfig()) as T[];
    return this.cssVarItems().reduce(
      (map, item, index) => {
        const rgbColor = item.rgbColor();
        if (rgbColor) {
          map[keys[index]] = rgbColor;
        }
        return map;
      },
      {} as Record<T, string>,
    );
  });

  colorMapChange = output<Record<T, string>>();

  constructor() {
    effect(() => this.colorMapChange.emit(this.colorMap()));
  }
}
