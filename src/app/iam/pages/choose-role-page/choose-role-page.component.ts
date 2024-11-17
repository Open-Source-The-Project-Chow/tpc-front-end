import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-choose-role-page',
  standalone: true,
  imports: [],
  templateUrl: './choose-role-page.component.html',
  styleUrl: './choose-role-page.component.css'
})
export class ChooseRolePageComponent {

  constructor(private router: Router) {
  }

  selectRole(role: string) {
    if (role === 'cliente') {
      this.router.navigate(['/sign-up-client']);
    }
    else if (role === 'abogado') {
      this.router.navigate(['/for-lawyers']);
    }
  }
}
