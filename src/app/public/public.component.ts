import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {
  constructor(router: Router) {}

  ngOnInit(): void {}
}
