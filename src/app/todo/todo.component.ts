import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/services/contacts.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // constructor(private ContactsService:ContactsService) { }
  constructor(){}
  
  contactList:any;  
  
  ngOnInit(): void {
    // this.contactList=this.ContactsService.getcontacts();
  }

}
