import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {

  constructor() { }

  topics=["C#,ASP.NET, JAVA, SQL, MongoDB"];
  ngOnInit(): void {
  }

}
