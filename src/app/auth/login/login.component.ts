import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;

  loginForm: UntypedFormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private fb: UntypedFormBuilder,
    private auth: AuthService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.auth.login({ email, password }).subscribe({
      next: () => {
        this.router.navigateByUrl('/pages/login');
      },
      error: () => {
        console.log('Retry');
      },
    });
  }
}
