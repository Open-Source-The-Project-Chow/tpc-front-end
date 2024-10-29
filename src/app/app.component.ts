import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {TranslateService} from "@ngx-translate/core";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, RouterLink, MatAnchor, LanguageSwitcherComponent, FooterContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tpc-front-end';
  protected options = [
    {path: '/item', title: 'Items'},
    {path: '/inventory', title: 'Inventory'},
    {path: '/forum', title: 'Forum'},
    {path: '/profile', title: 'Profile'},
    ]
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
