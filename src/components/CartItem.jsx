import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <img src={item.thumbnail} alt={item.title} />

      <div className="cartText">
        <h3 className="productTitle">{item.title}</h3>

        <p>₹ {Math.round(item.price * 85)}</p>

        <div className="cartItemDiv2">
          <div className="cartBtns">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="decBtn"
            >
              -
            </button>

            <span className="qty">{item.quantity}</span>

            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="incBtn"
            >
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="removeBtn"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
