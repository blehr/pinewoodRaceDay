import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetAllState, togglePoints, selectNumberOfLanes } from '../actions/index';
import RadioButton from '../components/radio_button';
import ErrorMessage from '../components/error_message';
import { showErrorMessage } from '../util/helper';

class PreferencesContainer extends Component {
  static propTypes = {
    resetAllState: PropTypes.func,
    togglePoints: PropTypes.func,
    selectNumberOfLanes: PropTypes.func,
    onNumberOfLanesChange: PropTypes.func,
    points: PropTypes.bool,
    scouts: PropTypes.array,
    numberOfLanes: PropTypes.number
  }
  constructor(props) {
    super(props);

    this.onNumberOfLanesChange = this.onNumberOfLanesChange.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.resetAllState();
    showErrorMessage('resetAll');
  }

  onPointsChange() {
    this.props.togglePoints(this.props.points);
  }

  onNumberOfLanesChange(num) {
    this.props.selectNumberOfLanes(num);
    // this keeps the points state unchanged,
    // but has the side effect of resetting all scores
    this.props.togglePoints(!this.props.points);
  }

  render() {
    return(
      <div className="col-sm-6 col-sm-offset-3 text-center">
        <h3 className="text-center">Number of Lanes</h3>
        <span>Please select the number of lanes.</span><br/>
        <span className="text-danger">This will delete all current scores.</span>

        <RadioButton name="number_Of_Lanes" id="numberOfLanes2" value="2" numberOfLanes={this.props.numberOfLanes} onLaneChange={this.onNumberOfLanesChange} />
        <RadioButton name="number_Of_Lanes" id="numberOfLanes4" value="4" numberOfLanes={this.props.numberOfLanes} onLaneChange={this.onNumberOfLanesChange} />
        <RadioButton name="number_Of_Lanes" id="numberOfLanes6" value="6" numberOfLanes={this.props.numberOfLanes} onLaneChange={this.onNumberOfLanesChange} />
        <hr/>
        <h3 className="text-center">Point System</h3>
        <span>To enable a point system instead of elapsed-time, check the box below.</span><br/>
        <span className="text-danger">This will delete all current scores.</span>
        <div className="checkbox text-center" >
          <label>
            <input type="checkbox"
               checked={this.props.points}
               onChange={this.onPointsChange.bind(this)}
            />
          <strong>points</strong>
        </label>
        </div>
        <hr/>
        <h3 className="text-center text-danger">Caution:</h3>
        <p className="lead">This will erase all data! This includes den names, scout names, and times! <u>This proccess is irreversible</u>! This is appropriate for starting a new tournament.</p>
        <ErrorMessage id="resetAll" message="All data has been successfully reset" />
        <button type="button" className="btn btn-lg btn-danger center-block resetButton" onClick={this.onClick.bind(this)} title="Are you sure?">Reset All Data</button>
      </div>
    );
  }
}

const mapStateToProps = ({ points, scouts, numberOfLanes } )=> {
  return { points, scouts, numberOfLanes };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ resetAllState, togglePoints, selectNumberOfLanes }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesContainer);
