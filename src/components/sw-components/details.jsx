import React, { useContext } from "react";
import { WithDetailsData } from "../hoc-helpers";
import ItemDetails, { Record } from "../item-details/";
import SwapiServiceContext from "../swapi-service-context";

const Details = WithDetailsData(ItemDetails);

const PersonDetails = props => {
  const { getPerson, getPersonImage } = useContext(SwapiServiceContext);
  
  return (
    <Details {...props} getData={getPerson} getImage={getPersonImage}>
      <Record field="birthYear" label="Birth Year:" />
      <Record field="gender" label="Gender:" />
      <Record field="eyeColor" label="Eye color:" />
    </Details>
  );
};

const StarshipsDetails = props => {
  const { getStarship, getStarshipImage } = useContext(SwapiServiceContext);

  return (
    <Details {...props} getData={getStarship} getImage={getStarshipImage}>
      <Record field="model" label="Model:" />
      <Record field="costInCredits" label="Cost:" />
      <Record field="crew" label="Crew:" />
      <Record field="passengers" label="Passengers:" />
      <Record field="hyperdriveRating" label="Hyperdrive Rating:" />
    </Details>
  );
};
const PlanetsDetails = props => {
  const { getPlanet, getPlanetImage } = useContext(SwapiServiceContext);

  return (
    <Details {...props} getData={getPlanet} getImage={getPlanetImage}>
      <Record field="name" label="Name:" />
      <Record field="climate" label="Climate:" />
      <Record field="diameter" label="Diameter:" />
      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="Rotation period:" />
      <Record field="terrain" label="Terrain:" />
    </Details>
  );
};

export { PersonDetails, StarshipsDetails, PlanetsDetails };
