//Actions

interface Action{
	type: string;
	payload?: any;
}

const incrementAction: Action ={
	type: 'INCREMENT'
} 
const decrementAction: Action ={
	type: 'DECREMENT'
}
const multiplicateAction: Action ={
	type: 'MULTIPLICATE',
	payload: 2
} 
const divideAction: Action ={
	type: 'DIVIDE',
	payload: 2
} 
function reducer( state = 10, action: Action){

	/*
	NOT USE IF IN REDUCERS
	if(action.type === 'INCREMENTAR'){
		return state+=1;
	}
	return state;
	*/


	switch (action.type) {
		case 'INCREMENT':
			return state+=1;
		case 'DECREMENT':
			return state-=1;
		case 'MULTIPLICATE':
			return state*action.payload;
		case 'DIVIDE':
			return state/action.payload;
		default:
			return state;
	}
}


//Using reducer

console.log(reducer(10,incrementAction));
console.log(reducer(10,decrementAction));
console.log(reducer(10,multiplicateAction));
console.log(reducer(10,divideAction));




