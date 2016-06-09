import React from 'react';
import RaceResultsContainer from '../containers/race_results_container';
import RaceFormDenSelectContainer from '../containers/race_form_den_select_container';

export default () => {
  return (
    <div className="pageContentHeight" >
      <RaceFormDenSelectContainer />
      <RaceResultsContainer />
    </div>
  );
};
