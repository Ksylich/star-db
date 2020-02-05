import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator/";
import PeoplePage from "../people-page/";
import  SwapiServiceContext  from "../swapi-service-context";

import SwapiSerwice from "../../services/swapi-service";
import {
  StarshipsDetails,
  StarshipsList,
  PlanetsDetails,
  PlanetsList
} from "../sw-components/";

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

    return (
      <SwapiServiceContext.Provider value={this.swapiSerwice}>
        <div>
          <Header />
          {/* <RandomPlanet /> */}
          <PeoplePage />

          {/* <StarshipsList onItemSelected={null}/> */}
          <StarshipsDetails itemId={15} />

          {/* <PlanetsList onItemSelected={null}/> */}
          <PlanetsDetails itemId={15} />
        </div>
      </SwapiServiceContext.Provider>
    );
  }
}

export default App;
