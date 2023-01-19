import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [ ListEmployeeComponent],
  imports: [
    CommonModule,MatExpansionModule
  ]
})
export class ListEmployeeModule { }
