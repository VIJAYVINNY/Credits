import { Component, OnInit } from '@angular/core';
import { AllserviceService } from 'src/services/allservice.service';


@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss']
})
export class MethodsComponent implements OnInit {
dataSubmit(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(private allService:AllserviceService) { }

  ngOnInit(): void {
    // this.allService.getMethods().subscribe(data=>{
    //   this.contactLinst=data;
    //   console.log(data);

    // })
  }
  getPostData(data:any){
  //   postCall(){

  //     this.allService.postCall().subscribe(result=>{
  //         console.log();
  //     })
  //  }
  }

}
