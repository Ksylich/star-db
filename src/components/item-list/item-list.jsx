import React, { useCallback } from "react";

import {WithData} from "../hoc-helpers/";
import SwapiService from "../../services/swapi-service";

import "./item-list.css";

const ItemList = ({ children, dataList, onItemSelected }) => {
  const onItemClick = useCallback(
    e => {
      onItemSelected(e.target.id);
    },
    [onItemSelected]
  );

  const renderDataList = arr => {
    return arr.map(item => {
      const { id } = item;
      const label = children(item);
      return (
        <li className="list-group-item" key={id} id={id}>
          {label}
        </li>
      );
    });
  };

  return (
    <ul className="item-list list-group" onClick={onItemClick}>
      {renderDataList(dataList)}
    </ul>
  );
};

const { getAllPeople } = new SwapiService();

export default WithData(ItemList, getAllPeople);
