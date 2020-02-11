import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator/error-indicator";

const WithData = (View, getData) => {
  return class extends Component {
    state = {
      dataList: null,
      loading: true,
      error: false
    };

    componentDidMount() {
      getData()
        .then(dataList => {
          this.setState({
            dataList,
            loading: false,
          });
        })
        .catch(e => {
          this.setState({
            error: true,
            loading: false
          });
        });
    }

    render() {
      const { dataList, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      return (
        <ErrorBoundry>
          <View {...this.props} dataList={dataList} />
        </ErrorBoundry>
      );
    }
  };
};

export default WithData;
