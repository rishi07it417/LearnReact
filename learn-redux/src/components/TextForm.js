import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/reduxIndex';

export default function TextForm(props) {
    const dispatch = useDispatch();
    const amount = useSelector(state=>state.amount);


  return (
    <>
        <div className="mb-3">
       </div>
        <div className="mb-3 mx-3">
         <button className="btn btn-primary mx-3" onClick={()=>{ dispatch(actionCreators.withdrawMoney(1000))}}>-</button>
         Available Balance : {amount}
         <button className="btn btn-primary mx-3" onClick={()=>{ dispatch(actionCreators.despositMoney(1000))}}>+</button>
         </div>

        


    </>
  )
}


TextForm.propTypes = { 
    textFormProp : PropTypes.object
}