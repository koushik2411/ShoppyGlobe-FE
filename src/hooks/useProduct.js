import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products");

                if (!res.ok)
                    throw new Error("Failed to fetch products");

                const data = await res.json();

                setProducts(data.products);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts()
    }, []);

    return {products, loading, error};
};

export default useProducts;