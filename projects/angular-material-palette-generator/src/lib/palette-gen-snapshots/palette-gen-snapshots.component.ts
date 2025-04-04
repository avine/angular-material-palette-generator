import { Component, computed, input, model, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenFormValue } from '../palette-gen-form';

@Component({
  selector: 'pl-palette-gen-snapshots',
  host: { class: 'pl-palette-gen-snapshots' },
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './palette-gen-snapshots.component.html',
  styleUrl: './palette-gen-snapshots.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenSnapshotsComponent {
  maxSnapshots = input(10);

  disabled = input(false);

  formValue = model<PaletteGenFormValue>();

  protected formValueSnapshot = computed(() => JSON.stringify(this.formValue()));

  protected snapshots = signal<{ alias: string; value: string }[]>([]);

  protected takeSnapshot() {
    this.snapshots.update((snapshots) => [
      ...snapshots,
      {
        alias: this.nextSnapshotAlias,
        value: this.formValueSnapshot(),
      },
    ]);
  }

  protected hasSelectedSnapshot = computed(() =>
    this.snapshots().some(({ value }) => value === this.formValueSnapshot()),
  );

  protected removeSelectedSnapshot() {
    this.snapshots.update((snapshots) => snapshots.filter(({ value }) => value !== this.formValueSnapshot()));
  }

  protected selectSnapshot(snapshot: string) {
    this.formValue.set(JSON.parse(snapshot));
  }

  private snapshotAliasList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  private snapshotAliasIndex = 0;

  private get nextSnapshotAlias() {
    return this.snapshotAliasList[this.snapshotAliasIndex++ % this.snapshotAliasList.length];
  }
}
