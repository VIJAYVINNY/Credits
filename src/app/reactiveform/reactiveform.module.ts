import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform.component';
import { FormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [ReactiveformComponent],
  imports: [
    CommonModule,FormsModule,
    MatBadgeModule
  ],

})
export class ReactiveformModule { }
