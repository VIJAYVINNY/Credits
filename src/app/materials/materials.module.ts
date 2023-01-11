import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [MaterialsComponent],

  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,MatBadgeModule
  ],
  exports:[]
})
export class MaterialsModule { }
