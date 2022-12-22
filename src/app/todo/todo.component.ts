import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactsService } from 'src/services/contacts.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
RegistrationForm=new FormGroup({
  UserName:new FormControl('Sanjay'),
  Password:new FormControl(''),
  Confirmpassword:new FormControl('')
});
  // constructor(private ContactsService:ContactsService) { }
  constructor(){}

  contactList:any;

  ngOnInit(): void {
    // this.contactList=this.ContactsService.getcontacts();
  }

}
