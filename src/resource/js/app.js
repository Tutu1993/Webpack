import { connect, Provider } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from 'jsDir/store.js'
import mapStateToProps from 'jsDir/mapStateToProps.js'
import mapDispatchToProps from 'jsDir/mapDispatchToProps.js'
import CounterBox from 'componentDir/CounterBox.js'
import CitySelector from 'componentDir/CitySelector.js'

const CounterDOM = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterBox)

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

const AppContainer = () => (
	<ConnectedSwitch>
		<Route exact path="/counter" component={CounterDOM}/>
		<Route path="/about" component={CitySelector}/>
	</ConnectedSwitch>
)

class AppDOM extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/counter">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				<hr/>
				<AppContainer />
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
			    <ConnectedRouter history={history}>
					<AppDOM />
			    </ConnectedRouter>
			</Provider>
		)
	}
}

export default App
