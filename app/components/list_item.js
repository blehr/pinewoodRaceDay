import React, { PropTypes } from 'react';

const ListItem = props => {
  return  (
    <span className="input-group list-item-spacing">
      <input type="text"
        className={props.activeDen === props.item ? 'form-control activeDen readOnly text-capitalize' : 'form-control readOnly text-capitalize'}
        value={props.item} onClick={(e) => {e.preventDefault(); props.onTextClick ? props.onTextClick(props.item) : '';}}
        readOnly
       />
      <span className="input-group-btn">
        <button style={{'backgroundColor': '#eee'}} className={props.activeDen === props.item ? 'btn btn-default activeDen' : 'btn btn-default'} onClick={() => props.onDeleteClick(props.item)} ><span className="fa fa-trash-o"></span></button>
      </span>
    </span>
  );
};

ListItem.propTypes = {
  item: PropTypes.node,
  activeDen: PropTypes.string
};

export default ListItem;
