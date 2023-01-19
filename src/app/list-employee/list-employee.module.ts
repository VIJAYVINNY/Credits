import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ ListEmployeeComponent],
  imports: [
    CommonModule,MatExpansionModule,
    MatCardModule,MatButtonModule
  ]
})
export class ListEmployeeModule { }
