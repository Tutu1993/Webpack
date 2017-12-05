import Counter from 'componentDir/Counter.js'

class CounterBox extends React.Component {
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

export default CounterBox
