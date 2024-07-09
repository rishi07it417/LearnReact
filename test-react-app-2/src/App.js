import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

  render() {
    return (
      <>
       <Router>
              <Navbar></Navbar>
              <Routes>
                <Route  path="/"  element={ <NewsComponent key="general" category="general" newsApiKey={this.newsApiKey}></NewsComponent>}>
                </Route>
                <Route  path="/health"  element={<NewsComponent key="health" category="health" newsApiKey={this.newsApiKey}></NewsComponent>}>
                </Route>
              </Routes>
        </Router>
        
      </>
    )
  }
}


