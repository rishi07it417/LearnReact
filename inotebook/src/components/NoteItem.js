import React,{useContext,useRef,useState} from 'react';
import noteContext from '../contexts/NoteContext'

import PropTypes from 'prop-types';


const NewsItem = (props)=> {
    const a = useContext(noteContext);
    const showModalRef = useRef();
    const closeModalRef = useRef();

    const [note,setNote] = useState({title:"",description:"",tag:"general",id:props.id});


    let {title,description,tag,id}=props;

    const deleteMyNote = ()=>{
        a.deleteNote(id);
    }

    const showUpdateModal = ()=>{
        showModalRef.current.click();
    }

    const handleElementChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
      }
    
    const updateMyNote = ()=>{
        console.log(note);
        a.editNote(note.title,note.description,note.tag,note.id);
        closeModalRef.current.click();
      }
     

    return (
         <>
         <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="badge text-bg-secondary">{tag}</span></h5>
                    <p className="card-text">{description}</p>
                    <i className="fa-solid fa-trash" onClick={deleteMyNote}></i>
                    <i className="fa-solid fa-pen-to-square mx-3" onClick={showUpdateModal}></i>   
                </div>
        </div>  
            <button type="button" ref={showModalRef} className="btn btn-primary" hidden data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form className="row g-3">
                    <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" onChange={handleElementChange} />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3" onChange={handleElementChange}></textarea>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={handleElementChange} />
                    </div>
                </form>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeModalRef}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={updateMyNote}>Update</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
  }


  NewsItem.propTypes = { 
    title : PropTypes.string,
    text : PropTypes.string,
    imageurl : PropTypes.string,
    detailurl : PropTypes.string
}

export default NewsItem; 
