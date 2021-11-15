import { useEffect } from 'react';
import { useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://warm-spire-46407.herokuapp.com/products')
            // fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return { products, setProducts };
};

export default useProducts;