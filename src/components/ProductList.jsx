import React from "react";
import useProducts from "../hooks/useProduct";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import { FaStore } from "react-icons/fa";

function ProductList() {
  const { products, loading, error } = useProducts();

  const searchTerm = useSelector((state) => state.search.searchTerm);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) return <Loader/>;

  if (error) return <h2>Error: {error}</h2>;

  return (
    <section className="productsListContainer">
      <h2 className="secHeader">Products <FaStore/></h2>

      <div className="productList">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
