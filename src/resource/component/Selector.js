class Selector extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { name, value, list, onChange } = this.props
		return (
			<select name={name} onChange={onChange} value={value}>
				<option value={""} defaultValue style={{display: 'none'}}>--请选择您所在地区--</option>
				{list}
			</select>
		)
	}
}

Selector.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}

export default Selector
