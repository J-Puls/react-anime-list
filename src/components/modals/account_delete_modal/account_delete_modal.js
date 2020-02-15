import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { connect, useDispatch } from "react-redux";
import { closeAccountDeleteModal, deleteAccount, closeUserModal } from "../../../state/actions";

const AccountDeleteModal = props => {
  const dispatch = useDispatch();
  const confirm = () => {
    dispatch(closeAccountDeleteModal());
    dispatch(closeUserModal());
    dispatch(deleteAccount(props.token));
    props.history.push('/');

  };
  return (
    <Modal show={props.visible}>
      <Modal.Header className="text-light">
        <Modal.Title>Confirm Account Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body id="previewModalBody bkg-black"/>
      <Row className="bkg-black mx-0">
        <Col xs="12">
          <Container>
            <p className="lead text-center">
              Are you sure you want to delete your account?
              <br />
              <span className="font-weight-bold text-danger">
                This cannot be undone!
              </span>
            </p>
          </Container>
        </Col>
      </Row>
      <Modal.Footer>
        <Row className="w-100">
          <Col xs="6">
            <Button
              variant="outline-danger"
              className="w-100"
              onClick={() => confirm()}
            >
              Delete
            </Button>
          </Col>
          <Col xs="6">
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => dispatch(closeAccountDeleteModal())}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    visible: state.accountDeleteModal.visibility,
    token: state.userCreds.session_token
  };
};

export default connect(mapStateToProps)(AccountDeleteModal);
