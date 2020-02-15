import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { connect, useDispatch } from "react-redux";
import { setAuthFormToSignup, authenticateAndLogIn, showAlert } from "../../../../state/actions";
import Image from "react-bootstrap/Image";
import rocketLanding from "../../../../assets/rocket-landing.svg";
import rocketLanded from "../../../../assets/rocket-landed.svg";
import loginInputAnimation from "./loginInputAnimation";

const LoginForm = props => {
  const dispatch = useDispatch();
  const login = e => {
    e.preventDefault();
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    dispatch(authenticateAndLogIn(email, password)).then(response => {
      if (response.action.payload.token) {
        props.history.push(`/user/${response.action.payload.userCreds.username}`)
      } else {
        dispatch(showAlert())
      }
    });
    
  };
  useEffect(() => loginInputAnimation(), [])

  return (
    <Form id="loginForm" onSubmit={e => login(e)}>
      <Row className="justify-content-center">
        <Col xs="12" className="pb-3" id="authBox">
          <legend className="text-center h1">Sign In</legend>
            <input
              type="email"
              id="login-email"
              className="auth-input auth-login-input"
              required
              placeholder="email"
              
            ></input>
            <div id="login-email-underline"></div>

          <br />
          <div id="login-password-container">
            <input
              type="password"
              id="login-password"
              className="auth-input auth-login-input"
              required
              placeholder="password"
            ></input>
            <div id="login-password-underline"></div>
          </div>
        </Col>
        <Col xs="12" sm="6" className="text-center">
          <Button
            type="submit"
            variant="danger"
            size="lg"
            className="w-100 mb-2"
          >
            Blast Off
          </Button>
          <small>
            Need an account?{" "}
            <Button
              variant="link"
              size="sm"
              className="py-0"
              onClick={() => dispatch(setAuthFormToSignup())}
            >
              Sign Up
            </Button>
          </small>
        </Col>

        <Col xs="12">
          <Image
            className="w-25 mx-auto rocket-landing mt-3"
            src={rocketLanding}
          />
          <Image
            className="w-25 mx-auto rocket-landed mt-3"
            src={rocketLanded}
          />
        </Col>
      </Row>
    </Form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    isLoggedIn: state.userCreds.isLoggedIn,
    username: state.userCreds.username
  };
};
export default connect(mapStateToProps)(LoginForm);
