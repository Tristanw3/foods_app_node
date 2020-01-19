import React from 'react';
import { LoginPage, LoginStyled, LoginHeader, } from './LoginStyled';
import { Button, StyledButton, SignupLink, InputStyling } from '../Common/Buttons';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	// componentDidUpdate(prevProps) {
	// 	if ()
	// }

	handleEmailForm = (e) => {
		this.setState({
			...this.state,
			email: e.target.value
		});
	};

	handlePasswordForm = (e) => {
		this.setState({
			...this.state,
			password: e.target.value
		});
	};

	handleLoginBtn = () => {
		this.props.user.login(this.state.email, this.state.password);
	};

	render() {
		const loggedIn = this.props.user.isLoggedIn;
		if (loggedIn === true) {
			return <Redirect to="/menu" />
		}
		return (
			<LoginPage>
				<LoginStyled>
					<LoginHeader>Login</LoginHeader>
					<InputStyling>
						<input type="text" placeholder="Email" onChange={this.handleEmailForm} />
						<input type="password" placeholder="Password" onChange={this.handlePasswordForm} />
					</InputStyling>
					<StyledButton onClick={this.handleLoginBtn}>Login</StyledButton>
					<p>
						<SignupLink to="/signup">Need to Sign-Up?</SignupLink>
					</p>
				</LoginStyled>

			</LoginPage>
		);
	}
}
