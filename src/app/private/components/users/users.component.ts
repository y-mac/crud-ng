import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Customer } from 'src/app/models/customers.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userList: Customer[] = [
    {
      email: '',
      id: '',
      lastName: '',
      name: '',
      passwordConfirmed: false,
      roleId: null,
      secondLastName: '',
    },
  ];

  constructor(private userService: UserServiceService) {}

  handleGetUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.userList = data.data;
    });
  }

  ngOnInit(): void {
    console.log('hola');
    this.handleGetUsers();
  }
}
