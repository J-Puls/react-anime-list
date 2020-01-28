import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const InfoModal = props => {
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
      <Modal.Header closeButton className="bg-secondary text-light">
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
          <p className="lead">Title: {props.currentTitle.title}</p>
          <p>
            <span className="lead">
              Synopsis:
              <br />
            </span>
            <span>{props.currentTitle.synopsis}</span>
          </p>
          <p>
            <span className="lead">Airing: </span>
            <span>{airing}</span>
          </p>
          <p>
            <span className="lead"># of episodes: </span>
            <span>{props.currentTitle.episodes}</span>
          </p>
          <p>
            <span className="lead">Score: </span>
            <span>{props.currentTitle.score} / 10</span>
          </p>
          <p>
            <span className="lead">Rated: </span>
            <span>{props.currentTitle.rated}</span>
          </p>
          <small className="text-muted ">
            All information retreived from MyAnimeList.net via the Jikan API
          </small>
        </Col>
      </Row>
      <Modal.Footer>
        <Button
          variant="info"
          href={props.currentTitle.url}
          target="_blank"
          rel="noopener"
          className="w-100"
        >
          Read more on MyAnimeList.net
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
