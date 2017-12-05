import { add, del, addIfOdd } from './action.js'


export default dispatch => {
	return {
		increment: addIfOdd,
		decrement: del,
	}
}
