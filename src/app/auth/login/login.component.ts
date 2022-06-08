import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showPassword = false;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern('.+@.+\..+on')]],
      password: [null, [Validators.required]],
    });
   }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.auth.login({email, password}).subscribe();
  }

}
