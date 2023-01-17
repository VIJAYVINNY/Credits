import { Component, OnInit } from '@angular/core';
import { LoginModule } from './login.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  opened=false //This is one way to implement toggle in Open and  Close
  log(state:any){
   console.log(state);
  }

  constructor(public loginModule:LoginModule) {

  }

  ngOnInit(): void {


    }
  }


