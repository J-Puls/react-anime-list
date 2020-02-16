import React from "react";
import { connect } from "react-redux";
import UserAuthentication from "./authentication/user_authentication";
import LandingView from "./landing/landing_view";

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
