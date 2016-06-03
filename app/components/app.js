import React, { PropTypes } from 'react';
import Header from './header';
import Footer from './footer';
import '../style/style.css';


const App = (props) => {
  return (
    <div className="container">
      <Header />
        {props.children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;
