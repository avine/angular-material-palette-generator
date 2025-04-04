import { Component, computed, effect, input, output, viewChildren, ViewEncapsulation } from '@angular/core';
import { CssVarItemObserverDirective } from './css-var-item-observer.directive';

@Component({
  selector: 'pl-css-var-observer',
  host: {
    class: '.pl-css-var-observer',
    '[attr.role]': '"presentation"',
  },
  imports: [CssVarItemObserverDirective],
  templateUrl: './css-var-observer.component.html',
  styleUrl: './css-var-observer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CssColorObserverComponent<T extends string> {
  cssVarConfig = input.required<Record<T, string>>();

  protected cssVarNames = computed(() => Object.values(this.cssVarConfig()) as string[]);

  protected cssVarItems = viewChildren(CssVarItemObserverDirective);

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
