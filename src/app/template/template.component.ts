import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  firstname: any;
  terms: boolean = false;
  list: string = '';
  address: string = '';

  // datatypes:types=new this.datatypes();
  constructor(private formBuilder: UntypedFormBuilder) { }

  addDetails(formValue: NgForm) {
    console.log(formValue.value);
  }

  resetData(formValue: NgForm) {
    // formValue.reset();
    formValue.resetForm();
  }

  ngOnInit(): void {

  }

}
