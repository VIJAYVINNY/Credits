import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  subjects=["C#","ASP","JAVA","SQL","MongoDB"];

userModel=new User("Vijay","vijay1021.gummadi@gmail.com",9603722638,'',"morning",true);

  constructor() { }

  ngOnInit(): void {
  }

}
