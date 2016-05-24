const ActiveDenReducer = (state = '', action) => {
  switch (action.type) {
  case 'SELECT_ACTIVE_DEN':
    return action.payload;
  case 'RESET_ALL_STATE':
    const newState = '';
    return newState;
  }
  return state;
};

export default ActiveDenReducer;
