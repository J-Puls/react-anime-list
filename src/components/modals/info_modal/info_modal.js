import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useDispatch, connect } from "react-redux";
import { closeInfoModal } from "../../../state/actions";

const InfoModal = props => {
  let airing;
  const dispatch = useDispatch();
  switch (props.title.airing) {
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
      show={props.visible}
      onHide={() => dispatch(closeInfoModal())}
      size="large"
      backdrop="static"
      enforceFocus
    >
      <Modal.Header closeButton className="bg-secondary text-light">
        <Modal.Title>{props.title.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body id="previewModalBody" />
      <Row>
        <Col xs="4" className="mx-auto">
          <img
            src={props.title.image_url}
            className="figure-img img-fluid rounded"
            alt={props.title.title + " thumbnail"}
          ></img>
        </Col>
        <Col className="container" xs="10">
          <p className="lead">Title: {props.title.title}</p>
          <p>
            <span className="lead">
              Synopsis:
              <br />
            </span>
            <span>{props.title.synopsis}</span>
          </p>
          <p>
            <span className="lead">Airing: </span>
            <span>{airing}</span>
          </p>
          <p>
            <span className="lead"># of episodes: </span>
            <span>{props.title.episodes}</span>
          </p>
          <p>
            <span className="lead">Score: </span>
            <span>{props.title.score} / 10</span>
          </p>
          <p>
            <span className="lead">Rated: </span>
            <span>{props.title.rated}</span>
          </p>
          <small className="text-muted ">
            All information retreived from MyAnimeList.net via the Jikan API
          </small>
        </Col>
      </Row>
      <Modal.Footer>
        <Button
          variant="info"
          href={props.title.url}
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

const mapStateToProps = state => {
  return {
    visible: state.infoModal.visibility,
    title: state.infoModal.currentTitle
  };
};

export default connect(mapStateToProps)(InfoModal);
