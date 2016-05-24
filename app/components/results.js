import React, { PropTypes } from 'react';
import Checkbox from '../components/checkbox';
import { headerFont } from '../style/style.css';

const Results = props => {
  const sortedList = [];
  props.list.map(scout => {if (scout.den === props.den) sortedList.push(scout);} );
  // sorted fastest to slowest
  if (props.points === false) {
    sortedList.sort((a, b) => b.fastest - a.fastest);
  }
  // sorted lowest to highest from points
  if (props.points === true) {
    sortedList.sort((a, b) => a.score - b.score);
  }

  const Scouts = sortedList.map(scout => {
    if (props.list.length !== 0) {
      return (
        <tr key={scout.name}>
          <td className={props.onCheckedChange ? '' : 'hide'}>
            <Checkbox scout={scout} onCheckedChange={props.onCheckedChange} />
          </td>
          <td className="text-capitalize"><strong>{scout.name}</strong></td>
        <td className="text-center">{scout.heat1}</td>
          <td className="text-center">{scout.heat2}</td>
          <td className="text-center">{scout.heat3}</td>
          <td className="text-center">{scout.heat4}</td>
          <td className="text-center">{scout.average}</td>
          <td className="text-center">{scout.fastest || scout.score}</td>
        </tr>
      );
    }
  });


  return (
    <div>
      <h3 className={`text-center text-capitalize ${headerFont}`}>{props.den}</h3>
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <td className={props.onCheckedChange ? '' : 'hide'}><h4>Display</h4></td>
            <td><h4>Name</h4></td>
            <td className="text-center"><h4>Heat 1</h4></td>
            <td className="text-center"><h4>Heat 2</h4></td>
            <td className="text-center"><h4>Heat 3</h4></td>
            <td className="text-center"><h4>Heat 4</h4></td>
            <td className="text-center"><h4>Average</h4></td>
            <td className="text-center"><h4>Fastest</h4></td>
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
  points: PropTypes.bool
};

export default Results;
