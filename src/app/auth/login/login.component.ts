import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showPassword = false;

  loginForm: FormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private breakpointObserver: BreakpointObserver,
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
