import React from 'react';
import NavBar from './nav_bar';


const Header = () => {
  return (
    <div className="row text-center" >
      <header>
        <h1 className="headerFont">PinewoodRaceDay.com</h1>
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
