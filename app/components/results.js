import React, { PropTypes } from 'react';
import Checkbox from '../components/checkbox';

const Results = props => {
  const sortedList = [];
  props.list.map(scout => {if (scout.den === props.den) sortedList.push(scout);} );
  // sorted fastest to slowest
  if (props.points === false) {
    sortedList.sort((a, b) => a.fastest - b.fastest);
  }
  // sorted lowest to highest from points
  if (props.points === true) {
    sortedList.sort((a, b) => a.score - b.score);
  }

  const Scouts = sortedList.map(scout => {
    let count = props.numberOfLanes;
    const heatArr = [];
    while(count > 0) {
      heatArr.push(<td className="text-center" key={count}>{scout[`heat${count}`]}</td>);
      count--;
    }
    if (props.list.length !== 0) {
      return (
        <tr key={scout.name}>
          <td className={props.onCheckedChange ? '' : 'hide'}>
            <Checkbox scout={scout} onCheckedChange={props.onCheckedChange} />
          </td>
          <td className="text-capitalize"><strong>{scout.name}</strong></td>
          {heatArr}
          <td className="text-center">{scout.average}</td>
          <td className="text-center">{scout.fastest || scout.score}</td>
        </tr>
      );
    }
  });

  const heatLabels = [];
  let num = props.numberOfLanes;
  while(num > 0) {
    heatLabels.push(<th className="text-center" key={num}>{`Lane ${num}`}</th>);
    num--;
  }


  return (
    <div className="table-responsive">
      <h3 className="text-center text-capitalize headerFont">{props.den}</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className={props.onCheckedChange ? '' : 'hide'}>Display</th>
            <th>Name</th>
            {heatLabels}
            <th className="text-center">Average</th>
            <th className="text-center">Fastest</th>
          </tr>
        </thead>
        <tbody>
          {Scouts}
        </tbody>
      </table>
    </div>
  );
};

Results.propTypes = {
  list: PropTypes.array,
  den: PropTypes.string,
  onCheckedChange: PropTypes.func,
  points: PropTypes.bool,
  numberOfLanes: PropTypes.number
};

export default Results;
