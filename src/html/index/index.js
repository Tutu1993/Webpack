require('cssDir/normalize.css');
require('cssDir/public.css');
require('cssDir/nav.css');
require('cssDir/footer.css');

import { createStore } from 'redux';
import reducer from './reducer.js';
import Counter from './Counter.js';

const store = createStore(reducer);

class App extends React.Component {
	render() {
		return (
			<div>
				<Counter
					value={store.getState().reducer}
					onAdd={() => store.dispatch({type: 'INCREMENT'})}
					onDel={() => store.dispatch({type: 'DECREMENT'})}
				/>
				<Counter
					value={store.getState().reducerCopy}
					onAdd={() => store.dispatch({type: 'INCREMENTCOPY'})}
					onDel={() => store.dispatch({type: 'DECREMENTCOPY'})}
				/>
			</div>
		);
	}
}

const render = () => {
	ReactDOM.render(
		<App />,
		document.querySelector('#root')
	);
};

render();
store.subscribe(render);
