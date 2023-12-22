import { useState } from "react";

const postOrder = async (
	orderData,
	setOrderSent,
	onConfirmOrder,
	setCustomerDetails
) => {
	try {
		// Send a POST request to your server
		const response = await fetch("http://127.0.0.1:3000/api/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(orderData),
		});

		if (response.ok) {
			// Order successfully placed
			console.log(orderData);
			setOrderSent(true); // Set the orderSent state to true
			onConfirmOrder(orderData); // Notify the parent component

			// Reset the form or perform any other necessary actions
			setCustomerDetails({
				name: "",
				street: "",
				city: "",
				email: "",
			});
		} else {
			// Handle errors if the request fails
			console.error("Failed to place the order");
		}
	} catch (error) {
		console.error("An error occurred while placing the order:", error);
	}
};

export default function OrderForm({ onConfirmOrder, cartItems, onClose }) {
	const [customerDetails, setCustomerDetails] = useState({
		name: "",
		street: "",
		city: "",
		email: "",
	});
	const [orderSent, setOrderSent] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCustomerDetails({
			...customerDetails,
			[name]: value,
		});
	};

	const handleCustomerDetailsSubmit = (e) => {
		e.preventDefault();

		// Combine customer details with cart items
		const orderData = {
			customer: customerDetails,
			items: cartItems,
		};
		postOrder(orderData, setOrderSent, onConfirmOrder, setCustomerDetails);
	};

	return (
		<div className="order-form-modal" style={{ display: "block" }}>
			<section className="order" id="order" style={{ display: "block" }}>
				<div>
					<form
						className="customerDetails"
						onSubmit={handleCustomerDetailsSubmit}
					>
						<span className="close-order-modal" onClick={onClose}>
							&times;
						</span>
						<h6 className="heading">Customer details</h6>
						<div className="flex">
							<div className="inputBox">
								<span>your name: </span>
								<input
									type="text"
									name="name"
									className="box"
									placeholder="enter your name"
									value={customerDetails.name}
									onChange={handleInputChange}
								/>
							</div>
							<div className="inputBox">
								<span>your street: </span>
								<input
									type="text"
									name="street"
									className="box"
									placeholder="enter your street"
									value={customerDetails.street}
									onChange={handleInputChange}
								/>
							</div>
							<div className="inputBox">
								<span>your city: </span>
								<input
									type="text"
									name="city"
									className="box"
									placeholder="enter your city"
									value={customerDetails.city}
									onChange={handleInputChange}
								/>
							</div>
							<div className="inputBox">
								<span>your e-mail: </span>
								<input
									type="text"
									name="email"
									className="box"
									placeholder="enter your e-mail"
									value={customerDetails.email}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<button className="btn" type="submit">
							Send order
						</button>
						{orderSent && (
							<div className="orderSent">
								<p>Your order was sent successfully!</p>
								<p>Date: {new Date().toLocaleString()}</p>
							</div>
						)}
					</form>
				</div>
			</section>
		</div>
	);
}
