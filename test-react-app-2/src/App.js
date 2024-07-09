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
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

  constructor(){
    super();
    
    this.state={
      progress:30
    }
  }

  setProgress = (p)=>{
    this.setState({
      progress:p
    })
  }

  render() {
    return (
      <>
       <Router>
              <Navbar></Navbar>
              <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
              <Routes>
                <Route  path="/"  element={ <NewsComponent setProgress={this.setProgress} key="general" category="general" newsApiKey={this.newsApiKey}></NewsComponent>}>
                </Route>
                <Route  path="/health"  element={<NewsComponent setProgress={this.setProgress} key="health" category="health" newsApiKey={this.newsApiKey}></NewsComponent>}>
                </Route>
              </Routes>
        </Router>
        
      </>
    )
  }
}


