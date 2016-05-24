import React, { PropTypes } from 'react';


const ErrorMessage = props => {
  return (
    <div className="text-danger">
      <span id={props.id} className="help-block hidden"><strong><span className="text-danger">{props.message}</span></strong></span>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
  id: PropTypes.string
};

export default ErrorMessage;
