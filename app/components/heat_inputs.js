import React, { Component, PropTypes } from 'react';
import HeatInput from './heat_input.js';


export default class HeatInputs extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    scout: PropTypes.object,
    numberOfLanes: PropTypes.number
  }
  constructor(props) {
    super(props);


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, heatNum, e) {
    const heat = `heat${heatNum}`;
    name[heat] = e.target.value;
    this.setState(name);
  }


  render() {
    const inputsArr = [];
    const inputs = () => {
      for (let i = 1; i <= this.props.numberOfLanes; i++) {
        inputsArr.push(<HeatInput heatNum={i} handleChange={this.handleChange} scout={this.props.scout} key={i} />);
      }
      return inputsArr;
    };
    return (
      <form className="flexContainer" onSubmit={this.props.handleSubmit.bind(this, this.props.scout)}>
        {inputs()}
        <button type="submit" className="btn btn-default heatInputSubmit">Submit</button>
      </form>
    );
  }

}
