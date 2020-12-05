import React, { useContext, useEffect, useState } from 'react';
import { contextBasket } from '../Contexts/Basket';
import Axios from 'axios';

function Checkout() {
	const [basket, updateBasket] = useContext(contextBasket);
	const [customer_name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone_number, setPhone] = useState('');
	const [payment, setPayment] = useState('');

	useEffect(() => {
		console.log(payment);
	}, [payment])

	function CreatePDisplay() {

		return basket.map(phone => {
			return (
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
			)
		})

	}

	useEffect(() => {
		console.log(customer_name);
	}, [customer_name])

	
	function pushCustomer(e) {
		var formData = new FormData();
		formData.append('customer_name', customer_name);
		formData.append('customer_tel', phone_number);
		formData.append('customer_email', email);

		Axios.post('http://localhost/phone_compare/api/customer.php', formData);
	}

	return (
		<div>
			<div className='checkout-container'>
				<div className='basket'>
					{CreatePDisplay()}
				</div>

				<div className="order-form">
					<form action="customer.php" method="post" name = 'customerform'>
						<div className="elem-group">
							<label htmlFor="customer_name">Full Name</label>
							<input type="text" id="customer_name" name="customer_name" placeholder="eg. Claudia Boarna" required value = {customer_name} onChange= {(e) =>
								setName(e.target.value)
							}></input>
						</div>
						<div className="elem-group">
							<label htmlFor="customer_email">E-mail Address</label>
							<input type="email" id="customer_email" name="customer_email" placeholder="eg. claudia@gmail.com" required value = {email} onChange = {(e) => setEmail(e.target.value)}></input>
						</div>
						<div className="elem-group">
							<label htmlFor="customer_tel">Phone Number</label>
							<input type="tel" id="customer_tel" name="customer_tel" placeholder="eg. 0755098444" required value = {phone_number} onChange = {(e) => setPhone(e.target.value)}></input>
						</div>

						<div className="elem-group">
							<label htmlFor="payment-selection">Select Payment Type</label>
							<select id="payment-selection" name="payment_preference" required value = {payment} onChange = {(e) => setPayment(e.target.value)}>
								<option value="Choose from the list">Choose from the list</option>
								<option value="Visa Credit">Visa Credit</option>
								<option value="Visa Debit">Visa Debit</option>
								<option value="Pay Pal">Pay Pal</option>
							</select>
						</div>

						<button class="cta elem-group" type="submit" name="submit" onClick = {(e) => pushCustomer(e)}>Buy Now</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Checkout;