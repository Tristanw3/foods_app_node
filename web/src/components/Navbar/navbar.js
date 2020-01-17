import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { withRouter, Link } from 'react-router-dom';

import './navbar.css'



class NavigationBar extends React.Component {
	handleLogoutBtn = () => {
		this.props.user.logout();
	};


	componentWillMount() {
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		if (!auth) return;
	}

	render() {
		console.log(this.props.isLoggedIn);

		return (
			<Navbar expand="lg">
				<Navbar.Brand >
					<Link to="/">Sweets To Go</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						{!this.props.user.isLoggedIn ?
							<Nav.Item>
								<Nav.Link >
									<Link to='/'>Home</Link>
								</Nav.Link>
							</Nav.Item> : null}
						{!this.props.user.isLoggedIn ?
							<Nav.Item>
								<Nav.Link >
									<Link to='/signup'>Signup</Link>
								</Nav.Link>
							</Nav.Item> : null}
						{this.props.user.isLoggedIn ?
							<Nav.Item>
								<Nav.Link>
									<Link to='/menu'>Menu</Link>
								</Nav.Link>
							</Nav.Item>
							: null}
						{!this.props.user.isLoggedIn ?
							< Nav.Item >
								<Nav.Link >
									<Link to="/login">Login</Link>
								</Nav.Link>
							</Nav.Item> : null}

						{this.props.user.isLoggedIn ?
							< Nav.Item >
								<Nav.Link onClick={this.handleLogoutBtn}>
									<Link to='/'>Logout</Link>
								</Nav.Link>
							</Nav.Item> : null}

						{this.props.user.isLoggedIn ?
							<Nav.Item>
								<Nav.Link >
									<Link to="/account">Account</Link>
								</Nav.Link>
							</Nav.Item> : null}

						{this.props.user.isLoggedIn ?
							<Nav.Item>
								<Nav.Link>
									<Link to='/purchase'><i className="fas fa-shopping-cart" /></Link>
								</Nav.Link>
							</Nav.Item> : null}
					</Nav>
				</Navbar.Collapse >
			</Navbar >

		);
	}
}


export default NavigationBar;