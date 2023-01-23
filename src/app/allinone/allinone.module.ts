import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
import { ImplementingComponent } from '../implementing/implementing.component';
import { LoginComponent } from '../login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [ListEmployeeComponent,ImplementingComponent,LoginComponent],
  imports: [
    CommonModule,MatCheckboxModule,
    MatRadioModule,MatToolbarModule,
    MatListModule,MatIconModule,MatFormFieldModule,
    MatSelectModule,MatGridListModule
  ]
})
export class AllinoneModule { }
