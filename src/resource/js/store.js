import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducer from 'jsDir/reducer.js'

const middlewares = []
const history = createHistory()

middlewares.push(routerMiddleware(history))

middlewares.push(thunk)

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`)

	middlewares.push(logger)
}

const store = createStore(reducer, applyMiddleware(...middlewares))

export { store, history }
