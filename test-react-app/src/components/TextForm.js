import React,{useState} from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {
   

  return (
    <>
        <h2 style={props.textFormProp.modeStyle}>{props.textFormProp.heading} </h2>
        <div className="mb-3">
        <label htmlFor="mybox" className="form-label" style={props.textFormProp.modeStyle}>{props.textFormProp.textLabel}</label>
            <textarea style={props.textFormProp.modeStyle}  className="form-control" id="mybox" rows="8" value={props.textFormProp.text} onChange={props.textFormProp.handleTextAreaOnChange}></textarea>
        </div>
        <div className="mb-3" style={props.textFormProp.modeStyle}>
         <button className="btn btn-primary" onClick={props.textFormProp.handleUpClick}>To Upper</button>
         <button className="btn btn-primary mx-3" onClick={props.textFormProp.handleLowerClick}>To Lower</button>
         <button className="btn btn-primary mx-3" onClick={props.textFormProp.handleDarkModeClick}>{props.textFormProp.buttonLabel}</button>
         <button className="btn btn-primary mx-3" onClick={props.textFormProp.handleCopyTextClick}>CopyText</button>


         </div>

         <div className="container" style={props.textFormProp.modeStyle}>
            <div className="row">
                <div className="col">
                    <h2>Preview</h2>
                    <p className='lead'>{props.textFormProp.text}</p>
                    <p>{props.textFormProp.text.split(' ').length} {props.textFormProp.text.split(' ').length>1? "Words": "Word"}</p>
                </div>
            </div>
         </div>


    </>
  )
}


TextForm.propTypes = { 
    textFormProp : PropTypes.object
}