import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const counter = (state = 0, action) => {
  if(action.type == 'INCREMENT') {
    return state + 1;
  } else if (action.type == 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
};

const store = createStore(counter);

store.dispatch({ type: 'INCREMENT'});

const Counter = ({ 
	value,
	  onIncrement,
	  onDecrement
	}) => (
	<h1>{value}</h1>
);

const render = () => {
	ReactDOM.render(
		<Counter value={store.getState()} />,
		document.getElementById('root')
	);
}

store.subscribe(render);

render();

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
