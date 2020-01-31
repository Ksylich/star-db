import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator/";
import PeoplePage from "../people-page/";

import Row from "../row/";
import ItemDetails, { Record } from "../item-details";
import SwapiSerwice from "../../services/swapi-service";
import { StarshipsDetails } from "../sw-components/";

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
      <div>
        <Header />
        {/* <RandomPlanet /> */}
        <PeoplePage />
        <StarshipsDetails itemId={15}/>
      </div>
    );
  }
}

export default App;
