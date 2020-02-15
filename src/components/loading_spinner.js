import React from "react";
import rocket from "../assets/rocket-animation.svg";
import { usePromiseTracker } from "react-promise-tracker";

// if fetch call is initiated, loading spinner is rendered
const LoadingSpinner = props => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div className="spinner-overlay">
        <Rocket />
      </div>
    )
  );
};

export const Rocket = () => {
  return <img src={rocket} alt="loading..." className="loading-spinner" />;
};

export default LoadingSpinner;
