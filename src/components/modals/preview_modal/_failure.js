import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import {  closePreviewModal } from '../../../state/actions';

const FailurePreviewModal = props => {
    const dispatch = useDispatch();
  return (
    <div>
      <Modal.Header className="bg-danger text-light">
        <Modal.Title>Title Not Found</Modal.Title>
      </Modal.Header>
      <Modal.Body id="previewModalBody" />
      <Row className="mx-0">
        <Col xs="12">
          <Container>
              <p className="lead text-center text-light">We couldn't find anything for that.<br/>Please try a different search term.</p>
          </Container>
        </Col>
      </Row>
      <Modal.Footer className="text-light">
        <Row className="w-100">
          <Col xs="12">
            <Button
              variant="danger"
              className="w-100"
              onClick={() => dispatch(closePreviewModal())}
            >
              Okay
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </div>
  );
}

export default FailurePreviewModal;
