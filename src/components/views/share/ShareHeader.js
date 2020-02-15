import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { connect, useDispatch } from "react-redux";
import rocket from "../../../assets/rocket.svg";

const ShareHeader = props => {
  const dispatch = useDispatch();

  return (
    <Navbar variant="dark" id="navbar" expand="md">
      <Navbar.Brand className="slide-in-right">
        <Image
          className="btn btn-link"
          onClick={() => dispatch(props.history.push("/"))}
          src={rocket}
          fluid
          className="p-2"
        />
        Anime Orbiter
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
  };
};

export default connect(mapStateToProps)(ShareHeader);
