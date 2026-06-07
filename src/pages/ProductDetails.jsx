import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

function ProductDetails() {
  const { id } = useParams();

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
      } catch (err) {
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

  if (loading) return <h2>Loading product...</h2>;

  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      <Header />

      <section className="productDetailsContainer">

        <h2 className="secHeader">Product Details</h2>

        <div className="productDetails">
          <img src={product.thumbnail} alt={product.title} loading="lazy" />

          <div className="textDiv">
            <h2 className="productTitle">{product.title}</h2>

            <p>{product.description}</p>

            <h3>
              <span className="semibold">Price:</span> ₹{" "}
              {Math.round(product.price * 85)} /-
            </h3>

            <p>
              <span className="semibold">Rating:</span> {product.rating}
            </p>

            <p>
              <span className="semibold">Stock:</span> {product.stock}
            </p>

            <p>
              <span className="semibold">Brand:</span> {product.brand || "N/A"}
            </p>

            <div className="btnDiv">
              <button onClick={handleAddItem} className="addToCartBtn">
                Add to cart
              </button>

              <Link to="/">
                <button className="backBtn">Back to products</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
