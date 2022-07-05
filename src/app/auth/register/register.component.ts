import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;

  registerForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      fullName: [null, [Validators.required, Validators.minLength(6)]],
      company: [null],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],
      repassword: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    const user = this.registerForm.value;
    this.auth.register(user).subscribe();
  }
}
