import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-guide',
  host: { class: 'app-guide' },
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GuideComponent {}
