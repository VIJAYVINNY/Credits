import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChandruComponent } from './chandru.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [ChandruComponent],
  
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class ChandruModule { }
