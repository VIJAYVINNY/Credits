import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
import { ImplementingComponent } from '../implementing/implementing.component';
import { LoginComponent } from '../login/login.component';
import { MethodsComponent } from '../methods/methods.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AllinoneComponent } from './allinone.component';


@NgModule({

  declarations: [
    ListEmployeeComponent,
    ImplementingComponent,
    LoginComponent,
    MethodsComponent,
    AllinoneComponent],


  imports: [
    CommonModule,MatCheckboxModule,
    MatRadioModule,MatToolbarModule,
    MatListModule,MatIconModule,MatFormFieldModule,
    MatSelectModule,MatGridListModule,
    MatDatepickerModule,MatNativeDateModule,
    MatTooltipModule,
  ]
})
export class AllinoneModule { }
