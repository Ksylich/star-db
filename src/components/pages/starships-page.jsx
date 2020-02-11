import React, { useCallback } from "react";

import { StarshipsList } from "../sw-components/";

import { useHistory } from "react-router-dom";

const StarshipsPage = () => {

  const history = useHistory();

  const onItemSelected = useCallback(
    itemId => {
      console.log('itemId', itemId);
      history.push(itemId);
    },
    [history]
  );

  return <StarshipsList onItemSelected={onItemSelected} />;
};

export default StarshipsPage;
