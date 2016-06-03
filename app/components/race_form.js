import React, { Component, PropTypes } from 'react';
import HeatInputs from './heat_inputs';
import Checkbox from '../components/checkbox';


export default class RaceForm extends Component {
  static propTypes = {
    scout: PropTypes.object,
    handleSubmit: PropTypes.func,
    onCheckedChange: PropTypes.func,
    numberOfLanes: PropTypes.number
  }

  constructor(props) {
    super(props);

    this.state = { isDirty: false, isSubmitted: false };
    this.onMadeDirty = this.onMadeDirty.bind(this);
    this.onMadeSubmitted = this.onMadeSubmitted.bind(this);
  }

  onMadeDirty() {
    this.setState({name, isDirty: true, isSubmitted: false});
  }
  onMadeSubmitted() {
    this.setState({isDirty: false, isSubmitted: true});
  }

  render() {
    const getClassName = () => {
      if (!this.state.isDirty && !this.state.isSubmitted) {
        return '';
      }
      if (this.state.isDirty && !this.state.isSubmitted) {
        return 'bg-danger';
      }
      if (!this.state.isDirty && this.state.isSubmitted) {
        return 'bg-success';
      }
    };
    return (
      <tr className={getClassName()}>
        <td><Checkbox scout={this.props.scout} onCheckedChange={this.props.onCheckedChange} /></td>
        <td className="text-capitalize"><strong>{this.props.scout.name}</strong></td>
        <td>
          <HeatInputs
           handleSubmit={this.props.handleSubmit}
           scout={this.props.scout}
           numberOfLanes={this.props.numberOfLanes}
           state={this.state}
           onMadeDirty={this.onMadeDirty}
           onMadeSubmitted={this.onMadeSubmitted}
         />
        </td>
      </tr>
    );
  }

}
