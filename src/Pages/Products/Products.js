import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts/useProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductItem from '../Item/ProductItem';


const Products = () => {
    const { products } = useProducts();
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="mt-5 text-center">
                    <h1 className="text-danger">Most Popular Products</h1>
                    <h5 className="text-secondary">Enjoy our Cheap Holiday products and create your own most memorable moment and a <br /> trip to remember with Travel Time with your loved ones.</h5>
                </div>
                <div className="container my-5">
                    <Row xs={1} md={4} className="g-3 p-3">
                        {
                            products.map(product => <ProductItem key={product.id} product={product}></ProductItem>)
                        }
                    </Row>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;