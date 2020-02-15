import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { connect, useDispatch } from "react-redux";
import { setAuthFormToLogin, authenticateAndSignUp, showAlert } from "../../../../state/actions";
import signupInputAnimation from "./signupInputAnimation";

const SignupForm = props => {
  const dispatch = useDispatch();
  const signup = e => {
    e.preventDefault();
    const data = {
      username: document.querySelector("#signup-username").value,
      email: document.querySelector("#signup-email").value,
      password: document.querySelector("#signup-password").value,
      confirmPassword: document.querySelector("#signup-confirm-password").value
    };

    dispatch(authenticateAndSignUp(data)).then(response => {
      if (response.action.payload.token) {
        props.history.push(`/user/${response.action.payload.userCreds.username}`)
      } else {
        dispatch(showAlert())
      }
    });
  };
  
  useEffect(() => signupInputAnimation(), [])

  return (
    <Form id="signupForm" onSubmit={e => signup(e)}>
      <Row className="justify-content-center">
        <Col xs="12" className="pb-3">
          <legend className="text-center h1">Sign Up</legend>
          <input
            type="text"
            id="signup-username"
            className="auth-input auth-signup-input"
            required
            placeholder="username"
            
          ></input>
          <div id="signup-username-underline"></div>
          <br />
          <input
            type="email"
            id="signup-email"
            className="auth-input auth-signup-input"
            required
            placeholder="email"
          ></input>
          <div id="signup-email-underline"></div>
          <br />
          <input
            type="password"
            id="signup-password"
            className="auth-input auth-signup-input"
            required
            placeholder="password"
          ></input>
          <div id="signup-password-underline"></div>
          <br />
          <input
            type="password"
            id="signup-confirm-password"
            className="auth-input auth-signup-input"
            required
            placeholder="confirm password"
          ></input>
          <div id="signup-confirm-password-underline"></div>
        </Col>
        <Col xs="12" sm="6" className="text-center">
          <Button
            type="submit"
            variant="danger"
            size="lg"
            className="w-100 mb-2"
          >
            Sign Up
          </Button>
          <small>
            Already have an account?{" "}
            <Button
              variant="link"
              size="sm"
              className="py-0"
              onClick={() => dispatch(setAuthFormToLogin())}
            >
              Sign In
            </Button>
          </small>
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
export default connect(mapStateToProps)(SignupForm);
