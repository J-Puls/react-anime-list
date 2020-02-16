import React from "react";
// Redux
import { useDispatch, connect } from "react-redux";
import {
  closeUserModal,
  changeAccountDetails,
  openAccountDeleteModal
} from "state/actions";
// Bootstrap
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
// Util
import { formatDate } from "./formatDate";

const UserModal = props => {
  const dispatch = useDispatch();
  const handleDelete = async e => {
    e.preventDefault();
    dispatch(openAccountDeleteModal());
  };
  const save = async () => {
    await dispatch(changeAccountDetails(props.token));
    dispatch(closeUserModal());
  };
  const signupDate = formatDate(props.signupDate);

  return (
    <Modal
      show={props.visible}
      onHide={() => dispatch(closeUserModal())}
      size="large"
      backdrop="static"
      enforceFocus
    >
      <Modal.Header className="text-light">
        <Modal.Title>Account Details</Modal.Title>
      </Modal.Header>
      <Modal.Body id="previewModalBody bkg-black">
        <Row className="mb-3 mx-0 bkg-black">
          <Col xs="4">
            <Image
              src={props.imageURL}
              className="figure-img img-fluid rounded"
              alt={props.username + " thumbnail"}
            />
          </Col>
          <Col xs="8">
            <p className="lead text-light">
              <span className="font-weight-bolder text-danger">
                Titles In List:{" "}
              </span>
              {props.collectionSize}
            </p>
            <p className="lead text-light">
              <span className="font-weight-bolder text-danger">
                Join Date:{" "}
              </span>
              {signupDate}
            </p>
          </Col>
          <Col className="container" xs="10">
            <Form.Label className="lead font-weight-bolder text-danger">
              Username
            </Form.Label>
            <p className="lead">{props.username}</p>
            <Form.Label className="lead font-weight-bolder text-danger">
              Location
            </Form.Label>
            <InputGroup>
              <Form.Control
                id="updateLocation"
                defaultValue={props.location}
                aria-label="motto"
              ></Form.Control>
            </InputGroup>
            <Form.Label className="lead font-weight-bolder text-danger">
              Motto
            </Form.Label>
            <InputGroup>
              <Form.Control
                id="updateMotto"
                defaultValue={props.motto}
                aria-label="motto"
              ></Form.Control>
            </InputGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row className="w-100">
          <Col xs="6">
            <Button className="w-100" variant="danger" onClick={() => save()}>
              Save
            </Button>
          </Col>
          <Col xs="6">
            <Button
              className="w-100"
              variant="dark"
              onClick={() => dispatch(closeUserModal())}
            >
              Close
            </Button>
          </Col>
          {props.username !== "testuser" && (
            <Col xs="12" className="text-center pt-4">
              <a
                href="/"
                className="text-danger"
                onClick={e => handleDelete(e)}
              >
                Delete Account
              </a>
            </Col>
          )}
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    visible: state.userModal.visibility,
    username: state.userCreds.username,
    email: state.userCreds.email,
    imageURL: state.userCreds.image_url,
    motto: state.userCreds.motto,
    location: state.userCreds.location,
    token: state.userCreds.session_token,
    collectionSize: state.userTitles.size,
    signupDate: state.userCreds.signup_date
  };
};

export default connect(mapStateToProps)(UserModal);
