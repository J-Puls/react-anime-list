import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const UpdateModal = props => {
  let airing;

  switch (props.currentTitle.airing) {
    case true:
      airing = "Yes";
      break;
    case false:
      airing = "No";
      break;
    default:
      break;
  }

  return (
    <Modal
      show={props.modalVisible}
      onHide={props.closeModal}
      size="large"
      backdrop="static"
      enforceFocus
    >
      <Modal.Header className="bg-secondary text-light">
        <Modal.Title>{props.currentTitle.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body id="previewModalBody" />
      <Row>
        <Col xs="4" className="mx-auto">
          <img
            src={props.currentTitle.image_url}
            className="figure-img img-fluid rounded"
            alt={props.currentTitle.title + " thumbnail"}
          ></img>
        </Col>
        <Col className="container" xs="10">
          <p className="lead">
            Title:{" "}
            <input
              type="text"
              defaultValue={props.currentTitle.title}
              id="updateTitle"
            />
          </p>
          <p>
            <span className="lead">
              Synopsis:
              <br />
            </span>
            <textarea
              cols="40"
              rows="10"
              defaultValue={props.currentTitle.synopsis}
              id="updateSynopsis"
            ></textarea>
          </p>
          <p>
            <span className="lead">Airing: </span>
            <span> {airing}</span>
          </p>
          <p>
            <span className="lead"># of episodes: </span>
            <input
              type="number"
              defaultValue={props.currentTitle.episodes}
              id="updateEpisodes"
            />
          </p>
          <p>
            <span className="lead">Score: </span>
            <input
              type="number"
              defaultValue={props.currentTitle.score}
              min={1}
              max={10}
              step={0.5}
              id="updateScore"
            />
            <span> / 10</span>
          </p>
          <p>
            <span className="lead">Rated: </span>
            <input
              type="text"
              defaultValue={props.currentTitle.rated}
              id="updateRated"
            />
          </p>
        </Col>
      </Row>
      <Modal.Footer>
        <Row className="w-100">
          <Col xs="6">
            <Button
              className="w-100"
              variant="success"
              onClick={() => props.saveChanges(props.objid)}
            >
              Save Changes
            </Button>
          </Col>
          <Col xs="6">
            <Button
              className="w-100"
              variant="outline-secondary"
              onClick={props.closeModal}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
