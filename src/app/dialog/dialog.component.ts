import { Component, OnInit } from '@angular/core';
import { Vehicles } from './dialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  vehicles: Vehicles[] = [
    {value: 'TATA', viewValue: 'TATA'},
    {value: 'MARUTI', viewValue: 'MARUTI'},
    {value: 'VOLKSWAGNOR', viewValue: 'WAGNOR'},
  ];
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  quality=["Below","Average","Medium","Good"];

  }



