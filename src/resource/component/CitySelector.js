import Selector from 'componentDir/Selector.js'

class CitySelector extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			province: '',
			city: '',
			area: ''
		}
		this.handleProvinceChange = this.handleProvinceChange.bind(this)
		this.handleCityChange = this.handleCityChange.bind(this)
		this.handleAreaChange = this.handleAreaChange.bind(this)
	}
	handleProvinceChange(event) {
		this.setState({
			province: event.target.value,
			city: '',
			area: ''
		})
	}
	handleCityChange(event) {
		this.setState({
			city: event.target.value,
			area: ''
		})
	}
	handleAreaChange(event) {
		this.setState({
			area: event.target.value
		})
	}
	render() {
		const province = require('jsonDir/province.json').sort((a, b) => a.ProSort - b.ProSort)
		const city = require('jsonDir/city.json')
		const area = require('jsonDir/area.json')
		const provinceList = province.map((value, index) =>
			<option value={value.name} key={index}>{value.name}</option>
		)
		let proID = ''
		province.map(value => {
			if (value.name === this.state.province) {
				proID = value.ProID
			}
		})
		const cityList = proID ?
			city.filter(value => value.ProID === proID)
				.map((value, index) =>
					<option value={value.name} key={index}>{value.name}</option>
				)
			: []
		let cityID = ''
		city.filter(value => value.ProID === proID).map(value => {
			if (value.name === this.state.city) {
				cityID = value.CityID
			}
		})
		const areaList = cityID ?
			area.filter(value => value.CityID === cityID)
				.map((value, index) =>
					<option value={value.DisName} key={index}>{value.DisName}</option>
				)
			: []
		return (
			<div>
				<Selector name={ 'province' } value={ this.state.province } onChange={ this.handleProvinceChange } list={ provinceList }/>
				<Selector name={ 'city' } value={ this.state.city } onChange={ this.handleCityChange } list={ cityList }/>
				<Selector name={ 'area' } value={ this.state.area } onChange={ this.handleAreaChange } list={ areaList }/>
			</div>
		)
	}
}

export default CitySelector
