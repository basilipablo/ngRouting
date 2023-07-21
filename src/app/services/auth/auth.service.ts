import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {

  }

  //not quite a login service, right?
  isLoggedIn = sessionStorage.getItem('token');

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  //like it's actually calling an API with validations (chack https://reqres.in)
  login(email: string, password: string): Observable<any> {
    let body = {
      email: email,
      password: password
    }

    return this.http.post('https://reqres.in/api/login', body)
    //this.isLoggedIn = 'true'
  }

  logout(): void {
    this.isLoggedIn = 'false';
  }
}