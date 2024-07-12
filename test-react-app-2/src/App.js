import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress,setProgress]=useState(30);


    return (
      <>
       <Router>
              <Navbar></Navbar>
              <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
              <Routes>
                <Route  path="/"  element={ <NewsComponent setProgress={setProgress} key="general" category="general" newsApiKey={newsApiKey}></NewsComponent>}>
                </Route>
                <Route  path="/health"  element={<NewsComponent setProgress={setProgress} key="health" category="health" newsApiKey={newsApiKey}></NewsComponent>}>
                </Route>
              </Routes>
        </Router>
        
      </>
    )
}

export default App; 