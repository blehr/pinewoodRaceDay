import React from 'react';
import RosterDenContainer from '../containers/roster_den_container';
import RosterScoutContainer from '../containers/roster_scout_container';


export default () => {
  return (
    <div className="row pageContentHeight">
      <div className="col-sm-6">
        <RosterDenContainer />
      </div>
      <div className="col-sm-6" >
        <RosterScoutContainer />
      </div>
    </div>
  );
};
