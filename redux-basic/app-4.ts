import { Store, createStore } from 'redux'; 
import { contadorReducer } from './contador/contador.reducer';
import { incrementAction } from './contador/contador.actions';

const store:Store = createStore( contadorReducer );

store.subscribe(()=>{
	console.log('Desde el subscribe: ',store.getState());
});

store.dispatch( incrementAction);
store.dispatch( incrementAction);
store.dispatch( incrementAction);
store.dispatch( incrementAction);
store.dispatch( incrementAction);
store.dispatch( incrementAction);