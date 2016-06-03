import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateScout } from '../actions/index';
import Results from '../components/results';

class RaceResultsContainer extends Component {
  static propTypes = {
    scouts: PropTypes.array,
    activeDen: PropTypes.string,
    dens: PropTypes.array,
    updateScout: PropTypes.func,
    points: PropTypes.bool,
    numberOfLanes: PropTypes.number
  }
  constructor(props) {
    super(props);
  }

  onCheckedChange = (scout) => {
    scout.checked = !scout.checked;
    this.props.updateScout(scout);
  }

  render() {
    return (
      <Results
        list={this.props.scouts}
        den={this.props.activeDen}
        dens={this.props.dens}
        points={this.props.points}
        numberOfLanes={this.props.numberOfLanes}
        onCheckedChange={this.onCheckedChange}
       />
    );
  }
}

const mapStateToProps = ({ dens, activeDen, scouts, points, numberOfLanes }) => {
  return { dens, activeDen, scouts, points, numberOfLanes };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateScout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceResultsContainer);
