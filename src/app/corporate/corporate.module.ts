import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateComponent } from './corporate.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [CorporateComponent],
  imports: [
    CommonModule,
    MatGridListModule,FormsModule,
    MatSelectModule,MatCheckboxModule,
    ReactiveFormsModule,MatAutocompleteModule,
    MatRadioModule,MatDatepickerModule,MatNativeDateModule,
    MatTooltipModule,MatSnackBarModule
  ]
})
export class CorporateModule { }

