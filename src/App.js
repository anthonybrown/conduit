import React, { Component } from 'react'
import { connect }					from 'react-redux'

import Header from './components/Header'

const mapStateToProps = state => ({
	appName: state.appName
})

class App extends Component {

  render() {
		//const onClick = () => store.dispatch({ type: 'TOGGLE' })
    return (
		  <div>
				<Header appName={this.props.appName} />
			</div>
    )
  }
}

export default connect(mapStateToProps, () => ({}))(App)
