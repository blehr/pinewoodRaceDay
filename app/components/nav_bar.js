import React from 'react';
import Tab from './tab';


const NavBar = () => {
  return (
      <ul className="nav nav-tabs hidden-print">
        <Tab to="/" onlyActiveOnIndex index >Welcome</Tab>
        <Tab to="/roster" >Roster</Tab>
        <Tab to="/race" >Race</Tab>
        <Tab to="/results">Results</Tab>
      <Tab to="/preferences">Preferences</Tab>
      </ul>
  );
};

export default NavBar;
