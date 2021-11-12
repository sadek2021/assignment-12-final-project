import React from 'react';
import logo from './../../Images/favicon/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Header.css';

const Header = () => {
    const { allContext } = useAuth();
    const { user, logout } = allContext;
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} width="150" alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutUs">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">
                                    Packages
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/destinations">
                                    Destinations
                                </Link>
                            </li>
                        </ul>
                        {user.email ?
                            <>

                                <div className="btn-group">
                                    <button type="button" className="btn btn-outline-danger">{user.displayName}</button>
                                    <button type="button" className="btn btn-outline-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <Link className="dropdown-item" to="/myBooking">My Booking</Link>
                                        <Link className="dropdown-item" to="/allBooking">All Booking</Link>
                                        <Link className="dropdown-item" to="/addNewPackage">Add New Booking</Link>
                                    </ul>
                                </div>
                                {/* <h5 className="me-3 text-danger">{user.displayName}</h5> */}
                                <button onClick={logout} className="mx-2 btn btn-outline-danger">Logout</button>
                            </> :
                            <div className="d-flex gap-3">
                                <Link className="btn btn-outline-danger" to="/login" role="button">Login</Link>
                                <Link className="btn btn-outline-danger" to="/register" role="button">Register</Link>
                            </div>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;