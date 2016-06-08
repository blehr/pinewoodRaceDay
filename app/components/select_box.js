import React, { Component, PropTypes } from 'react';
import SelectOption from './select_option';


export default class SelctBox extends Component {
  static propTypes = {
    list: PropTypes.array,
    activeDen: PropTypes.string,
    onSelect: PropTypes.func
  }
  constructor(props) {
    super(props);
  }
  render() {
    const option = this.props.list.map(den => {
      if (this.props.list.length !== 0) {
        return (
          <SelectOption value={den} key={den} />
        );
      }
    });
    return (
      <div>
        <select className="form-control denList text-capitalize"
          style={{marginBottom: '10px'}}
          value={this.props.activeDen}
          onChange={e => this.props.onSelect(e.target.value)}
         >
          {option}
        </select>
      </div>
    );
  }
}
