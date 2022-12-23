import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  registrationForm=new FormGroup({
    userName:new FormControl('Sanjay'),
    password:new FormControl(''),
    confirmPassword:new FormControl('')
  });


  constructor(){}

  contactList:any;

  ngOnInit(): void { }

}
