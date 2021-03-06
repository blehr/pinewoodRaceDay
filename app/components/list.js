import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ListItem from './list_item';


const List = props => {
  const Item = props.list.map(item => {
    if (props.list.length === 0) {
      return true;
    }
    if (item.den) {
      if (item.den === props.activeDen) {
        return <ListItem item={item.name} key={item.name} onDeleteClick={props.onDeleteClick} activeDen={props.activeDen} />;
      }
    } else {
      return <ListItem item={item} key={item} onTextClick={props.onTextClick} onDeleteClick={props.onDeleteClick} activeDen={props.activeDen} />;
    }
  });

  return (
    <div className="list-group denList">
      <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeave={false} transitionLeaveTimeout={300} >
        {Item}
      </ReactCSSTransitionGroup >
    </div>
  );
};

List.propTypes = {
  list: PropTypes.array,
  activeDen: PropTypes.string,
  onDeleteClick: PropTypes.func,
  onTextClick: PropTypes.func
};

export default List;
