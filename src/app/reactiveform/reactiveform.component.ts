import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  subjects=["C#","ASP","JAVA","SQL","MongoDB"];

userModel=new User("","",9603722638,"","default",true);

  constructor() { }

topicHasError=true;

  ngOnInit(): void {
  }

  validateTopic(value: string){
    if(value==='default'){
      this.topicHasError=true
    }
    else{
      this.topicHasError=false
    }
  }
}
