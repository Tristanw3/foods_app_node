import React from 'react';
import { LoginPage, LoginStyled, LoginHeader, } from './LoginStyled';
import { Button, StyledLink, SignupLink, InputStyling } from '../Button';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

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
		console.log(this.props);
		this.props.user.login(this.state.email, this.state.password);
	};

	render() {
		return (
			<LoginPage>
				<LoginStyled>
					<LoginHeader>Login</LoginHeader>
					<InputStyling>
						<input type="text" placeholder="Email" onChange={this.handleEmailForm} />
						<input type="text" placeholder="Password" onChange={this.handlePasswordForm} />
					</InputStyling>
					<StyledLink >
						<Button onClick={this.handleLoginBtn}>
							<Link to='/menu'>Login</Link>
						</Button>
					</StyledLink>
					<p>
						<SignupLink to="/signup">Need to Sign-Up?</SignupLink>
					</p>
				</LoginStyled>

			</LoginPage>
		);
	}
}
