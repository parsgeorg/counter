import React from "react";
import { changeCurrentInterval } from "../../actions";
import { connect } from "../../utils/connect";

class IntervalComponent extends React.Component {
  render() {
    const { changeCurrentInterval, currentInterval } = this.props;
    return (
      <div>
        <span>Интервал обновления секундомера: {currentInterval} сек.</span>
        <span>
          <button onClick={() => changeCurrentInterval(-1)}>-</button>
          <button onClick={() => changeCurrentInterval(1)}>+</button>
        </span>
      </div>
    );
  }
}

export const Interval = connect(
  state => ({
    currentInterval: state.currentInterval
  }),
  dispatch => ({
    changeCurrentInterval: value => dispatch(changeCurrentInterval(value))
  })
)(IntervalComponent);
