import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateComponent } from './corporate.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [CorporateComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class CorporateModule { }
