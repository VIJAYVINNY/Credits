import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplementingComponent } from './implementing.component';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [ImplementingComponent],
  imports: [
    CommonModule,FormsModule,
    MatDatepickerModule
  ]
})
export class ImplementingModule { }
