import { WithData } from "../hoc-helpers";
import SwapiSerwice from "../../services/swapi-service";
import ItemList from "../item-list";

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiSerwice();

const PersonList = WithData(ItemList, getAllPeople);

const StarshipsList =  WithData(ItemList, getAllStarships);

const PlanetsList =  WithData(ItemList, getAllPlanets);

export { PersonList, StarshipsList, PlanetsList };
