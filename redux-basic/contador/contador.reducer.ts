import { Action } from '../ngrx-fake/ngrx';

export function contadorReducer( state = 10, action: Action){

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
