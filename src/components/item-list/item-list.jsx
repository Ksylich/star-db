import React, { useCallback } from "react";


import "./item-list.css";

const ItemList = ({ children, dataList, onItemSelected }) => {
  const onItemClick = useCallback(
    e => {
      console.log('target', e.target.id);
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


export default ItemList;
