import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  currentUsername: string = '';
  isSignedIn: boolean = false;
  constructor(private router: Router, private authenticationService: AuthenticationService)  {
    this.authenticationService.currentUsername.subscribe((username) => {
      this.currentUsername = username;
    });
    this.authenticationService.isSignedIn.subscribe((isSignedIn) => {
      this.isSignedIn = isSignedIn;
    });
  }

  onSignIn() {
    this.router.navigate(['/sign-in']).then();
  }

  onSignUp() {
    this.router.navigate(['/sign-up']).then();
  }

  onSignOut() {
    this.authenticationService.signOut();
  }
}
