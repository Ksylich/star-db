import React, { Component } from "react";

import Spinner from "../spinner/";
import SwapiService from "../../services/swapi-service";

import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    dataList: null
  };

  componentDidMount() {

    const {getData} = this.props;

   getData().then(dataList => {
      this.setState({
        dataList
      });
    });
  }

  onItemClick = e => {
    this.props.onItemSelected(e.target.id);
  };

  renderDataList(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li className="list-group-item" key={id} id={id}>
          {name}
        </li>
      );
    });
  }

  render() {
    const { dataList } = this.state;

    if (!dataList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group" onClick={this.onItemClick}>
        {this.renderDataList(dataList)}
      </ul>
    );
  }
}
