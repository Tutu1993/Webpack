const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const add = () => {
	return {
		type: INCREMENT
	}
}
const del = () => {
	return {
		type: DECREMENT
	}
}

const addIfOdd = () => {
    return (dispatch, getState) => {
        if (getState().counter % 2 == 0) {
            return
        }
        dispatch(add())
    }
}

export { add, del, addIfOdd }
