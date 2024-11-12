import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatAnchor} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';
import { CommonModule } from '@angular/common';``

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterOutlet,
    MatToolbar,
    MatAnchor,
    NgIf,
    TranslateModule,
    MatButton,
    RouterLink,
    LanguageSwitcherComponent,
    CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  protected options = [
    {path: '/craftsman/orders', title: 'Orders'},
    {path: '/inventory', title: 'Inventory'},
    {path: '/forum', title: 'Forum'},
    {path: '/profile', title: 'Profile'},
  ]
}
