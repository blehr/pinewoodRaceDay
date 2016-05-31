import React, { Component, PropTypes } from 'react';
import HeatInput from './heat_input.js';


export default class HeatInputs extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    scout: PropTypes.object
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
    return (
      <form className="flexContainer" onSubmit={this.props.handleSubmit.bind(this, this.props.scout)}>
        <HeatInput heatNum="1" handleChange={this.handleChange} scout={this.props.scout}/>
        <HeatInput heatNum="2" handleChange={this.handleChange} scout={this.props.scout}/>
        <HeatInput heatNum="3" handleChange={this.handleChange} scout={this.props.scout}/>
        <HeatInput heatNum="4" handleChange={this.handleChange} scout={this.props.scout}/>
        <button type="submit" className="btn btn-default heatInputSubmit">Submit</button>
      </form>
    );
  }

}
