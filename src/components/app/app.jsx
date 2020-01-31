import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator/";
import PeoplePage from "../people-page/";

import Row from "../row/";
import ItemDetails, {Record} from "../item-details";
import SwapiSerwice from "../../services/swapi-service";

import "./app.css";

class App extends Component {
  swapiSerwice = new SwapiSerwice();

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiSerwice;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImage={getPersonImage}>
        <Record field="birthYear" label="Birth Year:" />
        <Record field="gender" label="Gender:" />
        <Record field="eyeColor" label="Eye color:" />

      </ItemDetails>
      
    );
    const starshipDetails = (
      <ItemDetails
        itemId={15}
        getData={getStarship}
        getImage={getStarshipImage}
      >
        <Record field="model" label="Model:" />
        <Record field="costInCredits" label="Cost:" />
        <Record field="crew" label="Crew:" />
        <Record field="passengers" label="Passengers:" />
        <Record field="hyperdriveRating" label="Hyperdrive Rating:" />

      </ItemDetails>
    );

    return (
      <div>
        <Header />
        {/* <Row left={personDetails} right={starshipDetails} /> */}
        {/* <RandomPlanet /> */}
        <PeoplePage/>
      </div>
    );
  }
}

export default App;
