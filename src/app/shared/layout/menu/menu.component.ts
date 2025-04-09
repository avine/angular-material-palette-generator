import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {}
