import { Component } from '@angular/core';
import { IContact } from 'src/app/models/contacts.interface';

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
      email: 'iamlisa@yopmail.com'
    },
    {
      id: 1,
      name: 'Bart',
      lastname: 'Simpson',
      email: 'elbarto@yopmail.com'
    },
    {
      id: 2,
      name: 'Ned',
      lastname: 'Flanders',
      email: 'flandersneddy@yopmail.com'
    }
  ]
}
