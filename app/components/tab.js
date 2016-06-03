import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


export default class Tab extends Component {

  static propTypes = {
    index: PropTypes.bool,
    to: PropTypes.string,
    onlyActiveOnIndex: PropTypes.bool,
    children: PropTypes.node
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const { router } = this.context;
    const { index, onlyActiveOnIndex, to, children, ...props } = this.props;
    const isActive = router.isActive(to, onlyActiveOnIndex);
    const LinkComponent = index ? IndexLink : Link;
    const className = isActive ? 'active' : '';

    return (
      <li className={className} >
        <LinkComponent to={to} {...props} >{children}</LinkComponent>
      </li>
    );
  }
}
