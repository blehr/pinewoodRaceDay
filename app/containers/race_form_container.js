import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaceForm from '../components/race_form';
import { updateScout } from '../actions/index';
import style from '../style/style.css';
import _ from 'lodash';


class RaceFormContainer extends Component {
  static propTypes = {
    updateScout: PropTypes.func,
    scouts: PropTypes.array,
    activeDen: PropTypes.string,
    points: PropTypes.bool
  }
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(scout, e) {
    e.preventDefault();
    const heatArray = [Number(scout.heat1), Number(scout.heat2), Number(scout.heat3), Number(scout.heat4)];
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
          return <RaceForm scout={scout} key={scout.name} handleSubmit={this.handleSubmit} activeDen={this.props.activeDen} state={this.state} onCheckedChange={this.onCheckedChange} />;
        }
      }
    });

    return (
      <div className="table-responsive">
        <h3 className={`text-center text-capitalize ${style.headerFont}`}>{this.props.activeDen}</h3>
        <table className="table table-hover">
          <tbody>
            {Scout}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ activeDen, scouts, points }) => {
  return { activeDen, scouts, points };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateScout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceFormContainer);
