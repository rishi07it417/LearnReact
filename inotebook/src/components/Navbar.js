import React from 'react'
import {
    Link
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/reduxIndex';
import { useNavigate  } from "react-router-dom";


const Navbar = ()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(state=>state.login);

   let isLoggedIn=false;
   if(localStorage.getItem('authToken')){
    isLoggedIn=true;
   }

   const handleSignOut = async()=>{
     const newState = await dispatch(actionCreators.logout({name:"",email:"",password:""}));
     if(!localStorage.getItem('authToken')){
      navigate('/login');
    }
    
   }

 
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
                      <Link className="nav-link"  to="/login"><button hidden={isLoggedIn} className="btn btn-primary" >Login</button></Link>
                      <Link className="nav-link"  to="/signUp"><button hidden={isLoggedIn} className="btn btn-primary mx-3" >Sign up</button></Link>
                      <button hidden={!isLoggedIn} onClick={handleSignOut} className="btn btn-primary mx-3" >Sign Out</button>
      
                      

                </form>
                
                </div>
            </div>
        </nav>

      </>
    )
  }

  export default Navbar; 
