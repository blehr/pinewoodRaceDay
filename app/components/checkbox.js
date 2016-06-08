import React, { PropTypes } from 'react';


const Checkbox = props => {
  const label = () => {
    if (props.isReselecting) {
      return 'add';
    }
    if (!props.isReselecting) {
      return props.scout.checked ? 'show' : 'hide';
    }
  };
  const isChecked = () => {
    if (props.isReselecting && props.containerState.newDenScouts.indexOf(props.scout.name) !== -1) {
      return true;
    }
    if (!props.isReselecting && props.scout.checked ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={isChecked()}
          onChange={() => {props.onCheckedChange(props.scout);}}
        />
      { label() }
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  scout: PropTypes.object,
  updateScout: PropTypes.func,
  onCheckedChange: PropTypes.func,
  containerState: PropTypes.object,
  isReselecting: PropTypes.bool
};

export default Checkbox;
