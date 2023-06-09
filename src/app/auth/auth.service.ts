import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //not quite a login service, right?
  isLoggedIn = sessionStorage.getItem('token');

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  //like it's actually calling an API
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = 'true')
    );
  }

  logout(): void {
    this.isLoggedIn = 'false';
  }
}