const isReselectingReducer = ( state = false, action) => {
  switch(action.type) {
  case 'TOGGLE_ISSELECTING':
    return action.payload;
  default:
    return state;
  }
};

export default isReselectingReducer;
