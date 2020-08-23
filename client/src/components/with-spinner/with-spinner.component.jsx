import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const withSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    console.log("otherProps", otherProps);
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default withSpinner;
