import React, { PropTypes } from 'react';


const Checkbox = props => {
  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={props.scout.checked || false}
          onChange={() => {props.onCheckedChange(props.scout);}}
          scout={props.scout}
        />
      { props.scout.checked ? 'show' : 'hide'}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  scout: PropTypes.object,
  updateScout: PropTypes.func,
  onCheckedChange: PropTypes.func
};

export default Checkbox;
