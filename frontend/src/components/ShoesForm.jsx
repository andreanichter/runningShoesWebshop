import { useSetRecoilState } from "recoil";
import { cartState } from "../recoil.js";
import QtyInput from "./QtyInput";
import SizesSelect from "./SizesSelect";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

export default function ShoesForm({ shoe }) {
  const setCart = useSetRecoilState(cartState);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const handleInput = (e) => {
    setQuantity(e.target.value);
  };

  const handleSelect = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    //Create new cart item
    const cartItem = {
      id: shoe.id,
      brand: shoe.brand,
      model: shoe.model,
      price: shoe.price,
      size: size,
      quantity: quantity,
    };

    if (!size) {
      alert("Please select your size!");
      return;
    }

    //Add item to the cart
    setCart((prevCart) => [...prevCart, cartItem]);

    setSize("");
    setQuantity(1);
  };

  return (
    <form className="pizzaForm" onSubmit={handleAddToCart}>
      <QtyInput onChange={handleInput} quantity={quantity} shoe={shoe} />
      <SizesSelect onSelect={handleSelect} sizes={shoe.size} value={size} />
      <SubmitButton shoe={shoe} />
    </form>
  );
}
