import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineComponent } from './offline.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [OfflineComponent],
  imports: [
    CommonModule,MatToolbarModule,
    MatIconModule,MatButtonModule,
    MatDialogModule,MatFormFieldModule
  ]
})
export class OfflineModule { }
