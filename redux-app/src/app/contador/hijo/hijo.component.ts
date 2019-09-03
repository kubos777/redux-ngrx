// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';
import { MultiplyAction, DivideAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  /*
  @Input() counter:number;
  @Output() counterChange = new EventEmitter<number>();
  constructor() { }
  ngOnInit(){}
  multiply(){
  	this.counter *= 2;
  	this.counterChange.emit(this.counter);
  }
  divide(){
  	this.counter /= 2;
	this.counterChange.emit(this.counter);

  }
  resetFather(newCounter){
    this.counter = newCounter;
      this.counterChange.emit(this.counter);

  }
  */

  counter:number;
  constructor(private store:Store<AppState>) { 
    this.store.select('counter')
    .subscribe(counter => {
      this.counter = counter;
      console.log(counter);
    })

  }
  ngOnInit(){}
  multiply(){
    const action = new MultiplyAction(2);
    this.store.dispatch(action);
  }
  divide(){
    const action = new DivideAction(3);
    this.store.dispatch(action);

  }
  resetFather(newCounter){
    this.counter = newCounter;

  }

}
