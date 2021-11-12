import React from 'react';
import icon1 from '../../Images/icon/google-icon.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Login.css'

const Login = () => {
    const { allContext } = useAuth();
    const {
        getEmail,
        getPassword,
        setUser,
        setError,
        setIsLoading,
        loginUsingGoogle,
        handleLogin,
        error } = allContext;

    /* Redirect */
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';

    /* Google Login & Redirect */
    const handleGoogleLogin = () => {
        loginUsingGoogle()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    /* Email Login & Redirect */
    const login = (e) => {
        e.preventDefault();
        handleLogin()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="container login-box mx-auto align-items-center g-4 ">
            <div className="w-50 mx-auto">
                <h1 className="text-center text-danger">Login Account</h1>

                {/* Submit */}
                <form onSubmit={login} className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="validationDefault02" className="form-label">Email:</label>

                        {/* Blur */}
                        <input onBlur={getEmail} type="email" className="form-control" id="validationDefault02"
                            placeholder="Email" aria-label="Email"
                            autoComplete="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationDefault03" className="form-label">Password:</label>

                        {/*  Blur */}
                        <input onBlur={getPassword} type="password" className="form-control" id="validationDefault03"
                            placeholder="Password"
                            autoComplete="current-password" aria-label="Password" required />
                        <div className="text-danger">
                            <p>{error}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" />
                            <label className="form-check-label" htmlFor="invalidCheck2">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <h6>Don’t have an account? <Link to='/register'>Register</Link></h6>
                    <div className="d-grid mt-3">
                        <button className="btn btn-outline-danger" type="submit">Login</button>
                    </div>
                </form>
                <div className="text-center mt-2">
                    <h6>Or</h6>
                    {/* <h6>Continue With</h6> */}
                    {/* On Click */}
                    <button onClick={handleGoogleLogin} className="btn btn-outline-danger">
                        <img width="40px" src={icon1} alt="" /> Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;