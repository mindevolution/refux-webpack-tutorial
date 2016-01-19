const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
		  return[
			  {
				  id: action.id,
				  text: action.text,
				  completed: false
			  }
		  ];
		case 'TOGGLE_TODO':
		  if (state.id !== action.id) {
			  return state;
		  }

		  alert('TOGGLE_TODO');
		  return {
			id: state.id,
			text: state.text,
			completed: !state.completed
		  };
		default:
			return state;
	}
}
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
		  return [
			  ...state,
			  todo(undefined, action)
		  ];
		case 'TOGGLE_TODO':
		  return state.map(t => todo(t[0], action));
		default:
			return state;
	}
};

import {createStore} from 'redux';

const store = createStore(todos);

console.log('Initial state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispathing ADD_TOO.');
store.dispatch({
	type: 'ADD_TODO',
	id: 0,
	text: 'Learn Redux'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispathing ADD_TOO.');
store.dispatch({
	type: 'ADD_TODO',
	id: 0,
	text: 'Go Shopping'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching TOGGLE_TODO.');
store.dispatch({
	type: 'TOGGLE_TODO',
	id: 0
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');
