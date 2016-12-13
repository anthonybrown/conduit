'use strict';

import React, {Component} from 'react'
import { Link } from 'react-router'

const LoggedOutView = (props) => {
	if (!props.currentUser) {
		return (
			<ul className='nav navbar-nav pull-xs-right'>

				<li className='nav-item'>
					<Link to='/' className='nav-link'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='login' className='nav-link'>
						Sign in
					</Link>
				</li>

				<li className='nav-item'>
					<Link to='register' className='nav-link'>
						Sign up
					</Link>
				</li>

			</ul>
		)
	}

	return null
}

const LoggedInView = (props) => {
	if (props.currentUser) {
		return (
			<ul className='nav navbar-nav pull-xs-right'>

				<li className='nav-item'>
					<Link to='editor' className='nav-link'>
						<i className='ion-gear-a'></i>&nbsp;New Post
					</Link>
				</li>

				<li className='nav-item'>
					<Link to='settings' className='nav-link'>
						<i className='ion-gear-a'></i>&nbsp;Settings
					</Link>
				</li>


			</ul>
		)
	}
}

class Header extends Component {
	render() {
		return (
			<nav className='navbar navbar-light'>
				<div className="container">
					<Link to='/' className='navbar-brand'>
						{this.props.appName.toLowerCase()}
					</Link>
					<ul className='nav navbar-nav pull-xs-right'>
						<li className="nav-item">
							<Link to='/' className='nav-link'>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to='login' className='nav-link'>
								Sign in
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header
