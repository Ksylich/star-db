import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator/";
import {
  PlanetsPage,
  PeoplePage,
  StarshipsPage,
  SecretPage,
  LoginPage
} from "../pages";
import SwapiServiceContext from "../swapi-service-context";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SwapiSerwice from "../../services/swapi-service";

import "./app.css";
import { StarshipsDetails } from "../sw-components";

class App extends Component {
  swapiSerwice = new SwapiSerwice();

  state = {
    hasError: false,
    isLoggedIn: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  mainPagetext = () => {
    return <h2>Welcome to the StarDB</h2>;
  };

  renderStarshipDetails = ({ match }) => {
    const { id } = match.params;
    return <StarshipsDetails itemId={id} />;
  };

  renderSecretPage = () => {
    const { isLoggedIn } = this.state;
    return <SecretPage isLoggedIn={isLoggedIn} />;
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  renderLoginPage = () => {
    const { isLoggedIn } = this.state;
    return <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />;
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceContext.Provider value={this.swapiSerwice}>
        <Router>
          <div>
            <Header />
            <RandomPlanet />

            <Switch>
              <Route path="/" render={this.mainPagetext} exact />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route
                path="/starships/:id"
                render={this.renderStarshipDetails}
              />
              <Route path="/secret" render={this.renderSecretPage} />
              <Route path="/login" render={this.renderLoginPage} />

              <Route
                render={() => {
                  return <h3>Page not faund</h3>;
                }}
              />
            </Switch>
          </div>
        </Router>
      </SwapiServiceContext.Provider>
    );
  }
}

export default App;
