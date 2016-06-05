import React, { Component, PropTypes } from 'react';


export default class GoogleAd extends Component {
  static propTypes = {
    client: PropTypes.string,
    slot: PropTypes.string,
    format: PropTypes.string,
    wrapperDivStyle: PropTypes.object
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <div style={this.props.wrapperDivStyle}>
        <ins className="adsbygoogle"
           style={{'display': 'block'}}
           data-ad-client={this.props.client}
           data-ad-slot={this.props.slot}
           data-ad-format={this.props.format}>
        </ins>
      </div>
    );
  }
}
