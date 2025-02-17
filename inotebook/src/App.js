import React,{useState} from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import NoteState from './contexts/NoteState';

const App = () => {
  const [progress,setProgress]=useState(0);

  return (
    <>
    <NoteState>
    <Router>
           <Navbar></Navbar>
           <LoadingBar      color='#f11946'      progress={progress}      onLoaderFinished={() => setProgress(0)}    />
           <Routes>
             <Route  path="/"  element={<Home></Home>}>
             </Route>
             <Route  path="/about"  element={<About></About>}>
             </Route>
           </Routes>
     </Router>
     </NoteState> 
   </>
  )
}

export default App
