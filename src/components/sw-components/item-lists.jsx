import React from "react";
import { WithData } from "../hoc-helpers";
import SwapiSerwice from "../../services/swapi-service";
import ItemList from "../item-list";

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiSerwice();

const WithChildFunction = fn => Wrapped => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const PersonItem = ({ name, birthYear, id }) => (
  <span id={id}>
    {name} ({birthYear})
  </span>
);

const StarshipItem = ({ name, model, id }) => (
  <span id={id}>
    {name} ({model})
  </span>
);

const PlanetItem = ({ name, rotationPeriod, id }) => (
  <span id={id}>
    {name} ({rotationPeriod})
  </span>
);

const PersonList = WithChildFunction(PersonItem)(
  WithData(ItemList, getAllPeople)
);

const StarshipsList = WithChildFunction(StarshipItem)(
  WithData(ItemList, getAllStarships)
);

const PlanetsList = WithChildFunction(PlanetItem)(
  WithData(ItemList, getAllPlanets)
);

export { PersonList, StarshipsList, PlanetsList };
