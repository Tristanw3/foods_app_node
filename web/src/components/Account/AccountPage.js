import React, { Component } from 'react';

import { Account, Main, YellowAside } from './AccountPageStyled';

import OrderItem from './OrderItem/OrderItem'

export default class AccountPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			orders: [{
				id: 'test_id',
				products: [
					"coffee",
					"cake",
				],
				cost: 10
			}, {
				id: 'test_id',
				products: [
					"coffee",
					"cake",
				],
				cost: 10
			}]
		};
	}
	getOrders() {

	}
	render() {
		const orders = this.state.orders.map((ord, index) => (
			<OrderItem
				key={index}
				id={ord.id}
				products={ord.products}
				cost={ord.cost}
			/>
		));

		return (
			<Account>
				<Main>
					{orders}
				</Main>
				<YellowAside>
					<h1>Purchase History</h1>
					<p>Username: </p>
					<p>Email:</p>
				</YellowAside>
			</Account>
		);
	}
}
