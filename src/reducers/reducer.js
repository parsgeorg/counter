import {
  SET_CURRENT_INTERVAL,
  SET_CURRENT_TIME,
  SET_TIMER
} from "../actions/actionTypes";

export const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case SET_CURRENT_INTERVAL:
      let currentInterval = state.currentInterval;
      if (currentInterval + payload > 0) {
        currentInterval = currentInterval + payload;
      }
      return {
        ...state,
        currentInterval,
        isHandlerStart: "true"
      };
    case SET_TIMER:
      return {
        ...state,
        timerId: payload
      };
    case SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: payload
      };
    default:
      return state;
  }
};
