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
      <Modal.Header closeButton className="text-light">
        <Modal.Title>{props.title.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bkg-black" id="previewModalBody">
        <Row className="bkg-black mx-0">
          <Col xs="4" className="mx-auto">
            <img
              src={props.title.image_url}
              className="figure-img img-fluid rounded"
              alt={props.title.title + " thumbnail"}
            ></img>
          </Col>
          <Col className="container" xs="10">
            <p>
              <span className="lead text-danger font-weight-bolder">
                Title:{" "}
              </span>
              <span className="text-light">{props.title.title}</span>
            </p>
            <p>
              <span className="lead text-danger font-weight-bolder">
                Synopsis:
                <br />
              </span>
              <span>{props.title.synopsis}</span>
            </p>
            <p>
              <span className="lead text-danger font-weight-bolder">
                Airing:{" "}
              </span>
              <span>{airing}</span>
            </p>
            <p>
              <span className="lead text-danger font-weight-bolder">
                # of episodes:{" "}
              </span>
              <span>{props.title.episodes}</span>
            </p>
            <p>
              <span className="lead text-danger font-weight-bolder">
                Score:{" "}
              </span>
              <span>{props.title.score} / 10</span>
            </p>
            <p>
              <span className="lead text-danger font-weight-bolder">
                Rated:{" "}
              </span>
              <span>{props.title.rated}</span>
            </p>
            <small className="text-muted ">
              All data was retrieved from MyAnimeList.net via the Jikan API
            </small>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-danger"
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
