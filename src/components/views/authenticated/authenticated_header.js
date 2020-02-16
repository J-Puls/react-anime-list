import React from "react";
// Redux
import { connect, useDispatch } from "react-redux";
import { openUserModal, logout } from "state/actions";
// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
// Custom Icons
import rocket from "assets/rocket.svg";
import logoutIcon from "assets/logout.svg";
// Styling
import "./AuthenticatedHeader.css";

const AuthenticatedHeader = props => {
  const dispatch = useDispatch();
  const handleLogoutClick = e => {
    e.preventDefault();
    dispatch(logout());
    props.history.push("/");
  };

  return (
    <Navbar variant="dark" id="navbar" expand="md">
      <Navbar.Brand className="slide-in-right h-100">
        <Image src={rocket} fluid className="p-2 my-1 h-75" />
        Anime Orbiter
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto slide-in-left">
          <Nav.Item className="ml-auto">
            <Button
              variant="outline-secondary"
              className="border-0"
              onClick={() => dispatch(openUserModal())}
            >
              <span className="text-light">Account</span>
              <Image
                src={props.userImage}
                className="user-nav-img ml-1"
                fluid
                rounded
              />
            </Button>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Button
              className="ml-1 logoutBtn"
              variant="outline-danger"
              onClick={e => handleLogoutClick(e)}
            >
              Deorbit&nbsp;
              <Image src={logoutIcon} />
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    isLoggedIn: state.userCreds.isLoggedIn,
    username: state.userCreds.username,
    userImage: state.userCreds.image_url
  };
};

export default connect(mapStateToProps)(AuthenticatedHeader);
