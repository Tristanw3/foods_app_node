import React, { Component } from 'react';
import axios from 'axios';

import MenuItem from './MenuItem/MenuItem';
import { MenuPageStyling } from './MenuPageStyled';

export default class MenuPage extends Component {
	state = {
		foodItems: []
	};

	componentDidMount() {
		this.update();
	}
	componentDidUpdate(prevProps) {
		if (this.props.user.isLoggedIn !== prevProps.user.isLoggedIn) { this.update(); }
	}

	update() {
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		if (!auth) return;

		axios
			.get(`/api/foods`, {
				headers: { Authorization: `Bearer ${auth.token}` }
			})
			.then((response) => {
				this.setState({
					...this.state,
					foodItems: response.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const foods = this.state.foodItems.map((food, index) => (
			<MenuItem
				key={index}
				addToCart={this.props.addToCart}
				title={food.title}
				cost={food.cost}
				image={food.image}
				background={food.background}
				id={food._id}
			/>
		));

		return <MenuPageStyling>{foods}</MenuPageStyling>;
	}
}
