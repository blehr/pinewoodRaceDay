import React from 'react';
import OverallResultsContainer from '../containers/overall_results_container';
import { pageContentHeight } from '../style/style.css';

export default () => {
  return (
    <div className={`row ${pageContentHeight}`}>
      <div className="col-sm-12">
        <OverallResultsContainer />
      </div>
    </div>
  );
};
