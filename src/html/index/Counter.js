class Counter extends React.Component {
	render() {
		const { value, onAdd, onDel } = this.props;
		return (
			<div>
				<p>sum: {value}</p>
				<button onClick={onAdd}>+</button>
				<button onClick={onDel}>-</button>
			</div>
		);
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	onAdd: PropTypes.func.isRequired,
	onDel: PropTypes.func.isRequired
};

export default Counter;
