import React from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './DetailBooking.css'

const DetailBooking = () => {
    const { register, handleSubmit, reset } = useForm();
    const { bookingId } = useParams();
    const { services, allContext } = useAuth();
    const { user } = allContext;
    const history = useHistory();
    // console.log(bookingId)
    // console.log(services)
    // console.log(user)

    const bookingData = services.find(service => service._id === bookingId);

    const onSubmit = data => {
        data.package = bookingData;
        data.status = 'Pending';

        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Processed Successfully');
                    reset();
                    history.push('/myBooking')
                }
            })
    };
    return (
        <div className="">
            <div className="container align-items-center row my-5 mx-auto">
                <h1 className="text-center text-danger mb-5">Details Booking</h1>
                    <div className="col-lg-6">
                        <img className="w-100" src={bookingData?.img} alt="" />
                        <h1 className=" fw-bold text-danger">{bookingData?.name}</h1>
                        <h5>{bookingData?.detail}</h5>
                    </div>
                    <div className="col-lg-6 text-center mt-5">
                        <h2 className="text-danger">Fillup The Form & Confirm Booking Of This Package</h2>
                        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name", { required: true })} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                            <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                            <input placeholder="Phone number" type="number" defaultValue="" {...register("phone", { required: true })} />
                            <button className="btn btn-outline-danger" type="submit">Confirm Booking</button>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default DetailBooking;