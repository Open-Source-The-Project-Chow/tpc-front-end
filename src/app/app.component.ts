import {Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {TranslateService} from "@ngx-translate/core";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import {ToolbarComponent} from "./public/components/toolbar/toolbar.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, RouterLink, MatAnchor, LanguageSwitcherComponent, FooterContentComponent, ToolbarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tpc-front-end';
  constructor(translate: TranslateService, private router: Router) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  shouldShowToolbar(){
    return !(this.router.url == '/sign-in'
      || this.router.url == '/choose-role'
      || this.router.url == '/sign-up-craftsman'
      || this.router.url == '/choose-role');
  }
}
