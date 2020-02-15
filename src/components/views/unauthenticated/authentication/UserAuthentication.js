import React from "react";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import LoginForm from "./login_form";
import SignupForm from "./signup_form";


const UserAuthentication = props => {
  return (
    <Col xs="12" md="8" className="mx-auto text-light mt-5 fade-in">
      <div className="px-sm-5 py-3">
        {props.authForm === "login" && <LoginForm history={props.history}/>}
        {props.authForm === "signup" && <SignupForm history={props.history}/>}
        
      </div>
    </Col>
    
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    authForm: state.formSelection
  };
};

export default connect(mapStateToProps)(UserAuthentication);
