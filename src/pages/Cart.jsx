import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function Cart() {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity * 85, 0
    );

  return (
    <>
        <Header/>

        <div>
            
            <h2>Cart</h2>

            {cartItems.length === 0 ? (
                <h3>
                    Cart is Empty
                </h3>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <CartItem 
                            key={item.id}
                            item={item}
                        />
                    ))}

                    <h2>
                        Total: ₹ {""}{Math.round(totalAmount)}
                    </h2>

                    <Link to="/checkout">
                        <button>
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            )}
        </div>
    </>
  )
}

export default Cart