import React, { PropTypes } from 'react';
import HeatInputs from './heat_inputs';
import Checkbox from '../components/checkbox';


const RaceForm = props => {
  return (
    <tr>
      <td><Checkbox scout={props.scout} onCheckedChange={props.onCheckedChange} /></td>
      <td className="text-capitalize"><strong>{props.scout.name}</strong></td>
      <td><HeatInputs handleSubmit={props.handleSubmit} scout={props.scout} numberOfLanes={props.numberOfLanes} /></td>
    </tr>
  );
};

RaceForm.propTypes = {
  scout: PropTypes.object,
  handleSubmit: PropTypes.func,
  onCheckedChange: PropTypes.func,
  numberOfLanes: PropTypes.number
};

export default RaceForm;
