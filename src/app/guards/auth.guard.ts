import {inject} from '@angular/core';
import { Router } from '@angular/router';

//import {AuthService} from '../auth/auth.service';

export const authGuard = () => {
  //logic to see if the user is logged in
  //const authService = inject(AuthService);
  const router = inject(Router);

  if (sessionStorage.getItem('token') == 'true') {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/login');
};
