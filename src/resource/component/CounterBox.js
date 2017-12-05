import Counter from 'componentDir/Counter.js'
import { store } from 'jsDir/store.js'
import { add, del, addIfOdd } from 'jsDir/action.js'
import { connect } from 'react-redux'

class CounterContainer extends React.Component {
	constructor(props) {
		super()
	}
	render() {
		return (
			<Counter
				value={this.props.counter}
				onAdd={this.props.increment}
				onDel={this.props.decrement}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		increment: () => store.dispatch(addIfOdd()),
		decrement: () => store.dispatch(del()),
	}
}
const CounterBOX = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterContainer)



export default CounterBOX
