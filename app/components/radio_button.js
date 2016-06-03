import React, { PropTypes } from 'react';


const RadioButton = props => {
  return (
    <div className="radio text-center">
      <label>
        <input type="radio"
          name={props.name}
          id={props.id}
          value={props.value}
          checked={props.numberOfLanes === parseInt(props.value, 10) ? true : false}
          onChange={props.onLaneChange.bind(this, parseInt(props.value, 10))}
        />
      {`${props.value} Lanes`}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  onLaneChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  numberOfLanes: PropTypes.number
};

export default RadioButton;
