import React, { Component } from 'react'
import spinner from '../../public/spinner.gif';

const Loading = ()=> {
    return (
      <div className='container'>
        <div className="row">
          <div className="col d-flex justify-content-center">
              <img src={spinner} alt='loading'></img>
          </div>
        </div>
      </div>
    )
  }

export default Loading;
