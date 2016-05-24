import React, { PropTypes } from 'react';
import style from '../style/style.css';


const HeatInput = props => {
  return (
      <div className={`form-group ${style.flexItem}`}>
        <label htmlFor={`heat${props.heatNum}`}>{`Heat ${props.heatNum}`}</label>
        <input
          type="text"
          className={`form-control ${style.heatInput}`}
          id={`heat${props.heatNum}`}
          value={props.scout[`heat${props.heatNum}`]}
          onChange={props.handleChange.bind(this, props.scout, props.heatNum)}
        />
      </div>
  );
};

HeatInput.propTypes = {
  heatNum: PropTypes.string,
  scout: PropTypes.object,
  handleChange: PropTypes.func
};


export default HeatInput;
