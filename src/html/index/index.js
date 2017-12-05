import { connect, Provider } from 'react-redux'
import Counter from 'componentDir/Counter.js'
import { store, history } from 'jsDir/store.js'
import mapStateToProps from 'jsDir/mapStateToProps.js'
import mapDispatchToProps from 'jsDir/mapDispatchToProps.js'

import { ConnectedRouter } from 'react-router-redux'
import { Link, Route, Switch } from 'react-router-dom'

class App extends React.Component {
	render() {
		return (
			<Counter
				value={this.props.counter}
				onAdd={() => store.dispatch(this.props.increment())}
				onDel={() => store.dispatch(this.props.decrement())}
			/>
		)
	}
}

const AppDom = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)


ReactDOM.render(
	<Provider store={store}>
	    <ConnectedRouter history={history}>
			<div>
				<ul>
					<li><Link to="/counter">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				<hr/>
				<Switch>
					<Route exact path="/counter" component={AppDom}/>
					<Route path="/about" component={About}/>
				</Switch>
			</div>
	    </ConnectedRouter>
	</Provider>,
	document.querySelector('#root')
)
