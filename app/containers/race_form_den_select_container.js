import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDenName, updateScout, addScoutName, selectActiveDen, toggleIsSelecting } from '../actions/index';
import SelectBox from '../components/select_box';
import ReselectDen from '../components/reselect_den';
import ReselectButton from '../components/reselect_button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import RaceForm from '../components/race_form';
import _ from 'lodash';

class RaceFormDenSelectContainer extends Component {
  static propTypes = {
    selectActiveDen: PropTypes.func,
    dens: PropTypes.array,
    activeDen: PropTypes.string,
    toggleIsSelecting: PropTypes.func,
    isReselecting: PropTypes.bool,
    updateScout: PropTypes.func,
    scouts: PropTypes.array,
    points: PropTypes.bool,
    numberOfLanes: PropTypes.number,
    addDenName: PropTypes.func,
    addScoutName: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = { newDen: '', newDenScouts: [] };
    this.onNewDenChange = this.onNewDenChange.bind(this);
    this.onDenClick = this.onDenClick.bind(this);
    this.onReselect = this.onReselect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onReselectDenAndScoutSubmit = this.onReselectDenAndScoutSubmit.bind(this);
  }
  componentDidMount() {
    this.props.toggleIsSelecting(false);
  }
  handleSubmit(scout, e) {
    e.preventDefault();
    const heatArray = [];

    let count = this.props.numberOfLanes;
    while(count > 0) {
      heatArray.push(Number(scout[`heat${count}`]));
      count--;
    }
    // replace empty strings with zeros
    const checkedHeatArray = heatArray.map(num => isNaN(num) ? 0 : num);
    const average = _.mean(checkedHeatArray);
    scout.average = Number(average).toFixed(3);
    if (this.props.points === false) {
      const fastest = _.min(checkedHeatArray);
      scout.fastest = Number(fastest).toFixed(3);
      this.props.updateScout(scout);
    }
    if (this.props.points === true) {
      const score = _.sum(checkedHeatArray);
      scout.score = score;
      this.props.updateScout(scout);
    }
  }
  onCheckedChange = (scout) => {
    scout.checked = !scout.checked;
    this.props.updateScout(scout);
  }
  onReselect(scout) {
    const index = this.state.newDenScouts.indexOf(scout.name);
    if (index === -1) {
      this.setState({
        newDenScouts: this.state.newDenScouts.concat([scout.name])
      });
    } else {
      this.state.newDenScouts.splice(index, 1);
      this.setState({
        newDenScouts: this.state.newDenScouts
      });
    }
  }

  onDenClick(den) {
    this.props.selectActiveDen(den);
  }
  reselecting() {
    this.props.toggleIsSelecting(!this.props.isReselecting);
  }
  onNewDenChange(e) {
    this.setState({
      newDen: e.target.value
    });
  }
  onReselectDenAndScoutSubmit(e) {
    e.preventDefault();
    if (this.state.newDen !== '') {
      if (this.props.dens.indexOf(this.state.newDen) === -1 && this.state.newDenScouts.length !== 0) {
        const newDenName = this.state.newDen.toLowerCase();
        this.props.addDenName(newDenName);
        this.state.newDenScouts.map( scout => {
          this.props.addScoutName(scout, newDenName);
        });
        this.props.toggleIsSelecting(false);
        this.props.selectActiveDen(newDenName);

        this.setState({
          newDen: '',
          newDenScouts: []
        });
      } else {
        alert('Please specify a unique group name and select racers.');
      }
    } else {
      alert('Please specify a unique group name.');
    }
  }

  render() {
    const Scout = this.props.scouts.map(scout => {
      if (scout.den) {
        if (scout.den === this.props.activeDen && scout.checked === false) {
          return (
            <RaceForm
              scout={scout}
              key={scout.name}
              handleSubmit={this.handleSubmit}
              activeDen={this.props.activeDen}
              state={this.state}
              numberOfLanes={this.props.numberOfLanes}
              onCheckedChange={this.onCheckedChange}
              isReselecting={this.props.isReselecting}
              onReselect={this.onReselect}
              containerState={this.state}
            />
          );
        }
      }
    });

    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            <SelectBox list={this.props.dens} onSelect={this.onDenClick} activeDen={this.props.activeDen} />
          </div>
          <div className="col-sm-4 col-sm-push-4">
            <ReselectButton reselecting={this.reselecting.bind(this)} />
          </div>
          <div className="col-sm-4 col-sm-pull-4">
            <ReselectDen isReselecting={this.props.isReselecting } onReselectDenAndScoutSubmit={this.onReselectDenAndScoutSubmit} newDenState={this.state.newDen} onNewDenChange={this.onNewDenChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="table-responsive">
              <h3 className="text-center text-capitalize headerFont">{this.props.activeDen}</h3>
                <table className="table">
                  <ReactCSSTransitionGroup component="tbody" transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
                    {Scout}
                  </ReactCSSTransitionGroup >
                </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ dens, activeDen, isReselecting, scouts, points, numberOfLanes }) => {
  return { dens, activeDen, isReselecting, scouts, points, numberOfLanes, };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectActiveDen, toggleIsSelecting, updateScout, addDenName, addScoutName }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceFormDenSelectContainer);
