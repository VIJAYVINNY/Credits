import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/services/contacts.service';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService:ContactsService) { }

  contactList:any;  
  // createpage:any;
  // constructor(){}

  ngOnInit(): void {
  this.contactList=this.contactsService.getcontacts();
  }
}
