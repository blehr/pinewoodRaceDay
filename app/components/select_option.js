import React, { PropTypes } from 'react';

const SelectOption = ({ value }) => {
  return (
    <option className="text-capitalize" value={value} >{value}</option>
  );
};

SelectOption.propTypes = {
  value: PropTypes.string
};

export default SelectOption;
