import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { addTitle, closePreviewModal, resetNewTitle } from '../../../state/actions';
import { Spinner } from '../../loading_spinner';

const SuccessPreviewModal = props => {
    const dispatch = useDispatch();
    const confirm = () => {
        dispatch(addTitle(props.title));
        dispatch(closePreviewModal());
        dispatch(resetNewTitle());
    }
    const cancel = () => {
        dispatch(closePreviewModal());
        dispatch(resetNewTitle());
    }
    const title = props.title;
  return (
    <div>
      <Modal.Header className="bg-dark text-light">
        <Modal.Title>Is this correct?</Modal.Title>
      </Modal.Header>
      <Modal.Body id="previewModalBody" />
      <Row>
        <Col xs="12" sm="4" className="d-flex justify-content-center">
          {title.image_url === null && <Spinner />}
          {title.image_url !== null && (
            <Image
              className="p-sm-2"
              src={title.image_url}
              rounded
              alt={title.title + " thumbnail"}
              fluid
            />
          )}
        </Col>
        <Col xs="12" sm="8">
          <div className="px-2 px-sm-0">
            <p className="lead">Title: {title.title}</p>
            <p>
              <span className="lead">
                Synopsis:
                <br></br>
              </span>
              <span>{title.synopsis}</span>
            </p>
          </div>
        </Col>
      </Row>
      <Modal.Footer className="bg-dark text-light">
        <Row className="w-100">
          <Col xs="6">
            <Button
              variant="success"
              className="w-100"
              onClick={() => confirm()}
            >
              Yep! :)
            </Button>
          </Col>
          <Col xs="6">
            <Button
              variant="danger"
              className="w-100"
              onClick={() => cancel()}
            >
              Nope :(
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </div>
  );
}

export default SuccessPreviewModal;
