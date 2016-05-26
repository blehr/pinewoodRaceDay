import React, { PropTypes } from 'react';


const Input = props => {
  return (
    <div>
      <h3 className="text-center">{props.formHeading}<span className="text-uppercase text-info">{props.denHeading}</span></h3>
      <form className="input-group" onSubmit={props.onFormSubmit}>
        <input type="text" className="form-control" value={props.name} onChange={props.handleInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default">Submit</button>
        </span>
      </form>
    </div>
  );
};

Input.propTypes = {
  denHeading: PropTypes.string,
  formHeading: PropTypes.string,
  name: PropTypes.string,
  onFormSubmit: PropTypes.func,
  handleInputChange: PropTypes.func
};

export default Input;
