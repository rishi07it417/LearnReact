import React from 'react';
import PropTypes from 'prop-types';


const NewsItem = (props)=> {

    let {title,text,imageurl,detailurl}=props;

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


  NewsItem.propTypes = { 
    title : PropTypes.string,
    text : PropTypes.string,
    imageurl : PropTypes.string,
    detailurl : PropTypes.string
}

export default NewsItem; 
