const NumberOfLanesReducer = (state = 4, action) => {
  switch (action.type) {
  case 'NUMBER_OF_LANES':
    return action.payload;
  case 'RESET_ALL_STATE':
    return 4;
  default:
    return state;
  }
};

export default NumberOfLanesReducer;
