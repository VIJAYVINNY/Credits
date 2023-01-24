import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineComponent } from './offline.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [OfflineComponent],
  imports: [
    CommonModule,MatToolbarModule,
    
  ]
})
export class OfflineModule { }
