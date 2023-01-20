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


@NgModule({
  declarations: [CorporateComponent],
  imports: [
    CommonModule,
    MatGridListModule,FormsModule,
    MatSelectModule,MatCheckboxModule,
    ReactiveFormsModule,MatAutocompleteModule,
    MatRadioModule
  ]
})
export class CorporateModule { }

