import React, { PropTypes } from 'react';
import style from '../style/style.css';
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
    <ul className={`list-inline ${style.denList} ${style.flexContainer}`}>
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
