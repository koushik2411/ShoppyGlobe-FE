import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice'

function CartItem({ item }) {

    const dispatch = useDispatch();

  return (
    <div>

        <img 
            src={item.thumbnail}
            alt={item.title}
        />

        <div>

            <h3>
                {item.title}
            </h3>

            <p>
                ₹ {Math.round(item.price * 85)}
            </p>

            <div>

                <button
                  onClick={() => dispatch(
                    decreaseQuantity(item.id)
                  )}
                >
                    -
                </button>

                <span>
                    {item.quantity}
                </span>

                <button
                  onClick={() => dispatch(
                    increaseQuantity(item.id)
                  )}
                >
                    +
                </button>
            </div>

            <button
              onClick={() => dispatch(
                removeItem(item.id)
              )}
            >
                Remove
            </button>
        </div>
    </div>
  )
}

export default CartItem