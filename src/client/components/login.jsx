import React from 'react';
import '../css/modal';
import '../css/grid';
import '../css/login';

export default class Login extends React.Component {

	static propTypes = {
    showLoginModal: React.PropTypes.func.isRequired
  }

	constructor() {
		super();
	}

	componentDidMount() {
		document.getElementById('login-modal').focus();
	}

	onBlur = (e) => {
		if (e.target.className.indexOf("modal-overlay") > -1) {
			e.preventDefault();
			this.props.showLoginModal(false);
		}
	}

	render() {
		return(
			<div className="login modal-overlay" onClick={this.onBlur}>
				<div className="modal-container">
					<div id="login-modal" className="grid modal" tabIndex="1">
						<div className="grid-row-item-row-center">
							<div>Login to your account</div>
						</div>
						<div className="grid-row-item-row-no-spacing">
							<div className="grid-item-1">
								<div className="single-separator"><hr/></div>
							</div>
						</div>
						<div className="grid-row-item-col-center">
							<div className="grid-item-1"><a className="btn btn-primary-red btn-space-col btn-extra-large-size btn-google" href="#">Google Login</a></div>
							<div className="grid-item-1"><a className="btn btn-primary-red btn-space-col btn-extra-large-size btn-facebook" href="#">Facebook Login</a></div>
						</div>
						<div className="grid-row-item-row">
							<div className="grid-item-1">
								<div className="separator"><span>or</span><hr/></div>
							</div>
							<div className="grid-item-1">
								<input type="email"></input>
							</div>
							<div className="grid-item-1">
								<input type="password"></input>
							</div>
						</div>
						<div className="grid-row-item-row">
							<div className="grid-item">
								<a className="btn btn-primary btn-login" href="#">Sign in</a>
							</div>
						</div>
						<div className="grid-row-item-col-center create-account-row">
							<div className="grid-item"><a className="link-black" href="#">Forgot Password?</a></div>
							<div className="grid-item"><a className="btn btn-primary-grey" href="#">Create new Account</a></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
