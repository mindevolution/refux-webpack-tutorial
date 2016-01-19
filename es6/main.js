import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const counter = (state = 0, action) => {
  if(action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
};

const Counter = ({ 
	value,
	onIncrement,
	onDecrement
}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
);

const store = createStore(counter);

const render = () => {
	ReactDOM.render(
		<Counter 
			value={store.getState()} 
			onIncrement={() => 
				store.dispatch({
					type: 'INCREMENT'
				})
			}
			onDecrement={() => 
				store.dispatch({
					type: 'DECREMENT'
				})
			}
			/>,
		document.getElementById('root')
	);
}

const addCounter = (list) => {
	return [...list, 0];
};

const removeCounter = (list, index) => {
	return [
		...list.slice(0, index),
		...list.slice(index + 1)
	];
};

const incrementCounter = (list, index) => {
	return [
		...list.slice(0, index),
		list[index] + 1,
		...list.slice(index + 1)
		];
};

const testAddCounter = () => {
	const listBefore = [];
	const listAfter = [0];
}

const toggleTodo = (todo) => {
	return Object.assign({}, todo, {
		completed: !todo.completed
	});
};

const testToggleTodo = () => {
	const todoBefore = {
		id: 0,
		text: 'Learn Redux',
		completed: false
	};
	const todoAfter = {
		id: 0,
		text: 'Learn Redux',
		completed: true
	};

	deepFreeze(todoBefore);

	expect(
		toggleTodo(todoBefore)
	).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passwd');



store.subscribe(render);

render();
