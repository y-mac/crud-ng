import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomersInfo } from '../models/customers.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private htpp: HttpClient) {}

  getAllUsers() {
    return this.htpp.get<CustomersInfo>(
      'https://nestjs-library.herokuapp.com/api/v1/users'
    );
  }
}
