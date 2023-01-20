import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeeComponent } from './list-employee.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ListEmployeeComponent],
  imports: [
    CommonModule,MatExpansionModule,
    MatCardModule,MatButtonModule,
    MatTabsModule,MatIconModule,
    MatStepperModule,CdkStepperModule,FormsModule,
    MatFormFieldModule,MatInputModule,
  ]
})
export class ListEmployeeModule { }
