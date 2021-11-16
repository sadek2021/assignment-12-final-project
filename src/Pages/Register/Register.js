import React from 'react';
import icon1 from '../../Images/icon/google-icon.png';
// import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Register.css';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Register = () => {
    const { allContext } = useAuth();
    const {
        getName,
        getEmail,
        getPassword,
        setUser,
        setUserName,
        setIsLoading,
        loginUsingGoogle,
        handleRegistration,
        error,
        setError, saveUser, name, email } = allContext;

    /* Redirect */
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';

    /* Google Login & Redirect */
    const handleGoogleLogin = () => {
        loginUsingGoogle()
            .then(result => {
                const user = result.user
                setUser(user);
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    /* Email+Password Registration & Redirect */
    const register = (e) => {
        e.preventDefault();
        handleRegistration()
            .then(result => {
                console.log(result)
                const newUser = { email, displayName: name }
                console.log(newUser)
                setUser(newUser);
                setUser(result.user);
                setUserName();
                // save user to database
                saveUser(email, name, 'POST');
                console.log(email, name)
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    console.log(error);
    return (
        <div>
            <Header></Header>
            <div className="container d-lg-flex mx-auto align-items-center g-4 mt-5">
                <div>
                    <img src="https://www.register.com/_jcr_content/root/section_338972426/responsivecolumns_20/column-2/itl_copy_copy.coreimg.jpeg/1610563184423/triffold3.jpeg" alt="" />
                </div>
                <div className="  mx-auto mt-5">
                    <h1 className="text-center text-danger">Register an Account</h1>

                    {/*  Submit */}
                    <form onSubmit={register} className="mt-5">
                        <div className="mb-3">
                            <label htmlFor="validationDefault01" className="form-label">Name:</label>

                            {/*Blur */}
                            <input onBlur={getName} type="text" className="form-control" id="validationDefault01" placeholder="Name" aria-label="Name"
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationDefault02" className="form-label">Email:</label>

                            {/* Blur */}
                            <input onBlur={getEmail} type="email" className="form-control" id="validationDefault02"
                                placeholder="Email" aria-label="Email"
                                autoComplete="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationDefault03" className="form-label">Password:</label>
                            {/* Blur */}
                            <input onBlur={getPassword} type="password" className="form-control" id="validationDefault03"
                                placeholder="Password" aria-label="Password"
                                autoComplete="current-password" required />
                            <div className="text-danger">
                                <p>{error}</p>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <h6>Already have an account? <Link to='/login'>Login</Link></h6>
                        <div className="d-grid mt-3">
                            <button className="btn btn-outline-danger" type="submit">Register</button>
                        </div>
                    </form>
                    <div className="text-center mt-2">
                        <h6>Or</h6>
                        {/* On Click */}
                        <button onClick={handleGoogleLogin} className="btn btn-outline-danger mb-5">
                            <img width="40px" src={icon1} alt="" /> Continue with Google
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;