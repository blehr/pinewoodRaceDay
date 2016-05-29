import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDenName, removeDenName, selectActiveDen } from '../actions/index';
import List from '../components/list';
import Input from '../components/input';
import ErrorMessage from '../components/error_message';
import { showErrorMessage } from '../util/helper';


class RosterDenContainer extends Component {
  static propTypes = {
    addDenName: PropTypes.func,
    removeDenName: PropTypes.func,
    selectActiveDen: PropTypes.func,
    dens: PropTypes.array,
    activeDen: PropTypes.string,
    scouts: PropTypes.array
  }
  constructor(props) {
    super(props);

    this.state = { denName: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onDenSubmit = this.onDenSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onDenClick = this.onDenClick.bind(this);
  }

  errorId = 'denListError';

  onDenSubmit(e) {
    e.preventDefault();
    if (this.state.denName === '') {
      return true;
    } else {
      this.props.addDenName(this.state.denName);
      this.setState({ denName: '' });
    }
  }

  onInputChange(e) {
    this.setState({
      denName: e.target.value
    });
  }

  onDeleteClick(den) {
    /*
    *  if any scouts are assigned to den show error message
    * if den is active den, treset active den
    */
    const scoutArray = this.props.scouts;
    if (!scoutArray.some(scout => scout.den === den)) {
      this.props.removeDenName(den);
      if (den === this.props.activeDen) {
        this.onDenClick('');
      }
    } else {
      showErrorMessage(this.errorId);
    }
  }

  onDenClick(den) {
    this.props.selectActiveDen(den);
  }


  render() {
    return (
      <div>
        <Input handleInputChange={this.onInputChange} onFormSubmit={this.onDenSubmit} name={this.state.denName} formHeading="Add Den or Group Names"/>
        <ErrorMessage message="A den cannot be deleted while scouts are assigned to it." id={this.errorId} />
        <List list={this.props.dens} onTextClick={this.onDenClick} onDeleteClick={this.onDeleteClick} activeDen={this.props.activeDen}/>
      </div>

    );
  }
}

const mapStateToProps = ({ dens, scouts, activeDen }) => {
  return { dens, scouts, activeDen };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addDenName, removeDenName, selectActiveDen }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RosterDenContainer);
