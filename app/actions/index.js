export function addDenName(denName) {
  return {
    type: 'ADD_DEN_NAME',
    payload: denName
  };
}

export function removeDenName(denName) {
  return {
    type: 'REMOVE_DEN_NAME',
    payload: denName
  };
}

export function selectActiveDen(denName) {
  return {
    type: 'SELECT_ACTIVE_DEN',
    payload: denName
  };
}

export function addScoutName(scoutName, activeDen) {
  return {
    type: 'ADD_SCOUT_NAME',
    payload: scoutName,
    den: activeDen
  };
}

export function removeScoutName(scoutName) {
  return {
    type: 'REMOVE_SCOUT_NAME',
    payload: scoutName
  };
}

export function updateScout(scout) {
  return {
    type: 'UPDATE_SCOUT',
    payload: scout
  };
}

export function resetAllState() {
  return {
    type: 'RESET_ALL_STATE',
  };
}

export function togglePoints(checked) {
  return {
    type: 'TOGGLE_POINTS',
    payload: checked
  };
}

export function selectNumberOfLanes(num) {
  return {
    type: 'NUMBER_OF_LANES',
    payload: num
  };
}
