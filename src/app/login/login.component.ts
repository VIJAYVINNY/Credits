import { Component, OnInit } from '@angular/core';
import { Tile } from '@angular/material/grid-list/tile-coordinator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  opened=false //This is one way to implement toggle in Open and  Close

  log(state:any)
  {
   console.log(state);
  }

  constructor() {}
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

    ngOnInit(): void {
    }

  
  }


