import { createStore } from 'redux';

const reducer = (state = 10, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

const store = createStore(reducer);

class Counter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>sum: {this.props.value}</p>
				<button onClick={this.props.onAdd}>+</button>
				<button onClick={this.props.onDel}>-</button>
			</div>
		);
	}
}

const render = () => {
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onAdd={() => store.dispatch({type: 'INCREMENT'})}
			onDel={() => store.dispatch({type: 'DECREMENT'})}
		/>,
		document.querySelector('#root')
	);
};

render();
store.subscribe(render);

import cube from 'jsDir/math.js';

console.log(cube(5));
