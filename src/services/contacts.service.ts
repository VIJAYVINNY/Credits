import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor() { }

  getcontacts(){

  const contactList=[
      {contactId:1,contactName:'Vinay',contactMail:"vijay1021.gummadi@gmail.com"},
      {contactId:2,contactName:'Vijay',contactMail:"vijay1021.gummadi@gmail.com"},
      {contactId:3,contactName:'Sanjay',contactMail:"vijay1021.gummadi@gmail.com"},
      {contactId:4,contactName:'Pranay',contactMail:"vijay1021.gummadi@gmail.com"},
      {contactId:5,contactName:'Anay',contactMail:"vijay1021.gummadi@gmail.com"},
];
  return contactList;
  }

  callingFromTemplate(){
    console.log("Calling from template directly");
  }
}
