import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
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
address:string='';

// datatypes:types=new this.datatypes();
  constructor(private formBuilder:FormBuilder) { }

  addDetails(formValue:NgForm){
console.log(formValue.value);

  }

  ngOnInit(): void {

  }

}
