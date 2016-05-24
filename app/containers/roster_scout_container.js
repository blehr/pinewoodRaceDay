import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addScoutName, removeScoutName } from '../actions/index';
import List from '../components/list';
import Input from '../components/input';
import ErrorMessage from '../components/error_message';
import { showErrorMessage } from '../util/helper';


class RosterScoutContainer extends Component {
  static propTypes = {
    addScoutName: PropTypes.func,
    activeDen: PropTypes.string,
    removeScoutName: PropTypes.func,
    scouts: PropTypes.array
  }
  constructor(props) {
    super(props);

    this.state = { scoutName: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onScoutSubmit = this.onScoutSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  errorId = 'scoutListError';

  onScoutSubmit(e) {
    e.preventDefault();
    if (this.state.scoutName === '' || !this.props.activeDen) {
      showErrorMessage(this.errorId);

      return true;
    } else {
      this.props.addScoutName(this.state.scoutName, this.props.activeDen);
      this.setState({ scoutName: '' });
    }
  }

  onInputChange(e) {
    this.setState({
      scoutName: e.target.value
    });
  }

  onDeleteClick(name) {
    this.props.removeScoutName(name);
  }

  render() {
    return(
      <div>
        <Input handleInputChange={this.onInputChange} onFormSubmit={this.onScoutSubmit} name={this.state.scoutName} denHeading={`${this.props.activeDen} Den `} formHeading={'(Add Scout Names)'} />
        <ErrorMessage id={this.errorId} message="Select a den to add scouts to." />
        <List list={this.props.scouts} onTextClick={this.onDenClick} activeDen={this.props.activeDen} onDeleteClick={this.onDeleteClick} />
      </div>
    );
  }
}

const mapStateToProps = ({ dens, activeDen, scouts }) => {
  return { dens, activeDen, scouts };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addScoutName, removeScoutName }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RosterScoutContainer);
