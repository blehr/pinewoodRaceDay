import React, { Component, PropTypes } from 'react';


export default class ReselectButton extends Component {
  static propTypes = {
    reselecting: PropTypes.func
  }
  constructor(props) {
    super(props);
  }
  openReselectDiv() {
    this.props.reselecting();
  }
  render() {
    return (
      <div className="denList" style={{marginBottom: '10px'}}>
        <button type="button" className="btn btn-info btn-block" onClick={this.openReselectDiv.bind(this)} >Add Racers to a New Group</button>
      </div>
    );
  }
}
