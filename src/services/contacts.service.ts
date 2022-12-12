import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  // 

  constructor() { } 
  
  getcontacts(){

  const contactList=[
      {contactId:1,contactName:'Vinay'},
      {contactId:2,contactName:'Vijay'},
      {contactId:3,contactName:'Sanjay'},
      {contactId:4,contactName:'Pranay'},
      {contactId:5,contactName:'Anay'},
];
  return contactList;
  }


  callingFromTemplate(){
    console.log("Calling from template directly");
    
  }
}
