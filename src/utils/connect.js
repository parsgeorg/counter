import React from "react";
import { PropTypes } from "prop-types";

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  return class extends React.Component {
    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      const { store } = this.context;
      return (
        <Component
          {...this.props}
          {...mapStateToProps(store.getState(), this.props)}
          {...mapDispatchToProps(store.dispatch, this.props)}
        />
      );
    }

    componentDidMount() {
      const { store } = this.context;
      this.unsubscribe = store.subscribe(this.handleChange);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    handleChange = () => this.forceUpdate();
  };
};
