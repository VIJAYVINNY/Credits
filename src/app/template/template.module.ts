import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [TemplateComponent],

  imports: [
    CommonModule,FormsModule,MatToolbarModule
  ]
})
export class TemplateModule { }
