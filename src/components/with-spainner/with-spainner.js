import React from "react";

import Spinner from "../spinner/spinner";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherprops }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherprops} />;
  };

export default WithSpinner;
