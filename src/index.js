import ReactDOM											from 'react-dom'
import App													from './App'
import { Provider }									from 'react-redux'
import React, { Component }					from 'react'
import {applyMiddleware,createStore} from 'redux'
import { promiseMiddleware}					from './middleware'

const defaultState = {
	appName: 'CONDUIT',
	articles: null
}

const reducer = function (state = defaultState, action) {
	switch (action.type) {
		case 'HOME_PAGE_LOADED':
			return {...state, articles:  action.payload.articles }
	}
	return state
}

const store = createStore(reducer, applyMiddleware(promiseMiddleware))

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'))