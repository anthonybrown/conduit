import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'
import ListErrors           from './ListErrors'
import agent                from '../agent'

const mapStateToProps = (state) => ({
	...state.settings,
	currentUser: state.common.currentUser
})

const mapDispatchToProps = (dispatch) => ({
	onClickLogout: () => dispatch({ type: 'LOGOUT' }),
	onSubmitForm: (user) =>
		dispatch({ type: 'SETTINGS_SAVED', payload: agent.Auth.save(user) })
})

class SettingsForm extends Component {
	constructor() {
		super()

		this.state = {
			image    : '',
			bio      : '',
			email    : '',
			password : ''
		}

		this.updateState = field => e => {
			const state = this.state
			const newState = Object.assign({}, state, { [field]: e.target.value })
			this.setState(newState)
		}

		this.submitForm = (e) => {
			e.preventDefault()

			const user = Object.assign({}, this.state)
			if (!user.password) {
				delete user.password
			}

			this.props.onSubmitForm(user)
		}
	}

	componentWillMount() {
		if (this.props.currentUser) {
			Object.assign(this.state, {
				image: this.props.currentUser.image || '',
				username: this.props.currentUser.username,
				bio: this.props.currentUser.bio,
				email: this.props.currentUser.email
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser) {
			this.setState(Object.assign({}, this.state, {
				image: nextProps.currentUser.image || '',
				username: nextProps.currentUser.username,
				bio: nextProps.currentUser.bio,
				email: nextProps.currentUser.email
			}))
		}
	}

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<fieldset>

					<fieldset className='form-group'>
						<input
							className='form-control'
							type='text'
							placeholder='URL of profile picture'
							value={this.state.image}
							onChange={this.updateState('image')}
						/>
					</fieldset>

					<fieldset className='form-group'>
						<input
							className='form-control'
							type='text'
							placeholder='Username'
							value={this.state.username}
							onChange={this.updateState('username')}
						/>
					</fieldset>

					<fieldset className='form-group'>
						<input
							className='form-control'
							type='text'
							placeholder='Short bio about you!'
							value={this.state.bio}
							onChange={this.updateState('bio')}
						/>
					</fieldset>

					<fieldset className='form-group'>
						<input
							className='form-control'
							type='text'
							placeholder='Email!'
							value={this.state.email}
							onChange={this.updateState('email')}
						/>
					</fieldset>

					<fieldset className='form-group'>
						<input
							className='form-control'
							type='text'
							placeholder='New Password'
							value={this.state.password}
							onChange={this.updateState('password')}
						/>
					</fieldset>

					<button
						className='btn btn-lg btn-primary pull-xs-right'
						type='submit'
						disabled={this.state.inProgress}>
							Update Settings
					</button>

				</fieldset>
			</form>
		)
	}

}

class Settings extends Component  {
	render() {
		return (
			<div className='settings-page'>
				<div className='container'>
					<div className='row'>
						<div className='col-md6 offset-md-3 col-xs-12'>
							<h1 className='text-xs-center'>Your Settings</h1>

							<ListErrors errors={this.props.errors}></ListErrors>

							<SettingsForm
								currentUser={this.props.currentUser}
								onSubmitForm={this.props.onSubmitForm} />

							<hr />

							<button
								className='btn btn-outline-danger'
								onClick={this.props.onClick}>
								Or Click Here to Logout
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
