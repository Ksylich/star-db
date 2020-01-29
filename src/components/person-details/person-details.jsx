import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
// import ErrorButton from '../error-button/';

import "./person-details.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    const { personId } = this.props;
    if (prevProps.personId !== personId) {
      this.updatePerson(personId);
    }
  }

  updatePerson() {
    this.setState({ loading: true });
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.swapiService.getPerson(personId).then(person => {
      this.setState({
        person,
        loading: false
      });
    });
  }

  render() {
    if (!this.state.person) {
      return <span> Choose some character!!!</span>;
    }

    const {
      person: { id, name, gender, birthYear, eyeColor },
      loading
    } = this.state;

    if (loading) {
      return <Spinner/>
    }

    return (
      <div className="person-details card">
        <img
          className="person-image"
          alt="person"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          {/* <ErrorButton/> */}
        </div>
      </div>
    );
  }
}
