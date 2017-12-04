import { combineReducers } from 'redux'

const reducer = (state = 10, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

const reducerCopy = (state = 5, action) => {
	switch (action.type) {
		case 'INCREMENTCOPY':
			return state + 1
		case 'DECREMENTCOPY':
			return state - 1
		default:
			return state
	}
}

const changeState = (state = false, action) => {
	switch (action.type) {
		case 'CHANGE_STATE':
			return !state
		default:
			return state
	}
}

const reducerCombine = combineReducers({
	reducer,
	reducerCopy,
	changeState
})

export default reducerCombine
