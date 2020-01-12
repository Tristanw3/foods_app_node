import React, { Component } from 'react';
import { FoodTextLayout, FoodImage, FoodName, FoodCost } from '../Food/FoodStyled';
import axios from 'axios';
import {
	PageSize,
	YellowBanner,
	ButtonRow,
	PinkContainer,
	PurchaseCard,
	AddSubtractBlock,
	PurchaseNumber
} from './PurchasePageStyled';
import { Add, Subtract, Button, StyledLink } from '../Button';
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
			console.log(food)
			return food.id
		});
		console.log(auth.user._id)
		console.log(foodIds)

		if (!auth) return;
		// console.log(auth);
		axios
			.post('/orders/create', {
				headers: { Authorization: `Bearer ${auth.token}` },
				foods: foodIds,
				userId: auth.user._id,
				cost: 100

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
			<PageSize>
				<YellowBanner>
					<h1>Total Amount: ${this.props.cart.total}.00</h1>
					{this.state.isShowing ? <BackDrop onClick={this.closeModalHandler} /> : null}

					<ButtonRow>
						<StyledLink to="/menu">
							<Button>Back To Menu</Button>
						</StyledLink>
						<Button onClick={this.confirmPurchase}>Confirm Purchase</Button>
					</ButtonRow>
				</YellowBanner>

				<PinkContainer>
					<Modal show={this.state.isShowing} close={this.closeModalHandler}>
						<p>and thanks for shopping with us</p>
					</Modal>
					<ol>
						{foodList}
					</ol>
					{/* <PurchaseCard>
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
				</PinkContainer>
			</PageSize>
		);
	}
}
