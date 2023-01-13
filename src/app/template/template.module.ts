import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [TemplateComponent],

  imports: [
    CommonModule,FormsModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class TemplateModule { }
