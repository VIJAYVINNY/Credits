import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  constructor(){}

  registrationForm=new FormGroup({
    userName:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),

    address:new FormGroup({
      city:new FormControl(''),
      state:new FormControl(''),
      postalNo:new FormControl(''),
    })
  });

address: any;
contactList:any;

  ngOnInit(): void { }
// //With help of patchvalue we will get required data(Optional)
  // loadApiData(){
  //   this.registrationForm.patchValue({
  //     userName:"vijay",
  //     password:"Vijay1021@",
  //     confirmPassword:"Vijay1021@",
  //     // address:{
  //     //   city:"Kalluru",
  //     //   state:"Telangana",
  //     //   postalNo:507209
  //     // }
  //   })
  //     }

  //// 
      loadApiData(){
        this.registrationForm.setValue({
          userName:"vijay",
          password:"Vijay1021@",
          confirmPassword:"Vijay1021@",
          address:{
            city:"Kalluru",
            state:"Telangana",
            postalNo:507209
          }
        })
          }
}
