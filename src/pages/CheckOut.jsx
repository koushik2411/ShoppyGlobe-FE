import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice'
import Header from '../components/Header';
import { GiTakeMyMoney } from 'react-icons/gi';

function CheckOut() {

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 85, 0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Order can't be placed. Add items to your cart.")
      return;
    }

    alert("Order placed successfully");

    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Header/>

      <div className='checkoutContainer'>

        <h2 className='secHeader'>Checkout <GiTakeMyMoney/></h2>

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
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
          rows={3}
            placeholder='Address'
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type='submit'>
            Place Order
          </button>
        </form>

        <div className='summary'>
          
          <h3 className='semibold'>Order Summary</h3>

          {cartItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.title} x {item.quantity}
              </p>
            </div>
          ))}

          <h3 className='totalAmount'>
            Total: ₹ {Math.round(totalAmount)} /-
          </h3>
        </div>
      </div>
    </>
  )
}

export default CheckOut