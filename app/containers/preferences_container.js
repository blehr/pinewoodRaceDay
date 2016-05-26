import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetAllState, togglePoints } from '../actions/index';
import  { resetButton } from '../style/style.css';

class PreferencesContainer extends Component {
  static propTypes = {
    resetAllState: PropTypes.func,
    togglePoints: PropTypes.func,
    points: PropTypes.bool,
    scouts: PropTypes.array
  }
  constructor(props) {
    super(props);
  }

  onClick(e) {
    e.preventDefault();
    this.props.resetAllState();
  }

  onPointsChange() {
    this.props.togglePoints(this.props.points);
  }

  render() {
    return(
      <div className="col-sm-6 col-sm-offset-3">
        <div >
          <h3 className="text-center">Use Point System</h3>
          <p className="lead">If you would like to use a point system instead of elapsed-time, check the box below.</p>
          <span className="lead text-danger">This will delete all current scores.</span>
          <div className="checkbox text-center" >
            <label>
              <input type="checkbox"
                 checked={this.props.points}
                 onChange={this.onPointsChange.bind(this)}
              />
            <strong>points</strong>
          </label>
          </div>
        </div>
        <hr/>
        <h3 className="text-center text-danger">Caution:</h3>
        <p className="lead">This will erase all data! This includes den names, scout names, and times! <u>This proccess is irreversible</u>! This is appropriate for starting a new tournament.</p>
      <button type="button" className={`btn btn-lg btn-danger center-block ${resetButton}`} onClick={this.onClick.bind(this)} title="Are you sure?">Reset All Data</button>
      </div>
    );
  }
}

const mapStateToProps = ({ points, scouts } )=> {
  return { points, scouts };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ resetAllState, togglePoints }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesContainer);
