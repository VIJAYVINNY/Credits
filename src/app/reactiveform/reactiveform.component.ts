import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  subjects=["C#","ASP","JAVA","SQL","MongoDB"];

userModel=new User("","",9603722638,'',"",true);

  constructor() { }

  ngOnInit(): void {
  }

}
