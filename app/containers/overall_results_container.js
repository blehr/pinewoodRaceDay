import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Results from '../components/results';
import { updateScout } from '../actions/index';

class OverallResultsContainer extends Component {
  static propTypes = {
    scouts: PropTypes.array,
    activeDen: PropTypes.string,
    dens: PropTypes.array,
    updateScout: PropTypes.func,
    onPDFClick: PropTypes.func
  }
  constructor(props) {
    super(props);
  }
  onCheckedChange = (scout) => {
    scout.checked = !scout.checked;
    this.props.updateScout(scout);
  }
  print() {
    return window.print();
  }
  render() {
    const denResultTable = this.props.dens.map(den => {
      return <Results list={this.props.scouts} activeDen={den} den={den} key={den} />;
    });
    return (
      <div>
        <p className="text-right hidden-print" style={{'marginTop': '10px'}}>To download results, press <button type="button" className="btn btn-sm btn-default" onClick={this.print}>print</button> and select save to pdf.</p>
        {denResultTable}
      </div>
    );
  }
}

const mapStateToProps = ({ dens, activeDen, scouts }) => {
  return { dens, activeDen, scouts };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateScout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OverallResultsContainer);
