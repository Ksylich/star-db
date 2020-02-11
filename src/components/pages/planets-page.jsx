import React, { Component } from "react";

import { PlanetsDetails,PlanetsList } from "../sw-components/";
import Row from "../row";
import ErrorBoundry from "../error-boundry/";

export default class PlanetsPage extends Component {

  state = {
    selectedPlanet: null
  };

  onItemSelected = id => {
    this.setState({
      selectedPlanet: id
    });
  };

  render() {
    const itemList = (
      <PlanetsList onItemSelected={this.onItemSelected}/>  
    );


    const planetDetails = (
      <ErrorBoundry>
        <PlanetsDetails itemId={this.state.selectedPlanet}/>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={planetDetails} />;
  }
}
