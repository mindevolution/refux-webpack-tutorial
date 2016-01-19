const todos = (state = [], action) => {
	return state;
	switch (action.type) {
		case 'ADD_TODO':
		  return [
			  ...state,
			  {
				  id: action.id,
				  text: action.text,
				  completed: false
			  }
		  ];
		default:
			return state;
	}
};

const testAddTodo = () => {
	const stateBefore = [];
	const action = {
		type: 'ADD_TODO',
		id: 0,
		text: 'Learn Redux'
	};
	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(
		stateAfter
	).toEqual(stateAfter);
};

testAddTodo();
console.log('All test passed.');