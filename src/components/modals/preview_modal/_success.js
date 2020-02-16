import React from "react";
// Redux
import { useDispatch, connect } from "react-redux";
import { addTitle, nextTitle, prevTitle } from "state/actions";
// Bootstrap
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
// Custom
import { Rocket } from "components/loading_spinner";

const SuccessPreviewModal = props => {
  const title = props.title;
  const dispatch = useDispatch();
  const confirm = () => {
    dispatch(addTitle(props.token, props.title));
  };

  return (
    <div>
      <Modal.Header closeButton className="text-light">
        <Modal.Title>Search Results</Modal.Title>
      </Modal.Header>
      <Modal.Body id="previewModalBody" className="bkg-black">
        <Row className="mx-0 pb-2 justify-content-center overflow-auto">
          <Col xs="8" sm="4" className="d-flex p-0 w-100">
            {title.image_url === null && <Rocket />}
            {title.image_url !== null && (
              <Image
                className="p-sm-2 cover"
                src={title.image_url}
                rounded
                alt={title.title + " thumbnail"}
                fluid
              />
            )}
          </Col>
          <Col xs="12" sm="8">
            <div className="px-2 px-sm-0">
              <p className="lead text-danger font-weight-bolder">
                Title:
                <br></br>
                <span className="text-light">{title.title}</span>
              </p>
              <p>
                <span className="lead text-danger  font-weight-bolder">
                  Synopsis:
                  <br></br>
                </span>
                <span className="text-light">{title.synopsis}</span>
              </p>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="text-light">
        <Row className="w-100">
          <Col xs="4">
            <Button
              variant="outline-danger"
              className="w-100"
              onClick={() => dispatch(prevTitle())}
            >
              Prev
            </Button>
          </Col>
          <Col xs="4">
            <Button
              variant="danger"
              className="w-100"
              onClick={() => confirm()}
            >
              Save
            </Button>
          </Col>
          <Col xs="4">
            <Button
              variant="outline-danger"
              className="w-100"
              onClick={() => dispatch(nextTitle())}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    token: state.userCreds.session_token
  };
};

export default connect(mapStateToProps)(SuccessPreviewModal);
