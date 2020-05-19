// action creators
import {
  SET_CURRENT_INTERVAL,
  SET_TIMER,
  SET_CURRENT_TIME
} from "./actionTypes";

export const changeCurrentInterval = value => ({
  type: SET_CURRENT_INTERVAL,
  payload: value
});

export const changeTimer = value => ({
  type: SET_TIMER,
  payload: value
});

export const changeCurrentTime = value => ({
  type: SET_CURRENT_TIME,
  payload: value
});
