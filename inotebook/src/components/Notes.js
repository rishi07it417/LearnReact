import React, { useState,useEffect,useContext } from "react";
import NoteItem from "./NoteItem";
import Loading from "./Loading";
import PropTypes from 'prop-types';
import noteContext from '../contexts/NoteContext'



const Notes = (props)=> {

  console.log(noteContext.Provider);
  const a = useContext(noteContext);
  const [note,setNote] = useState({title:"",description:"",tag:"general"});
  const [isFirstLoad,setIsFirstLoad] = useState(true);
  
  useEffect(() => {
    console.log('inside use effect');
    if(isFirstLoad){
      setIsFirstLoad(false);
      a.fetchData();
    }
  },[isFirstLoad,a]);
 
  const handleElementChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  const addMyNote = ()=>{

    a.addNote(note.title,note.description,note.tag);
  }
  
    return (
     
      <>
        {a.loading && <Loading></Loading>}

          <div className="container my-3">
            <div className="row">
              <div className="col">
                <form className="row g-3">

                  <h4>Add Note</h4>
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
                  <button type="button" className="btn btn-dark" onClick={addMyNote}>Add Note</button>
                </form>
              </div>
            </div>
          </div>
         
          <div className="container my-3 ">

            <div className="row">
              <h4>Notes :</h4>

              {a.notes.map((element, index) => {
                return (
                  <div className="col-md-3 my-3" key={index}>
                    {" "}
                    <NoteItem
                      myId={index}
                      title={element.title ? element.title : ""}
                      description={element.description}
                      tag={element.tag}
                      id={element._id}
                    ></NoteItem>{" "}
                  </div>
                );
              })}
            </div>
            </div>
      </>
    );
  
}

Notes.propTypes = { 
  category : PropTypes.string,
  newsApiKey : PropTypes.string,
  setProgress : PropTypes.any
}

export default Notes;