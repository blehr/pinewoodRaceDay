const DenReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_DEN_NAME':
    return [ ...state, action.payload ];
  case 'REMOVE_DEN_NAME':
    const index = state.indexOf(action.payload);
    return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ];
  case 'RESET_ALL_STATE':
    const newState = [];
    return newState;
  default:
    return state;
  }
};

export default DenReducer;
