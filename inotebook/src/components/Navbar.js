import React from 'react'
import {
    Link
  } from "react-router-dom";

const Navbar = ()=> {
 
    return (
      <>
        
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">iNotebook</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link"  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                   
                </ul>
                <form className="d-flex">
                      <Link className="nav-link"  to="/about"><button className="btn btn-primary" >Login</button></Link>
                      <Link className="nav-link"  to="/"><button className="btn btn-primary mx-3" >Sign up</button></Link>
                      
                      

                </form>
                
                </div>
            </div>
        </nav>

      </>
    )
  }

  export default Navbar; 
