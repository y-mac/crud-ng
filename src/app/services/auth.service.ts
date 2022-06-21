import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/user.model';
import { ResponseInfo } from '../models/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  getUserCredentials(params: User | any) {
    this.http
      .post<ResponseInfo>(
        'https://nestjs-library.herokuapp.com/api/v1/auth',
        params
      )
      .subscribe((res) => {
        this.data = res.data;
        if (this.data !== null && this.data !== undefined) {
          localStorage.setItem('token', this.data?.token);
          this.router.navigate(['/app']);
        }
      });
  }
}
