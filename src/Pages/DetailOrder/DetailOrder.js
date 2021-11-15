import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './DetailOrder.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const DetailOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const { orderId } = useParams();
    const { products, allContext } = useAuth();
    const { user } = allContext;
    // console.log(orderId)
    // console.log(products)
    // console.log(user)

    const orderData = products.find(product => product._id === orderId);

    const onSubmit = data => {
        data.product = orderData;
        data.status = 'Pending';

        axios.post('https://warm-spire-46407.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Processed Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <Header></Header>
            <div className="container align-items-center row my-5 mx-auto">
                <h1 className="text-center text-danger mb-5">Details Order</h1>
                <div className="col-lg-6">
                    <img className="w-100" src={orderData?.img} alt="" />
                    <h1 className=" fw-bold text-danger">{orderData?.name}</h1>
                    <h5>{orderData?.detail}</h5>
                </div>
                <div className="col-lg-6 text-center mt-5">
                    <h2 className="text-danger">Fillup The Form & Confirm Order Of This Product</h2>
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name", { required: true })} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <input placeholder="Phone number" type="number" defaultValue="" {...register("phone", { required: true })} />
                        <button className="btn btn-outline-danger" type="submit">Confirm Order</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DetailOrder;