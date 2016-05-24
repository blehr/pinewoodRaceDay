import React from 'react';
import PreferencesContainer from '../containers/preferences_container';
import { pageContentHeight } from '../style/style.css';


const Preferences = () => {
  return (
    <div className={`row ${pageContentHeight}`}>
      <PreferencesContainer  />
    </div>
  );
};

export default Preferences;
