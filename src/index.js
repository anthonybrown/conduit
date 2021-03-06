import { Provider }					from 'react-redux'
import ReactDOM							from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import React, { Component }	from 'react'

import App									from './components/App'
import Home									from './components/Home'
import Login								from './components/Login'
import Register							from './components/Register'
import Settings							from './components/Settings'
import Article							from './components/Article'
import store								from './store'

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home} />
				<Route path='login' component={Login} />
				<Route path='register' component={Register} />
				<Route path='settings' component={Settings} />
				<Route path='article/:id' component={Article} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'))
