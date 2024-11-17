
import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {SignInRequest} from "../../model/sign-in.request";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent extends BaseFormComponent implements OnInit{

  form!: FormGroup;
  submitted = false;

  constructor(private builder: FormBuilder,private router: Router, private authService: AuthenticationService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    const signInRequest = new SignInRequest(username, password);
    this.authService.signIn(signInRequest);
    this.submitted = true;
    this.router.navigate(['/home']);
  }
}
