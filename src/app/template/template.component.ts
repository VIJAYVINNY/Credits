import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { types } from './template';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
firstname: any;
terms:boolean=false;
list:string='';

  constructor() { }
  addDetails(formValue:NgForm){
console.log(formValue.value);

  }

  ngOnInit(): void {
  }

}
