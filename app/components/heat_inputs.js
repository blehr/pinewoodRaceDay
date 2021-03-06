import React, { Component, PropTypes } from 'react';
import HeatInput from './heat_input.js';


export default class HeatInputs extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    scout: PropTypes.object,
    numberOfLanes: PropTypes.number,
    onMadeDirty: PropTypes.func,
    onMadeSubmitted: PropTypes.func
  }
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, heatNum, e) {
    const heat = `heat${heatNum}`;
    name[heat] = e.target.value;
    this.props.onMadeDirty();
  }


  render() {
    const inputsArr = [];
    const inputs = () => {
      for (let i = this.props.numberOfLanes; i > 0; i--) {
        inputsArr.push(<HeatInput heatNum={i} handleChange={this.handleChange} scout={this.props.scout} key={i} />);
      }
      return inputsArr;
    };

    return (
      <form className="flexContainer" onSubmit={this.props.handleSubmit.bind(this, this.props.scout)}>
        {inputs()}
        <button type="submit" className="btn btn-default heatInputSubmit" onClick={() => {this.props.onMadeSubmitted();}} >Submit</button>
      </form>
    );
  }

}
