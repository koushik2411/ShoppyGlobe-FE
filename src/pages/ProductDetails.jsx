import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header';

function ProductDetails() {

    const {id} = useParams();

    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);

                const response = await fetch(`https://dummyjson.com/products/${id}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch product details");
                }

                const data = await response.json();

                setProduct(data);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddItem = () => {
        dispatch(addItem(product));
    };

    if (loading)
        return <h2>Loading product...</h2>;

    if (error)
        return <h2>Error: {error}</h2>;

  return (
    <>
        <Header/>

        <div>

            <img 
                src={product.thumbnail}
                alt={product.title}
                loading='lazy'
            />

            <div>

                <h2>
                    {product.title}
                </h2>

                <p>
                    {product.description}
                </p>

                <h3>
                    ₹ {Math.round(product.price * 85)}
                </h3>

                <p>
                    Rating: {product.rating}
                </p>

                <p>
                    Stock: {product.stock}
                </p>

                <p>
                    Brand: {product.brand}
                </p>

                <button 
                  onClick={handleAddItem}
                >
                    Add to cart
                </button>

                <Link to="/">
                    <button>
                        Back to products
                    </button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default ProductDetails