import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaceForm from '../components/race_form';
import { updateScout } from '../actions/index';
import _ from 'lodash';


class RaceFormContainer extends Component {
  static propTypes = {
    updateScout: PropTypes.func,
    scouts: PropTypes.array,
    activeDen: PropTypes.string,
    points: PropTypes.bool,
    numberOfLanes: PropTypes.number
  }
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(scout, e) {
    e.preventDefault();
    const heatArray = [];

    let count = 1;
    while(count <= this.props.numberOfLanes) {
      heatArray.push(Number(scout[`heat${count}`]));
      count++;
    }
    // replace empty strings with zeros
    const checkedHeatArray = heatArray.map(num => isNaN(num) ? 0 : num);
    const average = _.mean(checkedHeatArray);
    scout.average = Number(average).toFixed(3);
    if (this.props.points === false) {
      const fastest = _.max(checkedHeatArray);
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


  render() {
    const Scout = this.props.scouts.map(scout => {
      if (this.props.scouts.length === 0) {
        return true;
      }
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
            />
        );
        }
      }
    });

    return (
      <div className="table-responsive">
        <h3 className="text-center text-capitalize headerFont">{this.props.activeDen}</h3>
          <table className="table table-hover">
            <ReactCSSTransitionGroup component="tbody" transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
              {Scout}
            </ReactCSSTransitionGroup >
          </table>
      </div>
    );
  }
}

const mapStateToProps = ({ activeDen, scouts, points, numberOfLanes }) => {
  return { activeDen, scouts, points, numberOfLanes };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateScout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceFormContainer);
