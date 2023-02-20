import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  // registrationForm:FormGroup;
  constructor(){}



  registrationForm=new UntypedFormGroup({
    userName:new UntypedFormControl(''),
    password:new UntypedFormControl(''),
    confirmPassword:new UntypedFormControl(''),

    address:new UntypedFormGroup({
      city:new UntypedFormControl(''),
      state:new UntypedFormControl(''),
      postalNo:new UntypedFormControl(''),
    })
  });

address: any;
contactList:any;

  ngOnInit(): void {

   }
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
