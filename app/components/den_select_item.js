import React, { PropTypes } from 'react';
import style from '../style/style.css';

const DenSelectItem = props => {
  return  (
    <li className={style.flexItem}>
      <input type="text"
        className={props.activeDen === props.item ? `form-control ${style.activeDen} ${style.readOnly} text-capitalize` : `form-control ${style.readOnly} text-capitalize`}
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
