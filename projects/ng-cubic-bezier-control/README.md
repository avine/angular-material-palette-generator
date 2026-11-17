# Angular Cubic Bézier Control

An Angular Material form control to edit a cubic Bézier curve, like the `cubic-bezier()` CSS easing function.

Drag the two control points (`p1` and `p2`) to shape the curve, or focus them and use the arrow keys.

Online demo: https://avine.github.io/angular-material-palette-generator/demo/cubic-bezier-control

## Installation

```bash
npm install ng-cubic-bezier-control
```

The component relies on Angular Material and its CDK (`@angular/material`, `@angular/cdk`, `@angular/forms`), and on
the system tokens of a Material 3 theme (`--mat-sys-primary`, `--mat-sys-surface-variant`...). Your app needs an
Angular Material theme defined with `mat.theme()`.

## Usage

```ts
import { Component, signal } from '@angular/core';
import { CubicBezierControlComponent, CubicBezierParams } from 'ng-cubic-bezier-control';

@Component({
  selector: 'app-root',
  imports: [CubicBezierControlComponent],
  template: `<cubic-bezier-control [(params)]="params" />`,
})
export class App {
  params = signal<CubicBezierParams>({ p1x: 0.25, p1y: 0.1, p2x: 0.25, p2y: 1 });
}
```

The params are the coordinates of the 2 control points, in the `[0, 1]` range. They can be used directly in CSS:

```ts
const { p1x, p1y, p2x, p2y } = params();
const easing = `cubic-bezier(${p1x}, ${p1y}, ${p2x}, ${p2y})`;
```

### Reactive forms

The component is also a form control (`ControlValueAccessor`):

```html
<cubic-bezier-control [formControl]="control" />
```

```ts
control = new FormControl<CubicBezierParams>({ p1x: 0, p1y: 0, p2x: 1, p2y: 1 });
```

## API

| Name              | Type                       | Default                              | Description                                                                 |
| ----------------- | -------------------------- | ------------------------------------ | --------------------------------------------------------------------------- |
| `params`          | `model<CubicBezierParams>` | `{ p1x: 0, p1y: 0, p2x: 1, p2y: 1 }` | Coordinates of the control points (linear by default).                      |
| `disabled`        | `model<boolean>`           | `false`                              | Disables the control.                                                       |
| `canvasSize`      | `input<number>`            | `260`                                | Width and height of the control, in pixels.                                 |
| `refreshColorsOn` | `input<unknown>`           | `undefined`                          | Redraws the curve with the theme colors when its value changes (see below). |

## Theme switching

The curve is drawn in a `<canvas>`, which can't use CSS variables: the colors of the theme are read once, when the
control is rendered. If your app switches between light and dark themes, bind the current theme to `refreshColorsOn`
so that the colors are read again on each change:

```html
<cubic-bezier-control [(params)]="params" [refreshColorsOn]="theme()" />
```

## Keyboard

- `Tab`: focus the `p1` and `p2` control points.
- Arrow keys: move the focused point by `0.01`.
