import { booleanAttribute, Directive, inject, input } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleGlobalOptions, RippleRef } from '@angular/material/core';

@Directive({
  selector: '[pgCubicBezierControlRipple]',
  hostDirectives: [MatRipple],
  host: {
    '(focus)': 'launch()',
    '(blur)': 'fadeOut()',
  },
})
export class CubicBezierControlRippleDirective {
  private globalRippleDisabled =
    inject<RippleGlobalOptions>(MAT_RIPPLE_GLOBAL_OPTIONS, { optional: true })?.disabled === true;

  private matRipple = inject(MatRipple, { self: true });

  private rippleRef?: RippleRef;

  enabled = input(true, { transform: booleanAttribute, alias: 'pgCubicBezierControlRipple' });

  constructor() {
    this.matRipple.disabled = true; // Prevent the first self-triggered ripple

    this.matRipple.color = 'rgb(from var(--mat-sys-primary) r g b / 0.24)';
    this.matRipple.centered = true;
    this.matRipple.unbounded = true;
    this.matRipple.radius = 24;
  }

  protected launch() {
    if (this.globalRippleDisabled || !this.enabled()) {
      return;
    }
    this.matRipple.disabled = false;
    this.rippleRef = this.matRipple.launch({ persistent: true });
  }

  protected fadeOut() {
    if (!this.rippleRef) {
      return;
    }
    this.rippleRef.fadeOut();
    this.matRipple.disabled = true;
  }
}
