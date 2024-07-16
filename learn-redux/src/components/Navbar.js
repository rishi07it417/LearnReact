import React from 'react';
import PropTypes from 'prop-types';
import {
    Link
  } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function Navbar(props) {
  const amount = useSelector(state=>state.amount);

  return (
    <>
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                
                </ul>
                <form className="d-flex" role="search">
                    <button className="btn btn-primary" >My Balance : {amount}</button>
                </form>
                </div>
            </div>
        </nav>
    </>
  )
}

Navbar.propTypes = { 
    title : PropTypes.string.isRequired,
    home : PropTypes.string,
    mode : PropTypes.string
}

