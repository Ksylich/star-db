import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";

const WithData = (View, getData) => {
  return class extends Component {
    state = {
      dataList: null
    };

    componentDidMount() {
      getData()
        .then(dataList => {
          this.setState({
            dataList
          });
        })
        .catch(e => {
          return null;
        });
    }

    render() {
      const { dataList } = this.state;

      if (!dataList) {
        return <Spinner />;
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
