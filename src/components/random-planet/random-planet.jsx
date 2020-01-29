import React, { Component } from "react";

import "./random-planet.css";

import Spinner from "../spinner";

import SwapiService from "../../services/swapi-service";
import ErrorIndicator from '../error-indicator';
import PlanetView from './planet-view';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.interval = setInterval(this.updatePlanet,5000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    let id = Math.floor(Math.random() * 25 + 2 );
    // let id =50000000;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errIndicator = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}

