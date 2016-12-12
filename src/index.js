import ReactDOM             from 'react-dom'
import React, { Component } from 'react'
import { createStore }      from 'redux'

const defaultState = { checked: false }

const reducer = function (state = defaultState, action) {
	switch (action.type) {
		case 'TOGGLE':
			return { ...state, checked: !state.checked }
	}
	return state
}

const store = createStore(reducer)

class App extends Component {
	constructor(){
		super()
		this.state = {}
	}

	componentWillMount() {
	  store.subscribe(() => this.setState(store.getState()))
	}

  render() {
		const onClick = () => store.dispatch({ type: 'TOGGLE' })
    return (
		  <div>
				<h1>To-do's</h1>
				<div>
					Learn Redux&nbsp;
					<input
						type='checkbox'
						checked={!!this.state.checked}
						onClick={onClick}
					/>
				</div>
			</div>
    )
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'))
