import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Race from './components/race';
import Welcome from './components/welcome';
import Roster from './components/roster';
import OverallResults from './components/overall_results';
import Preferences from './components/preferences.js';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Welcome} />
    <Route path="/roster" component={Roster} />
    <Route path="/race" component={Race} />
    <Route path="/results" component={OverallResults} />
    <Route path="/preferences" component={Preferences} />
  </Route>
);
