import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  
  useEffect(() => {
    console.log('inside about use effect');
    if(!localStorage.getItem('authToken')){
       navigate('/login');
     }
    
  },[]);
 

  return (
    <div>
      This is about 
    </div>
  )
}

export default About
