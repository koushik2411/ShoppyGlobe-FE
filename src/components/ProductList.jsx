import React from 'react'
import useProducts from '../hooks/useProduct'
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

function ProductList() {

    const { products, loading, error } = useProducts();

    const searchTerm = useSelector(
        (state) => state.search.searchTerm
    );

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if (loading) 
        return <h2>Loading Products...</h2>

    if (error)
        return <h2>Error: {error}</h2>;

  return (
    <div>
        {filteredProducts.map((product) => (
            <ProductItem 
                key={product.id}
                product={product}
            />
        ))}
    </div>
  );
}

export default ProductList