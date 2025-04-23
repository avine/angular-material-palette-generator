import { Component, computed, inject, input, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaletteGenService } from '../palette-gen.service';

@Component({
  selector: 'pg-palette-gen-snapshots',
  host: { class: 'pg-palette-gen-snapshots' },
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './palette-gen-snapshots.component.html',
  styleUrl: './palette-gen-snapshots.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PaletteGenSnapshotsComponent {
  private service = inject(PaletteGenService);

  maxSnapshots = input(10);

  disabled = input(false);

  protected formValueSnapshot = computed(() => JSON.stringify(this.service.formValue()));

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
    this.service.formValue.set(JSON.parse(snapshot));
  }

  private snapshotAliasList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  private snapshotAliasIndex = 0;

  private get nextSnapshotAlias() {
    const usedAliases = this.snapshots().map(({ alias }) => alias);

    let alias: string;
    do {
      alias = this.snapshotAliasList[this.snapshotAliasIndex++ % this.snapshotAliasList.length];
    } while (usedAliases.includes(alias));

    return alias;
  }
}
