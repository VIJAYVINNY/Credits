import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,MatDatepickerModule,
    MatNativeDateModule,MatRadioModule,
    MatButtonModule
  ]
})
export class DialogModule { }
