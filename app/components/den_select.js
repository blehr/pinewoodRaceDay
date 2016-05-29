import React, { PropTypes } from 'react';
import DenSelectItem from './den_select_item';


const DenSelect = props => {
  const Item = props.list.map(item => {
    if (props.list.length === 0) {
      return;
    } else {
      return <DenSelectItem item={item} key={item} onTextClick={props.onTextClick} onDeleteClick={props.onDeleteClick} activeDen={props.activeDen} />;
    }
  });

  return (
    <ul className="list-inline denList flexContainer">
      {Item}
    </ul>
  );
};

DenSelect.propTypes = {
  list: PropTypes.array,
  item: PropTypes.string,
  onTextClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  activeDen: PropTypes.string
};

export default DenSelect;
