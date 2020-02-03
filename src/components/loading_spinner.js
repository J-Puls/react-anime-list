import React from "react";
import spinner from "../assets/Eclipse-0.6s-100px.svg";
import { usePromiseTracker } from "react-promise-tracker";

// if fetch call is initiated, loading spinner is rendered
const LoadingSpinner = props => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="spinner-overlay">
        <Spinner />
      </div>
    )
  );
};

export const Spinner = () => {
  return <img src={spinner} alt="loading..." className="loading-spinner" />;
};

export default LoadingSpinner;
