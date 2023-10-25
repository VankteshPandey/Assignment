import React from 'react';
import './nav.css'
import {  Link } from "react-router-dom"; // Import Link from react-router-dom if you are using it

const Navbar = ({title}) => {
  return (
    <>
    {/* Navigation bar  */}
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#78C1F3'}}>
    <div className="container-fluid">
        {/* Logo and brand  */}
        <Link className="navbar-brand" to="/" style={{fontFamily:'cursive', fontSize: '25px', fontWeight: '600'}}>
            {title}<i className="fa fa-tint fa-lg" aria-hidden="true" style={{color: 'rgb(0, 255, 191)', marginLeft: '9px'}}></i>
        </Link>
        {/* Toggle button for mobile view  */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navigation links and search bar  */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex flex-column flex-md-row" role="search">
                <input className="form-control me-2 mb-2 mb-md-0" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {/* Login and cart links  */}
            <Link to="/login" className="nav-link mb-2 mb-md-0 login">Login</Link>
            <Link to="cart" className="nav-link">
                <i className="cart fa fa-shopping-cart fa-lg" style={{color: 'black',}}></i>
            </Link>
        </div>
    </div>
</nav>

    {/* Navigation links for the second navigation bar  */}
    <ul className="nav nav-underline" style={{backgroundColor: '#9BE8D8', position:'relative'}} >
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/signIn">Sign In</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/productOverview">Over View</Link>
        </li>
       
        
        
    </ul>
    
    </>
   
   
  
  );
}

export default Navbar;
