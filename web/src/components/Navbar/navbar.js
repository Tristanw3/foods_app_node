import React from 'react';

// import { Nav, Navbar } from 'react-bootstrap';

import { NavbarBackground, LeftNav, RightNav, NavBrand, NavItem } from './NavbarStyled';

export default class NavigationBar extends React.Component {
	handleLogoutBtn = () => {
		this.props.user.logout();
	};

	componentWillMount() {
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		if (!auth) return;
	}

	render() {
		let navItems;
		this.props.user.isLoggedIn ? (
			navItems =
			<RightNav>
				<NavItem to="/account">Account</NavItem>
				<NavItem to='/menu'>Menu</NavItem>
				<NavItem to='/' onClick={this.handleLogoutBtn}>Logout</NavItem>
				<NavItem to='/purchase'><i className="fas fa-shopping-cart" /></NavItem>
			</RightNav>
		) : navItems =
			<RightNav>
				<NavItem to='/signup'>Signup</NavItem >
				<NavItem to="/login">Login</NavItem>
			</RightNav >
		return (
			<NavbarBackground>
				<LeftNav>
					<NavBrand to='/'>Sweets To Go</NavBrand>
				</LeftNav>
				<RightNav>
					{navItems}
				</RightNav>
			</NavbarBackground>
		);
	}
}