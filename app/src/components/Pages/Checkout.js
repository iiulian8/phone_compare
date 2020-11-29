import React, { useContext, useEffect, useState } from 'react';
import { contextBasket } from '../Contexts/Basket';

function Checkout() {
	const [basket, updateBasket] = useContext(contextBasket);


	useEffect(() => {
		console.log(contextBasket + " 1 ");

	},[contextBasket])

	function showPhones() {
			
		basket.map(phone => {
			<div class="phone">
				<div class="item phonepic">
					
				</div>
				<div class="item phonedetails">
					<p>Brand:{phone.phone_name}</p>
					<p>Model:{phone.phone_model}</p>
					<p>Storage:{phone.phone_memory}</p>
					<p>Camera:{phone.phone_camera}</p>
				</div>
				<div class="item supplierpic">
					
				</div>
				<div class="item phoneprice">
					<h3>{phone.phone_rating}/5 Stars Rating</h3>
					<h3>£{phone.phone_price}</h3>
				</div>
			</div>
		})
	}

	return (
		<div>
			<div className='checkout-container'>
				<div className='basket'>
					{showPhones()}
				</div>

				<div className="order-form">
					<form action="customer.php" method="post">
						<div className="elem-group">
							<label htmlFor="customer_name">Full Name</label>
							<input type="text" id="customer_name" name="customer_name" placeholder="eg. Claudia Boarna" required></input>
						</div>
						<div className="elem-group">
							<label htmlFor="customer_email">E-mail Address</label>
							<input type="email" id="customer_email" name="customer_email" placeholder="eg. claudia@gmail.com" required></input>
						</div>
						<div className="elem-group">
							<label htmlFor="customer_tel">Phone Number</label>
							<input type="tel" id="customer_tel" name="customer_tel" placeholder="eg. 0755098444" required></input>
						</div>

						<div className="elem-group">
							<label htmlFor="payment-selection">Select Payment Type</label>
							<select id="payment-selection" name="payment_preference" required>
								<option value="Choose from the list">Choose from the list</option>
								<option value="Visa Credit">Visa Credit</option>
								<option value="Visa Debit">Visa Debit</option>
								<option value="Pay Pal">Pay Pal</option>
							</select>
						</div>

						<button class="cta elem-group" type="submit" name="save" value="submit">Buy Now</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Checkout;