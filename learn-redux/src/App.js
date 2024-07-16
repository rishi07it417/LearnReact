import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
 

  return (
    <>
           
      <div className="container">
        <div className="row">
           <div className="col">
            
            <Router>
              <Navbar title="Learn Redux" home="home1" mode={'dark'}></Navbar>
              <Routes>
                <Route  path="/" element={ <TextForm></TextForm>}>
                </Route>
                <Route  path="/about" element={<p >This is about</p>}>
                </Route>
              </Routes>
            </Router>
           </div>
        </div>
      </div>
      

     
      
    
    </>
  );
}

export default App;
