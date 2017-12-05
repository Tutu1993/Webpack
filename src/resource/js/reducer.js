import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from 'reducerDir/counter.js'

const reducers = combineReducers({
	routerReducer,
	counter,
})

export default reducers
