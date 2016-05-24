import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectActiveDen } from '../actions/index';
import DenSelect from '../components/den_select';


class RaceDenSelectContainer extends Component {
  static propTypes = {
    selectActiveDen: PropTypes.func,
    dens: PropTypes.array,
    activeDen: PropTypes.string
  }
  constructor(props) {
    super(props);

    this.onDenClick = this.onDenClick.bind(this);
  }

  onDenClick(den) {
    this.props.selectActiveDen(den);
  }


  render() {
    return (
      <DenSelect list={this.props.dens} onTextClick={this.onDenClick} activeDen={this.props.activeDen}/>
    );
  }
}

const mapStateToProps = ({ dens, activeDen }) => {
  return { dens, activeDen };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectActiveDen }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceDenSelectContainer);
