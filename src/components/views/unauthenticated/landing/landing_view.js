import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import logo from "./assets/no-bkg.svg";
import { useDispatch } from "react-redux";
import { setAuthFormToLogin } from "state/actions";

const LandingView = props => {
  const dispatch = useDispatch();
  const goToAuth = () => {
    dispatch(setAuthFormToLogin())
    props.history.push("/authentication")
  }
  return (
    <Col>
      <Row className="justify-content-center mt-5 mt-sm-0">
        <Col
          xs="12"
          md="10"
          className="mx-auto text-light fade-in text-center mt-5 pt-5 mt-sm-0"
        >
          <Image src={logo} fluid className="w-100" />
        </Col>
        <Col xs="12" className="mx-auto text-light fade-in text-center">
          <Button
            variant="link"
            size="lg"
            onClick={() => goToAuth()}
            className="w-100 text-danger font-weight-bolder"
          >
            Log In / Sign Up
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default LandingView;
