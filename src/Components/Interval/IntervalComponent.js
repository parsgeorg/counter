import React from "react";
import { changeCurrentInterval } from "../../actions";
import { connect } from "../../utils/connect";

const IntervalComponent = ({ changeCurrentInterval, currentInterval }) => {
  const changeCurrentIntervalPrevHandle = () => changeCurrentInterval(-1);
  const changeCurrentIntervalNextHandle = () => changeCurrentInterval(1);

  return (
    <div>
      <span>Интервал обновления секундомера: {currentInterval} сек.</span>
      <span>
        <button onClick={changeCurrentIntervalPrevHandle}>-</button>
        <button onClick={changeCurrentIntervalNextHandle}>+</button>
      </span>
    </div>
  );
};

export const Interval = connect(
  state => ({
    currentInterval: state.currentInterval
  }),
  dispatch => ({
    changeCurrentInterval: value => dispatch(changeCurrentInterval(value))
  })
)(IntervalComponent);
