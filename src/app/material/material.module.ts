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
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';

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
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatTableModule,
    MatTreeModule
    

  
  ]
})
export class MaterialModule { }
