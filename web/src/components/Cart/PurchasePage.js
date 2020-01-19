import React, { Component } from 'react';
import axios from 'axios';
import { FoodTextLayout, FoodImage, FoodName, FoodCost } from '../Food/FoodStyled';
import { StyledButton } from '../Common/Buttons'
import {
	AccountPage,
	YellowBanner,
	ButtonRow,
	PinkContainer,
	PurchaseCard,
	AddSubtractBlock,
	PurchaseNumber
} from './PurchasePageStyled';
import { Add, Subtract, Button, StyledLink } from '../Common/Buttons';
import { BackDrop } from '../Modal/ModalStyled';
import { Modal } from '../Modal/Modal';

export default class PurchasePage extends Component {
	constructor(props) {
		super(props);
		this.confirmPurchase = this.confirmPurchase.bind(this);

		this.state = {
			isShowing: false
		};
	}

	openModalHandler = () => {
		this.setState({
			...this.state,
			isShowing: true
		});
	};

	closeModalHandler = () => {
		this.setState({
			...this.state,
			isShowing: false
		});
	};

	confirmPurchase() {
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		const foodIds = this.props.cart.cart.map((food) => {
			return food.id
		});
		const cartCost = 101
		console.log(cartCost)

		if (!auth) return;
		// console.log(auth);
		axios
			.post('/orders/create', {
				foods: foodIds,
				userId: auth.user._id,
				cost: cartCost
			}, {
				headers: { Authorization: `Bearer ${auth.token}` },
			})
			.then((response) => {
				console.log("the response")
				console.log(response)

			})
			.catch((err) => {
				console.log(err);
			});
	}


	render() {

		const foodList = this.props.cart.cart.map((food, index) => (
			<li key={index}>{food.title} -- {food.cost}</li>
		));

		return (
			<AccountPage>
				<YellowBanner>
					<h1>Total Amount: ${this.props.cart.total}.00</h1>
					{this.state.isShowing ? <BackDrop onClick={this.closeModalHandler} /> : null}

					<ButtonRow>
						<StyledButton to="/menu">Back To Menu</StyledButton>
						<StyledButton onClick={this.confirmPurchase}>Confirm Purchase</StyledButton>
					</ButtonRow>
				</YellowBanner>
				<div></div>

				{/* <PinkContainer> */}
				{/* <Modal show={this.state.isShowing} close={this.closeModalHandler}>
					<p>and thanks for shopping with us</p>
				</Modal>
				<ol>
					{foodList}
				</ol>
				<PurchaseCard>
					<FoodImage />

					<FoodTextLayout>
						<FoodName>Iced Coffee</FoodName>
						<FoodCost>... $5.00</FoodCost>
					</FoodTextLayout>

					<AddSubtractBlock>
						<Add>+</Add>
						<PurchaseNumber>0</PurchaseNumber>
						<Subtract>-</Subtract>
					</AddSubtractBlock>
				</PurchaseCard> */}
				{/* </PinkContainer> */}
			</AccountPage>
		);
	}
}
