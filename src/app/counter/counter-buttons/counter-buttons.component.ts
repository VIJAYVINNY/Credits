import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  @Output() increment=new EventEmitter<void>() ;
  @Output() decrement=new EventEmitter<void>();
  @Output() reset=new EventEmitter<void>();
constructor(private store:Store<{counter:number}>) { }

ngOnInit(): void {}

    onIncrement(): void{
      this.increment.emit();
        }

        onDecrement(){
      this.decrement.emit();
        }

        onReset(){
      this.reset.emit();
       }

}
