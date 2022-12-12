import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/services/methods.service';
import{HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-chandru',
  templateUrl: './chandru.component.html',
  styleUrls: ['./chandru.component.scss']
})
export class ChandruComponent implements OnInit {

  constructor(public methodsService:MethodsService) { }

  contactList:any;
  ngOnInit(): void {

    this.methodsService.getContacts().subscribe(data=>{
     this.contactList=data;
    })
  }

}
