import React from 'react';
import NavBar from './nav_bar';
import style from '../style/style.css';


const Header = () => {
  return (
    <div className="row text-center" >
      <header>
        <h1 className={style.headerFont}>PinewoodRaceDay.com</h1>
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
