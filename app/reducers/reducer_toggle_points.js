const TogglePointsReducer = (state = false, action) => {
  switch(action.type) {
  case 'TOGGLE_POINTS':
    return !action.payload;
  case 'RESET_ALL_STATE':
    return false;
  }
  return state;
};

export default TogglePointsReducer;
