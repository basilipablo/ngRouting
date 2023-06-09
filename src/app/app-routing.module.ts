import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {authGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component:HomePageComponent,
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'contacts', component:ContactsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'contacts/:id', component:ContactDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: '**', component:NotFoundComponent
  }
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})

export class AppRoutingModule { }
