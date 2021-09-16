import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spainner.style";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherprops }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherprops} />
    );
  };

export default WithSpinner;
