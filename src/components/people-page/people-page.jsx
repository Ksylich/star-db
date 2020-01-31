import React, { Component } from "react";

import { PersonDetails } from "../sw-components/";
import Row from "../row";
import ErrorBoundry from "../error-boundry/";
import { PersonList } from "../sw-components";

import SwapiSerwice from "../../services//swapi-service";

export default class PeoplePage extends Component {
  swapiSerwice = new SwapiSerwice();

  state = {
    selectedPerson: null
  };

  onItemSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  renderDataList(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li className="list-group-item" key={id} id={id}>
          {name}
        </li>
      );
    });
  }

  renderItemRow = i => {
    return `${i.name} (${i.gender}, ${i.birthYear})`;
  };

  render() {
    const itemList = (
      <PersonList onItemSelected={this.onItemSelected}>
        {this.renderItemRow}
      </PersonList>
    );

    // const { getPerson, getPersonImage } = this.swapiSerwice;

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails itemId={this.state.selectedPerson}/>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
