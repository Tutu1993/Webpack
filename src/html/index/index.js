require('cssDir/normalize.css');
require('cssDir/public.css');
require('cssDir/nav.css');
require('cssDir/footer.css');

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer.js';
import Counter from './Counter.js';

const middlewares = [];

middlewares.push(thunk);

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middlewares));

class App extends React.Component {
	render() {
		return (
			<div>
				<Counter
					value={store.getState().reducer}
					onAdd={() => store.dispatch(actionStart())}
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
fetch('./apple.json')
	.then(
		function(response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
			response.status);
			return;
		}

		// Examine the text in the response
		response.json().then(function(data) {
		  	const div = document.createElement('div');

			div.innerHTML = data.apple;
        	document.querySelector('body').appendChild(div);
		});
	})
	.catch(function(err) {
		console.log('Fetch Error :-S', err);
	});
