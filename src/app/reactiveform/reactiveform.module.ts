import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveformComponent],
  imports: [
    CommonModule,FormsModule
  ],

})
export class ReactiveformModule { }
