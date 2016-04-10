import React from 'react';
import {Link} from 'react-router'
import Header from './header';
import Login from './login';

export default class App extends React.Component {

	state = {
		showLoginModal: false
	}

	// Defines the main application
	constructor() {
		super();

	}

	/*
	 * Shows the login up modal.
	 */
	showLoginModal = (showModal) => {
		// set noscroll to body so that modal is unscrollable.
		document.body.classList.toggle('noScroll', showModal);

		// set state to show modal component.
		this.setState({
			showLoginModal: showModal
		});
	}

	render() {
		var mainViewCss = ''; // this can be mainView
		return (
			<div className="main">
				<Header 
					showLoginModal={this.showLoginModal} 
					/>
				<div className={mainViewCss}>
					{this.props.children}
				</div>
				{this.state.showLoginModal ? <Login showLoginModal={this.showLoginModal}/> : null}
			</div>
		)
	}
}
