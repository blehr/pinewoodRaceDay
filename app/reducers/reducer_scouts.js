const ScoutReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SCOUT_NAME':
    return [ ...state, {name: action.payload, den: action.den, checked: false} ];
  case 'REMOVE_SCOUT_NAME':
    let newState = [];
    state.forEach(scout => {
      if (scout.name !== action.payload) {
        newState.push(scout);
      }
    });
    return newState;
  case 'UPDATE_SCOUT':
    newState = [];
    state.forEach(scout => {
      if(scout.name === action.payload.name && scout.den === action.payload.den) {
        newState.push(action.payload);
      } else {
        newState.push(scout);
      }
    });
    return newState;
  case 'CHECKED_SCOUT':
    return state.forEach(scout => {
      if(scout.name === action.payload.name) {
        scout.checked = !scout.checked;
      }
    });
  case 'TOGGLE_POINTS':
    return state.map(scout => {
      return {
        name: scout.name,
        den: scout.den,
        checked: scout.checked
      };
    });
  case 'RESET_ALL_STATE':
    const emptyState = [];
    return emptyState;
  default:
    return state;
  }
};

export default ScoutReducer;
