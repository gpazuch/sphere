import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent {
  forgotForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private auth: AuthService) {
    this.forgotForm = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
        ],
      ],
    });
  }

  onSubmit(): void {
    const email = this.forgotForm.value;
    this.auth.forgotPassword(email).subscribe();
  }
}
