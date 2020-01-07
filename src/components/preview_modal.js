import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export function PreviewModal(props) {

    return (
        <Modal
          show={props.modalVisible}
          onHide={props.closeModal}
          currenttitle={props.currentTitle}
          >
          <ModalHeader closeButton  className="bg-secondary text-light">
            <ModalTitle>Is this correct?</ModalTitle>
          </ModalHeader>
          <ModalBody id="previewModalBody"/>
          <Row>
            <Col xs="4">
              <img 
                src={props.currentTitle.image_url}
                className="figure-img img-fluid rounded"
                alt={props.currentTitle.title + " thumbnail"}></img>
            </Col>
            <Col xs="8">
              <p className="lead">Title: {props.currentTitle.title}</p>
              <p>
                <span className="lead">Synopsis:
                  <br></br>
                </span>
                <span>{props.currentTitle.synopsis}</span>
              </p>
            </Col>
          </Row>
          <ModalFooter className="bg-secondary text-light">
            <Button
              variant="success" 
              onClick={props.confirmTitle}>
              Yep! :)
            </Button>
            <Button
              variant="danger" 
              onClick={props.closeModal}>
              Nope :(
            </Button>
          </ModalFooter>
        </Modal>
    );
  
};