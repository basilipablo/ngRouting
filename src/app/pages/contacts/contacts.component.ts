import { Component } from '@angular/core';
import { IContact } from 'src/app/models/contacts.interface';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  //TODO: birng this from a service (API REST, SOAP, whatever you want)
  contactsList: IContact [] = [
    {
      id: 0,
      name: 'Lisa',
      lastname: 'Simpson',
      email: 'iamlisa@yopmail.com',
      sex: 0
    },
    {
      id: 1,
      name: 'Bart',
      lastname: 'Simpson',
      email: 'elbarto@yopmail.com',
      sex: 1
    },
    {
      id: 2,
      name: 'Ned',
      lastname: 'Flanders',
      email: 'flandersneddy@yopmail.com',
      sex: 1
    }
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void{
    //get query params
    this.route.queryParams.subscribe((params) => console.log(params['filterSex']))
  }

  goHome(contact: IContact){

    let navigationExtras: NavigationExtras = {
      state: {
        data: contact
      }
    }

    this.router.navigate(['/home'], navigationExtras)
  }
}
