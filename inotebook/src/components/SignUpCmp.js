import React, { useState,useEffect } from "react";
import Loading from "./Loading";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/reduxIndex';
import { useNavigate  } from "react-router-dom";


const SignUpCmp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const login = useSelector(state=>state.login);

  const [loading,setLoading] = useState(false);
  const [loginState,setLoginState] = useState({name:"",email:"",password:"",});
  
 
 
  const handleElementChange = (e)=>{
    setLoginState({...loginState,[e.target.name]:e.target.value})
  }

  const handleSignUp = ()=>{
    dispatch(actionCreators.signUp({name:loginState.name,email:loginState.email,password:loginState.password}));
    setTimeout(() => {
      console.log(localStorage.getItem('authToken'));
    if(localStorage.getItem('authToken')){
      navigate('/');
    }
    }, 2000);
    
  }
 

  return (
    <>
        {loading && <Loading></Loading>}

          <div className="container">
            <div className="row">
              <div className="col-md-6">
              <form className="row g-3">

                <h4>Login Form</h4>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" onChange={handleElementChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="text" className="form-control" id="email" name="email" onChange={handleElementChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password"  onChange={handleElementChange} />
                </div>
                <button type="button" className="btn btn-dark"  onClick={handleSignUp}>SignUp</button>
                </form>
              </div>
            </div>
          </div>
       
    </>
  )
}

export default SignUpCmp
