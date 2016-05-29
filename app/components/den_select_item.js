import React, { PropTypes } from 'react';

const DenSelectItem = props => {
  return  (
    <li className="flexItem">
      <input type="text"
        className={props.activeDen === props.item ? 'form-control readOnly activeDen text-capitalize' : 'form-control readOnly text-capitalize'}
        value={props.item} onClick={(e) => {e.preventDefault(); props.onTextClick(props.item);}}
        readOnly
       />
   </li>
  );
};

DenSelectItem.propTypes = {
  item: PropTypes.string,
  activeDen: PropTypes.string
};

export default DenSelectItem;
