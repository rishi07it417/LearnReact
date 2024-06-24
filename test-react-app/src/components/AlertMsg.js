import React from 'react'
import PropTypes from 'prop-types';


export default function AlertMsg(props) {
  return (
    props.alertMsg.alertMsg && <div className="container">
        <div className="row">
          <div className="col">
          <div className={`alert alert-${props.alertMsg.alertMsgType} alert-dismissible fade show`} role="alert">
            {props.alertMsg.alertMsg}
          </div>
          </div>
        </div>
      </div>
  )
}

AlertMsg.propTypes = { 
    alertMsg : PropTypes.object
}
