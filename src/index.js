import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { PropTypes } from "prop-types";
import { reducer } from "./reducers/reducer";
import { Timer } from "./Components/timer/TimerComponent";

// Slomux — упрощённая, сломанная реализация Flux.
// Перед вами небольшое приложение, написанное на React + Slomux.
// Это нерабочий секундомер с настройкой интервала обновления.

// Исправьте ошибки и потенциально проблемный код, почините приложение и прокомментируйте своё решение.

// При нажатии на "старт" должен запускаться секундомер и через заданный интервал времени увеличивать свое значение на значение интервала
// При нажатии на "стоп" секундомер должен останавливаться и сбрасывать свое значение

const createStore = function(reducer, initialState = []) {
  let currentState = initialState;
  let listeners = [];

  const getState = () => currentState;

  const dispatch = action => {
    currentState = reducer(currentState, action);
    listeners.forEach(listener => listener());

    return action;
  };

  const subscribe = listener => {
    listeners.push(listener);
    // Функция для отписки
    return () => {
      const index = listeners.indexOf(listener);
      if (index >= 0) {
        listeners.splice(index, 1);
      }
    };
  };

  return {
    getState,
    dispatch,
    subscribe
  };
};

class Provider extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  componentWillMount() {
    window.store = this.props.store;
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};

//global state
const initialState = {
  currentInterval: 1,
  currentTime: 0,
  timerId: null,
  isHandlerStart: "false"
};

// init
ReactDOM.render(
  <Provider store={createStore(reducer, initialState)}>
    <Timer />
  </Provider>,
  document.getElementById("root")
);
