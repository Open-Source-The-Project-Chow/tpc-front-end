import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {SignUpRequest} from "../../model/sign-up.request";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sign-up-craftsman-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './sign-up-craftsman-page.component.html',
  styleUrl: './sign-up-craftsman-page.component.css'
})
export class SignUpCraftsmanPageComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private builder: FormBuilder, private router: Router, private authService: AuthenticationService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      image: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      roles: [['ROLE_CRAFTSMAN'], Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const {  firstName,lastName, email, phone, image, username, password, roles} = this.form.value;
    const signUpRequest = new SignUpRequest( firstName,lastName, email, phone, image, username, password, roles);
    this.authService.signUp(signUpRequest).subscribe({
      next: () => {
        this.submitted = true;
        this.router.navigate(['/sign-in']);
      },
      error: (error) => {
        console.error('Error signing up', error);
      }
    });}
}
