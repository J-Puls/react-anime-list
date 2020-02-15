import React from "react";
import { connect } from "react-redux";
import UserAuthentication from "./authentication/UserAuthentication";
import LandingView from "./landing/LandingView";

const UnauthenticatedView = props => {
  return (
    <div>
      {props.homepageState === "LANDING" && <LandingView />}
      {props.homepageState === "AUTH" && <UserAuthentication />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    homepageState: state.homepageState
  };
};

export default connect(mapStateToProps)(UnauthenticatedView);
