import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}
 
  ngOnInit(): void {
    let token = sessionStorage.getItem('token');

    if(token){
      this.router.navigate(['home']);
    }
  }

  loginUser(): void {
    sessionStorage.setItem('token', 'true');
    this.router.navigate(['contacts'])
  }
}
