import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token: String | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }
  title = 'ngRouting';


  logoutUser(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['home'])
  }
}
