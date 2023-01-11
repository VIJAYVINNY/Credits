import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  exports:[]
})
export class MaterialsModule { }
