import React, { Component } from 'react'
import spinner from './spinner.gif';

export default class Loading extends Component {
  render() {
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
}
