import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,MatDividerModule

  ]
})
export class MaterialModule { }
