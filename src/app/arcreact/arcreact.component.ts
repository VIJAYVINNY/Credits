import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-arcreact',
  templateUrl: './arcreact.component.html',
  styleUrls: ['./arcreact.component.scss']
})
export class ArcreactComponent implements OnInit {


  loanInfoForm!: UntypedFormGroup;
  constructor(public fb: UntypedFormBuilder ) { }

  ngOnInit(): void {

    // this.loanInfoForm=new FormGroup({
    //   'loanName':new FormControl(),
    //   'loanType':new FormControl()

    // })

    this.loanInfoForm = this.fb.group({
      'loanName': new UntypedFormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(7),
      Validators.maxLength(15)
    ])),
      'loanType': new UntypedFormControl(),
      'description': new UntypedFormControl()
    })


    // //// Adding Values directly into the form
    // const addingValues = {
    //   'loanName': 'House Loan',
    //   'loanType': 'monthly loan',
    //   'description': 'I want to build a  home'
    // }
    // this.loanInfoForm.setValue(addingValues);    ////With set values we need to give all the values mandatory


    // const addingValues = {
    //   'loanName': 'House Loan',
    //   'loanType': 'monthly loan',
    // //   'description': 'I want to build a  home'
    // }

    // this.loanInfoForm.patchValue(addingValues);  ////  With Patchvalues setting the values are optional


    // this.loanInfoForm.valueChanges.subscribe(data=>{
    //   console.log(data);
    // })
  }


  submitData() {
    console.log(this.loanInfoForm.value);

  }

}
