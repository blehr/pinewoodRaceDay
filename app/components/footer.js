import React from 'react';
import GoogleAd from './google_ad';

const style = {

};


const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-sm-12">
          <GoogleAd slot="7398832204" client="ca-pub-9453781066915703" format="auto" wrapperDivStyle={style} />
        </div>
      </div>
      <div className="row" >
        <div className="col-sm-4 text-center">
          <p><a href="https://github.com/blehr/pinewoodRaceDay" >View on GitHub <span className="fa fa-github"></span></a></p>
        </div>
        <div className="col-sm-4 text-center">
          <p>&copy; 2016 <a href="http://brandonlehr.com" target="_blank">Brandon Lehr</a></p>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
