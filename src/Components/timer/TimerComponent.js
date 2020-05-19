import React from "react";
import { connect } from "../../utils/connect";
import { Interval } from "../Interval/IntervalComponent";
import { changeCurrentTime, changeTimer } from "../../actions";

class TimerComponent extends React.Component {
  componentDidMount() {
    this.props.isHandlerStart === "true" && this.handleStart();
  }

  setCurrentTime = () => {
    const { changeCurrentTime, currentTime, currentInterval } = this.props;
    changeCurrentTime(currentTime + currentInterval);
  };

  handleStart = () => {
    const { currentInterval, changeTimer } = this.props;
    const timerId = setInterval(
      () => this.setCurrentTime(),
      currentInterval * 1000
    );
    changeTimer(timerId);
  };

  handleStop = () => {
    const { changeTimer } = this.props;
    clearInterval(this.props.timerId);
    changeTimer(null);
    this.props.changeCurrentTime(0);
  };

  render() {
    return (
      <>
        <div>
          <Interval />
          <div>Секундомер: {this.props.currentTime} сек.</div>
          <div>
            <button onClick={this.handleStart}>Старт</button>
            <button onClick={this.handleStop}>Стоп</button>
          </div>
        </div>
      </>
    );
  }
}

export const Timer = connect(
  state => ({
    currentTime: state.currentTime,
    currentInterval: state.currentInterval,
    isHandlerStart: state.isHandlerStart,
    timerId: state.timerId
  }),
  dispatch => ({
    changeTimer: value => dispatch(changeTimer(value)),
    changeCurrentTime: value => dispatch(changeCurrentTime(value))
  })
)(TimerComponent);
