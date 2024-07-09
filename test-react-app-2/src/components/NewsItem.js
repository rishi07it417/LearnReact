import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {myId,title,text,imageurl,detailurl}=this.props;

    return (
         <div className="card" >
                <img src={imageurl} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={detailurl} target='_blank' className="btn btn-primary">See detail</a>
                </div>
        </div>  
    )
  }
}
