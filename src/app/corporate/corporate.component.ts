import { Component, OnInit } from '@angular/core';
import {FormGroup, UntypedFormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})

export class CorporateComponent implements OnInit {

  selectedvalue: string | undefined;

  disableSelect = new UntypedFormControl(false);

  constructor(private snackBar:MatSnackBar) { }


  openScackBar(message:any,action:any){

this.snackBar.open(message,action);
  }
  ngOnInit(): void { }

  Courses: string[] = ['FrontEnd', 'BackEnd', 'WeekEnd'];

  // types = [
  //   { name: 'C#' },
  //   { name: 'Java' },
  //   { name: 'SQL' },
  //   { name: 'MongoDB' }
  // ];

  // displayData(subject:any){
  //   return subject ? subject.name:undefined;
  // }

}
