import React, { Component } from "react";

import ItemList from "../item-list/";
import ItemDetails, { Record } from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry/";


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
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiSerwice.getAllPeople}
      >
        {this.renderItemRow}
      </ItemList>
    );

    // const { getPerson, getPersonImage } = this.swapiSerwice;

    const personDetails = (
      <ErrorBoundry>
        
        <ItemDetails
          itemId={this.state.selectedPerson}
        >
          <Record field="birthYear" label="Birth Year:" />
          <Record field="gender" label="Gender:" />
          <Record field="eyeColor" label="Eye color:" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
