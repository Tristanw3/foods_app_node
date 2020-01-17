import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home/Home';

// import { MenuItems } from './components/MenuItems/Menu';
import Account from './components/Account/AccountPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { NoMatch } from './components/NoMatch';
import NavigationBar from './components/Navbar/navbar';
import MenuPage from './components/Menu/MenuPage';
import PurchasePage from './components/Cart/PurchasePage';

import './App.css'

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor(props) {
		super(props);
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		this.state = {
			isLoggedIn: auth ? true : false,
			currentUser: auth ? auth.name : null,
			cart: [],
			total: 0
		};
	}

	// componentDidMount() {
	// 	// this.getUser();
	// 	let auth = JSON.parse(sessionStorage.getItem('auth'));
	// 	if (!auth) return;
	// }

	handleLogin(email, password) {
		axios
			.post('/login', {
				email: email,
				password: password
			})
			.then((response) => {
				sessionStorage.setItem('auth', JSON.stringify(response.data));
				let auth = JSON.stringify(response.data)
				this.setState({ ...this.state, isLoggedIn: true, currentUser: auth.user });

			})
			.catch((err) => {
				console.log('Failed to login user with error: ');
				console.log(err);
			});
	}

	handleLogout() {
		sessionStorage.clear();
		this.setState({ ...this.state, currentUser: null, isLoggedIn: false });
	}

	handleAddToCart = (food) => {
		let cartArr = this.state.cart;
		cartArr.push(food);
		this.setState({ ...this.state, cart: cartArr });
		console.log(food)
	};

	render() {
		const userProps = {
			isLoggedIn: this.state.isLoggedIn,
			currentUser: this.state.currentUser,
			logout: () => this.handleLogout(),
			login: (email, pass) => this.handleLogin(email, pass)
		};

		const cartProps = {
			cart: this.state.cart,
			total: this.state.total
		};


		return (
			<Router>
				<NavigationBar user={userProps} />

				<Switch>
					<Route exact path="/">
						<Home user={userProps} cart={cartProps} />
					</Route>
					<Route path="/menu" component={MenuPage}>
						<MenuPage user={userProps} cart={cartProps} addToCart={this.handleAddToCart} />
					</Route>
					<Route path="/purchase" component={PurchasePage}>
						<PurchasePage user={userProps} cart={cartProps} />
					</Route>
					<Route path="/account" component={Account}>
						<Account user={userProps} cart={cartProps} />
					</Route>
					<Route path="/login" component={Login}>
						<Login user={userProps} cart={cartProps} />
					</Route>
					{/* <Route path="/signup" component={Signup} user={userProps} cart={cartProps}/> */}
					<Route path="/signup">
						<Signup user={userProps} cart={cartProps} />
					</Route>

					<Route component={NoMatch} />
				</Switch>
			</Router>
		);
	}
}

export default App;
