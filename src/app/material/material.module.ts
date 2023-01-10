import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {PortalModule} from '@angular/cdk/portal';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [MaterialComponent],




  
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    PortalModule,
    MatToolbarModule
  
  ]
})
export class MaterialModule { }
