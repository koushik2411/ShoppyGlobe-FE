import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice'
import Header from '../components/Header';

function CheckOut() {

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 85, 0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Order placed successfully");

    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Header/>

      <div>

        <h2>Checkout</h2>

        <form onSubmit={handleSubmit}>

          <input
            type='text'
            placeholder='Full Name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder='Address'
            required
            value={address}
            onChange={(e) => setName(e.target.value)}
          />

          <button type='submit'>
            Place Order
          </button>
        </form>

        <div>
          
          <h3>Order Summary</h3>

          {cartItems.map((item) => (
            <div>
              <p>
                {item.title} x {item.quantity}
              </p>
            </div>
          ))}

          <h3>
            Total: ₹ {Math.round(totalAmount)}
          </h3>
        </div>

        {message && (
          <h3>{message}</h3>
        )}
      </div>
    </>
  )
}

export default CheckOut