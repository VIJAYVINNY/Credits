import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MethodsService } from 'src/services/methods.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  contactList: any

  constructor(private methodService: MethodsService) {

    this.methodService.getContacts().subscribe((data: any) => {
      this.contactList = data;
      // console.log("The required output is:",data);  
    });
  }

  getPostData(data: any)
  {
    console.log(data);
    this.methodService.postDetails(data).subscribe((data)=>{
      console.log(data);
    })
  }
  /**PUT Method Calling */

  // updateDetails(detailsId){
  //   const newFormData={id:detailsId,FirstName:'Steve',position:'SQL Developer'};
  // }

  ngOnInit(): void { }


}


