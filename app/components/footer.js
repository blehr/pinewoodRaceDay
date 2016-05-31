import React from 'react';


const Footer = () => {
  return (
    <div className="row" >
      <footer>
        <div className="col-sm-4 text-center">
          <p><a href="https://github.com/blehr/pinewoodRaceDay" >View on GitHub <span className="fa fa-github"></span></a></p>
        </div>
        <div className="col-sm-4 text-center">
          <p>&copy; 2016 <a href="http://brandonlehr.com" target="_blank">Brandon Lehr</a></p>
        </div>
        <div className="col-sm-4"></div>
      </footer>
    </div>
  );
};

export default Footer;
