import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loading: boolean = false;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) {}

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loginCheck() {
    this.authService.getUserCredentials(this.loginForm.value);
  }

  ngOnInit(): void {}
}
