import { createAction, props } from "@ngrx/store";

export const increment=createAction('[CounterComponent] increment');
export const decrement=createAction('[CounterComponent] decrement');
export const reset=createAction('[CounterComponent] reset');

export const customIncrement=createAction('customincrement',
props<{value:number}>()
);
