import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth/useAuth';
import './Review.css'

const Review = () => {
    const { allContext } = useAuth();
    const { user, ColorButton } = allContext;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const proceed = window.confirm('Are You Sure, You Want To Provide a Review');
        if (proceed) {
            data.img = user.photoURL;
            axios.post('https://warm-spire-46407.herokuapp.com/reviews', data)
                .then(res => {
                    if (res.data.insertedId) {
                        alert('Review Successfully Added');
                        reset();
                    }
                })
        }
    };
    return (
        <div className="add-review review-bg text-center">
            <h1 className="text-white">Give Your Valuable Review</h1>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true })} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <textarea className="massage" {...register("description", { required: true })} placeholder="Description" />
                <input type="number" {...register("rating", { required: true, min: 1, max: 5 })} placeholder="Rating use 1-5" />
                {/* <ColorButton sx={{ width: '200%', mt: 3 }}
                    type="submit"
                    variant="danger">SUBMIT</ColorButton> */}
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;