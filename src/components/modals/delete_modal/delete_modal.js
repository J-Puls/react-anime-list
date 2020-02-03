import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { connect, useDispatch } from "react-redux";
import { closeDeleteModal, removeTitle } from "../../../state/actions";

const DeleteModal = props => {
  const dispatch = useDispatch();
  const remove = title => {
    dispatch(removeTitle(title.mal_id));
    dispatch(closeDeleteModal());
  };
  return (
    <Modal show={props.visible} centered>
      <Modal.Header className="bg-danger text-light">
        <Modal.Title>Delete Title</Modal.Title>
      </Modal.Header>
      <Modal.Body id="previewModalBody" />
      <Row>
        <Col xs="12">
          <Container>
            <p className="lead text-center">
              Are you sure you want to delete
              <br />
              <span className="font-weight-bold">
                {props.currentTitle.title}
              </span>
              ?
            </p>
          </Container>
        </Col>
      </Row>
      <Modal.Footer className="bg-dark text-light">
        <Row className="w-100">
          <Col xs="6">
            <Button
              variant="danger"
              className="w-100"
              onClick={() => remove(props.currentTitle)}
            >
              Yes
            </Button>
          </Col>
          <Col xs="6">
            <Button
              variant="light"
              className="w-100"
              onClick={() => dispatch(closeDeleteModal())}
            >
              No
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    visible: state.deleteModal.visibility,
    currentTitle: state.deleteModal.currentTitle
  };
};

export default connect(mapStateToProps)(DeleteModal);
