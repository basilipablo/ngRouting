import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contacts.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  selectedContact: IContact | undefined;
  token: String | null = null;

  constructor (private router:Router) {

  }

  ngOnInit(): void{
    this.token = sessionStorage.getItem('token');
    console.log(history.state.data ?? 'No History Data');
    this.selectedContact = history.state.data;
  }

  displayContacts(): void{
    let navigationExtras : NavigationExtras = {
      queryParams: {
        //filterSex: 0 
      }
    }

    this.router.navigate(['contacts'], navigationExtras);
  }

}
