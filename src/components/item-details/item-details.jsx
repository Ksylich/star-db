import React from "react";

// import ErrorButton from '../error-button/';

import "./item-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

const ItemDetails = ({ children, image, item }) => {
  return (
    <div className="item-details card">
      <img className="item-image" alt="item" src={image} />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, child => {
            return React.cloneElement(child, { item });
          })}
        </ul>
        {/* <ErrorButton/> */}
      </div>
    </div>
  );
};

export default ItemDetails;
