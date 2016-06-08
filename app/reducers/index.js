import { combineReducers } from 'redux';
import DenReducer from './reducer_dens';
import ActiveDenReducer from './reducer_active_den';
import ScoutReducer from './reducer_scouts';
import TogglePointsReducer from './reducer_toggle_points';
import NumberOfLanesReducer from './reducer_lane_number';
import isReselectingReducer from './reducer_isReselecting';

const rootReducer = combineReducers({
  dens: DenReducer,
  activeDen: ActiveDenReducer,
  scouts: ScoutReducer,
  points: TogglePointsReducer,
  numberOfLanes: NumberOfLanesReducer,
  isReselecting: isReselectingReducer
});

export default rootReducer;
