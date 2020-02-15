import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { connect, useDispatch } from "react-redux";
import rocket from "../../../assets/rocket.svg";
import { openUserModal, logout } from "../../../state/actions";
import logoutIcon from "../../../assets/logout.svg";

const AuthenticatedHeader = props => {
  const dispatch = useDispatch();
  const handleLogoutClick = e => {
    e.preventDefault();
    dispatch(logout());
    props.history.push('/');
  };

  return (
    <Navbar variant="dark" id="navbar" expand="md">
      <Navbar.Brand className="slide-in-right">
        <Image src={rocket} fluid className="p-2" />
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
            >Deorbit&nbsp;
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