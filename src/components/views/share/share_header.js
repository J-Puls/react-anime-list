import React from "react";
// Redux
import { connect, useDispatch } from "react-redux";
// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
// Custom icons
import rocket from "assets/rocket.svg";

const ShareHeader = props => {
  const dispatch = useDispatch();

  return (
    <Navbar variant="dark" id="navbar" expand="md">
      <Navbar.Brand className="slide-in-right h-100">
        <Image
          className="btn btn-link"
          onClick={() => dispatch(props.history.push("/"))}
          src={rocket}
          fluid
          className="p-2 my-1 h-75"
        />
        Anime Orbiter
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history
  };
};

export default connect(mapStateToProps)(ShareHeader);
