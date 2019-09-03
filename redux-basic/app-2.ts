import { incrementAction } from './contador/contador.actions';
import { decrementAction } from './contador/contador.actions';
import { multiplicateAction } from './contador/contador.actions';
import { divideAction } from './contador/contador.actions';
import { resetAction } from './contador/contador.actions';

import { Action } from './ngrx-fake/ngrx';



function reducer( state = 10, action: Action){

	switch (action.type) {
		case 'INCREMENT':
			return state+=1;
		case 'DECREMENT':
			return state-=1;
		case 'MULTIPLICATE':
			return state*action.payload;
		case 'DIVIDE':
			return state/action.payload;
		case 'RESET':
			state = 0;
			return state
		default:
			return state;
	}
}


//Using reducer

console.log(reducer(10,incrementAction));
console.log(reducer(10,decrementAction));
console.log(reducer(10,multiplicateAction));
console.log(reducer(10,divideAction));
console.log(reducer(10,resetAction));




