import { add, del, addIfOdd } from './action.js'
import { store } from 'jsDir/store.js'


export default dispatch => {
	return {
		increment: () => store.dispatch(add()),
		decrement: () => store.dispatch(del()),
	}
}
