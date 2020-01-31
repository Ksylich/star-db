import React from "react";
import { WithDetailsData, WithData } from "../hoc-helpers";
import SwapiSerwice from "../../services/swapi-service";
import ItemDetails, { Record } from "../item-details/";

const {
  getPerson,
  getStarship,
  getPlanet,
  getPersonImage,
  getStarshipImage,
  getPlanetImage
} = new SwapiSerwice();

const Deatails = WithDetailsData(ItemDetails);

const PersonDetails = props => {
  return (
    <Deatails {...props} getData={getPerson} getImage={getPersonImage}>
      <Record field="birthYear" label="Birth Year:" />
      <Record field="gender" label="Gender:" />
      <Record field="eyeColor" label="Eye color:" />
    </Deatails>
  );
};

const StarshipsDetails= props => {
    return (
      <Deatails {...props} getData={getStarship} getImage={getStarshipImage}>
       <Record field="model" label="Model:" />
        <Record field="costInCredits" label="Cost:" />
        <Record field="crew" label="Crew:" />
        <Record field="passengers" label="Passengers:" />
        <Record field="hyperdriveRating" label="Hyperdrive Rating:" />
      </Deatails>
    );
  };
const PlanetsDetails = WithData(ItemDetails);

export { PersonDetails, StarshipsDetails, PlanetsDetails };
