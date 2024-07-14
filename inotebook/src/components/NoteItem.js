import React,{useContext} from 'react';
import noteContext from '../contexts/NoteContext'

import PropTypes from 'prop-types';


const NewsItem = (props)=> {
    const a = useContext(noteContext);

    let {title,description,tag,id}=props;

    const deleteMyNote = ()=>{
        a.deleteNote(id);
    }

    return (
         <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="badge text-bg-secondary">{tag}</span></h5>
                    <p className="card-text">{description}</p>
                    <i className="fa-solid fa-trash" onClick={deleteMyNote}></i>
                    <i className="fa-solid fa-pen-to-square mx-3"></i>
                       
                  
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
