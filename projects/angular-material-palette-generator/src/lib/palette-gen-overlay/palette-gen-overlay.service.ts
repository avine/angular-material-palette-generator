import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { effect, inject, Injectable, Injector } from '@angular/core';
import { PaletteGenOverlayComponent } from './palette-gen-overlay.component';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenOverlayService {
  private injector = inject(Injector);

  private overlay = inject(Overlay);

  private overlayRef?: OverlayRef;

  enable() {
    if (this.overlayRef) {
      return;
    }
    this.overlayRef = this.overlay.create({ panelClass: 'pg-palette-gen-overlay-panel' });
    const componentPortal = new ComponentPortal(PaletteGenOverlayComponent);
    const componentRef = this.overlayRef.attach(componentPortal);

    effect(
      () => {
        const { modal, details } = componentRef.instance.state();

        this.overlayRef?.updateSize({
          width: modal && details ? 'calc(100% - 2 * var(--pg-palette-gen-overlay-panel-offset))' : '',
        });

        this.overlayRef?.[modal ? 'addPanelClass' : 'removePanelClass']('pg-palette-gen-overlay-panel--active');
      },
      { injector: this.injector },
    );
  }

  disable() {
    if (!this.overlayRef) {
      return;
    }
    this.overlayRef.dispose();
    this.overlayRef = undefined;
  }
}
