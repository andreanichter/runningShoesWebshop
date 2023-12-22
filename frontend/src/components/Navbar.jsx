import { useState } from "react";
import { cartState } from "../recoil";
import Cart from "./Cart";
import { useRecoilValue } from "recoil";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useRecoilValue(cartState);

  const cartCount = cart.length;

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo">
          React Runners Shop.
        </a>

        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#shoes">shoes</a>
          <a href="#footer">contact us</a>
        </nav>

        <div className="icons">
          <div id="cart-btn" className="fas fa-shopping-cart" onClick={openCart}>
            <span id="cart-count">{cartCount}</span>
          </div>
        </div>
      </section>
    </header>
    <Cart isOpen={isCartOpen} closeCart={closeCart}></Cart>
    </div>
  );
}
