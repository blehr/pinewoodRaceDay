import React from 'react';
import Header from './header';
import Footer from './footer';
import '../style/style.css';


export default (props) => {
  return (
    <div className="container">
      <Header />
        {props.children}
      <Footer />
    </div>
  );
};
