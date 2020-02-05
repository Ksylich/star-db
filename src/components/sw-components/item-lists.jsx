import React from "react";
import { WithData } from "../hoc-helpers";
import SwapiSerwice from "../../services/swapi-service";
import ItemList from "../item-list";

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiSerwice();

const WithChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const PersonItem = ({ name, birthYear }) => (
  <span>
    {name} ({birthYear})
  </span>
);

const StarshipItem = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const PlanetItem = ({ name, rotationPeriod }) => (
  <span>
    {name} ({rotationPeriod})
  </span>
);

const PersonList = WithChildFunction(
  WithData(ItemList, getAllPeople),
  PersonItem
);

const StarshipsList = WithChildFunction(
  WithData(ItemList, getAllStarships),
  StarshipItem
);

const PlanetsList = WithChildFunction(
  WithData(ItemList, getAllPlanets),
  PlanetItem
);

export { PersonList, StarshipsList, PlanetsList };
