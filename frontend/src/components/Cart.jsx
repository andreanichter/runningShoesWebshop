import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, totalState } from "../recoil";
import OrderForm from "./OrderForm";

export default function Cart({ isOpen, closeCart }) {
	const cart = useRecoilValue(cartState);
	const setCart = useSetRecoilState(cartState);
	const [isCustomerFormVisible, setIsCustomerFormVisible] = useState(false);
	const [total, setTotal] = useRecoilState(totalState);

	useEffect(() => {
		const updatedTotal = cart.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);
		setTotal(updatedTotal);
	}, [cart]);

	const handleRemove = (itemId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
	};

	const handleConfirmBtn = () => {
		setIsCustomerFormVisible(true);
	};

	const handleCloseForm = () => {
		setIsCustomerFormVisible(false);
	};

	const handleConfirmOrder = (orderData) => {
		console.log("Order confirmed:", orderData);
	};

	return (
		<div className={`shopping-cart ${isOpen ? "active" : ""}`}>
			<div id="close-cart" onClick={closeCart}>
				<span>&times;</span>
			</div>
			<section>
				{cart.length > 0 ? (
					<div>
						<h1>Your cart</h1>
						<div>
							{cart.map((item) => (
								<div
									className="box"
									key={`cart-item-${item.id}`}
								>
									<a
										onClick={() => handleRemove(item.id)}
										href="#"
										className="fas fa-times"
									></a>
									<p>
										{item.brand} {item.model} (Price: €
										{item.price}, Size: {item.size},
										Quantity: {item.quantity}){" "}
									</p>
								</div>
							))}
							<h1>Total: €{total}</h1>
						</div>
						<button
							id="orderBtn"
							className="btn"
							onClick={handleConfirmBtn}
						>
							Confirm order
						</button>
						{isCustomerFormVisible && (
							<OrderForm
								onConfirmOrder={handleConfirmOrder}
								cartItems={cart}
								onClose={handleCloseForm}
							/>
						)}
					</div>
				) : (
					<h1>Your cart is empty</h1>
				)}
			</section>
		</div>
	);
}
