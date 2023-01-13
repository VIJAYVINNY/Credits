import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [MaterialsComponent],

  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,MatBadgeModule,
    MatProgressSpinnerModule,
    MatCardModule,MatRadioModule,MatSliderModule,MatToolbarModule,MatTooltipModule,MatTabsModule
    ,MatSidenavModule
  ],
  exports:[]
})
export class MaterialsModule { }
