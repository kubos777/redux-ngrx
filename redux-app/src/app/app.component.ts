import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';

import { IncreaseAction,DecreaseAction } from './contador/contador.actions';

interface AppState{
	counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {

	counter:number;

	constructor(private store:Store<AppState>){
		//this.counter = 10;
		/*this.store.subscribe(state => {
			// console.log(state);
			this.counter = state.counter;
		});*/
		this.store.select('counter')
		.subscribe(counter => this.counter = counter);
	}

	increase(){
		// this.counter+=1;
		/* const action: Action = {
			type: 'INCREASE'
		}; */
		const action = new IncreaseAction;

		this.store.dispatch( action );

	}
	decrease(){
		// this.counter-=1;
		/*	const action: Action = {
			type: 'DECREASE'
		}; */
		const action = new DecreaseAction;

		this.store.dispatch( action );
	}

}
