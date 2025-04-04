import { Injectable, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CssColorObserverService {
  trigger?: Signal<unknown>;

  refreshOn(trigger: Signal<unknown>) {
    this.trigger = trigger;
  }
}
