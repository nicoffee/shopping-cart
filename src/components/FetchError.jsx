import React from "react";
import PropTypes from "prop-types";

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not fetch goods. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

FetchError.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func
};

export default FetchError;
