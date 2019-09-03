import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  counter: number;
  constructor(private store:Store<AppState>) { 
    this.store.select('counter')
    .subscribe(counter => {
      this.counter = counter;
      console.log("Resetado a "+counter);
    })
  }
/*
  reset(){
  	this.counter = 0;
  }
*/
  reset(){
     const action = new ResetAction();
     this.store.dispatch(action);
  }

  ngOnInit(){}

}
