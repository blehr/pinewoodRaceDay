import React, { PropTypes } from 'react';
import style from '../style/style.css';

const ListItem = props => {
  return  (
    <span className="input-group">
      <input type="text"
        className={props.activeDen === props.item ? `form-control ${style.activeDen} ${style.readOnly} text-capitalize` : `form-control ${style.readOnly} text-capitalize`}
        value={props.item} onClick={(e) => {e.preventDefault(); props.onTextClick ? props.onTextClick(props.item) : '';}}
        readOnly
       />
      <span className="input-group-btn">
        <button style={{'backgroundColor': '#eee'}} className={props.activeDen === props.item ? `btn btn-default ${style.activeDen}` : 'btn btn-default'} onClick={() => props.onDeleteClick(props.item)} ><span className="fa fa-trash-o"></span></button>
      </span>
    </span>
  );
};

ListItem.propTypes = {
  item: PropTypes.node,
  activeDen: PropTypes.string
};

export default ListItem;
