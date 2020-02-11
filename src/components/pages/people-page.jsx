import React, { useCallback } from "react";

import { PersonDetails, PersonList } from "../sw-components/";
import Row from "../row";
import ErrorBoundry from "../error-boundry/";

import { useHistory, useParams } from "react-router-dom";

const PeoplePage = () => {
  const { id } = useParams();
  const history = useHistory();
  const onItemSelected = useCallback(
    itenId => {
      history.push(itenId);
    },
    [history]
  );

  const itemList = <PersonList onItemSelected={onItemSelected} />;

  const personDetails = (
    <ErrorBoundry>
      <PersonDetails itemId={id} />
    </ErrorBoundry>
  );

  return <Row left={itemList} right={personDetails} />;
};

export default PeoplePage;
