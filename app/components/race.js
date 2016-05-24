import React from 'react';
import RaceFormContainer from '../containers/race_form_container';
import RaceResultsContainer from '../containers/race_results_container';
import RaceDenSelectContainer from '../containers/race_den_select_container';
import { pageContentHeight } from '../style/style.css';


export default () => {
  return (
    <div className={`row ${pageContentHeight}`}>
      <div className="col-sm-12">
        <RaceDenSelectContainer />
        <RaceFormContainer />
        <RaceResultsContainer />
      </div>
    </div>
  );
};
