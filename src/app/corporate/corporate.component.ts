import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})

export class CorporateComponent implements OnInit {

  selectedvalue: string | undefined;

  disableSelect = new FormControl(false);

  constructor() { }

  ngOnInit(): void { }

  Courses: string[] = ['FrontEnd', 'BackEnd', 'WeekEnd'];

  types = [
    { name: 'C#' },
    { name: 'Java' },
    { name: 'SQL' },
    { name: 'MongoDB' }
  ];

  displayData(subject:any){
    return subject ? subject.name:undefined;
  }
  myControl=new  FormControl();
}
