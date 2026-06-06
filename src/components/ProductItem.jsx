import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { addItem } from "../redux/cartSlice";

function ProductItem({ product }) {

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem(product));
    };

    return (
        <div>

            <img 
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
            />

            <h3>
                {product.title}
            </h3>

            <p>
                ₹ {Math.round(product.price * 85)}
            </p>

            <div>
                <Link to={`/product/${product.id}`}>
                    <button>View Details</button>
                </Link>

                <button
                  onClick={handleAddItem}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductItem