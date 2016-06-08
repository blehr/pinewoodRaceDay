import React, { Component, PropTypes } from 'react';


export default class ReselectDen extends Component {
  static propTypes = {
    isReselecting: PropTypes.bool,
    onNewDenChange: PropTypes.func,
    onReselectDenAndScoutSubmit: PropTypes.func,
    newDenState: PropTypes.string
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="denList">
        <div className={this.props.isReselecting ? 'reselect-den' : 'reselect-den closed'}>
          <form className="input-group" onSubmit={this.props.onReselectDenAndScoutSubmit}>
            <input type="text" className="form-control" value={this.props.newDenState} onChange={this.props.onNewDenChange} />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">Submit</button>
            </span>
          </form>
          <span classsName="help-block">Select racers to add to new group. Enter a group name and Submit.</span>
        </div>
      </div>
    );
  }
}
