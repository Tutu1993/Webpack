require('cssDir/global/normalize.css');
require('cssDir/global/public.css');
require('cssDir/layout/nav.css');
require('cssDir/layout/footer.css');

// import { createStore, applyMiddleware } from 'redux';
// import { connect, Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducer from './reducer.js';
// import Counter from './Counter.js';
//
// const middlewares = [];
//
// middlewares.push(thunk);
//
// if (process.env.NODE_ENV === `development`) {
//   const { logger } = require(`redux-logger`);
//
//   middlewares.push(logger);
// }
//
// const store = createStore(reducer, applyMiddleware(...middlewares));
//
// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Counter
// 					value={this.props.reducer}
// 					onAdd={this.props.increment}
// 					onDel={this.props.decrement}
// 				/>
// 				<Counter
// 					value={this.props.reducerCopy}
// 					onAdd={this.props.incrementCopy}
// 					onDel={this.props.decrementCopy}
// 				/>
// 			</div>
// 		);
// 	}
// }
//
// const mapStateToProps = state => {
// 	return {
// 		reducer: state.reducer,
// 		reducerCopy: state.reducerCopy
// 	};
// };
// const mapDispatchToProps = dispatch => {
// 	return {
// 		increment: () => store.dispatch({type: 'INCREMENT'}),
// 		decrement: () => store.dispatch({type: 'DECREMENT'}),
// 		incrementCopy: () => store.dispatch({type: 'INCREMENTCOPY'}),
// 		decrementCopy: () => store.dispatch({type: 'DECREMENTCOPY'})
// 	};
// };
// const AppDom = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(App);

// ReactDOM.render(
// 	<Provider store={store}>
//     	<AppDom />
//   	</Provider>,
// 	document.querySelector('#root')
// );

import Route from './route.js';

ReactDOM.render(
	<Route />,
	document.querySelector('#root')
);
