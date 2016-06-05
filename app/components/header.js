import React from 'react';
import GoogleAd from './google_ad';
import NavBar from './nav_bar';

const style = {
  marginTop: '15px',
  marginBottom: '20px'
};


const Header = () => {
  return (
    <div className="row text-center" >
      <header>
        <div className="col-sm-6">
          <h1 className="headerFont">PinewoodRaceDay.com</h1>
        </div>
        <div className="col-sm-6">
          <GoogleAd client="ca-pub-9453781066915703" slot="8993316607" format="auto" wrapperDivStyle={style} />
        </div>
        <NavBar />
      </header>

    </div>
  );
};

export default Header;
