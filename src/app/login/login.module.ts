import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,MatMenuModule,MatToolbarModule,
    MatListModule,MatIconModule,MatFormFieldModule,
    MatSelectModule,MatGridListModule

  ]
})
export class LoginModule { }
