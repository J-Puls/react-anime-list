import React from "react";
// Redux
import { useDispatch, connect } from "react-redux";
import { closeInfoModal } from "state/actions";
// Bootstrap
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const InfoModal = props => {
  const title = props.title;
  const dispatch = useDispatch();
  let airing;
  props.title.airing ? (airing = "Yes") : (airing = "No");

  return (
    <Modal
      show={props.visible}
      onHide={() => dispatch(closeInfoModal())}
      size="large"
      backdrop="static"
      enforceFocus
    >
      <Modal.Header closeButton className="text-light">
        <Modal.Title>{title.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bkg-black" id="previewModalBody">
        <Row className="bkg-black mx-0">
          <Col xs="4" className="mx-auto">
            <img
              src={title.image_url}
              className="figure-img img-fluid rounded"
              alt={title.title + " thumbnail"}
            ></img>
          </Col>
          <Col className="container" xs="10">
            <p>
              <span className="lead text-danger font-weight-bolder">
                Title:{" "}
              </span>
              <span className="text-light">{title.title}</span>
            </p>
            <p>
              <span className="lead text-danger font-weight-bolder">
                Synopsis:
                <br />
              </span>
              <span>{title.synopsis}</span>
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
              <span>{title.episodes}</span>
            </p>
            <p>
              <span className="lead text-danger font-weight-bolder">
                Score:{" "}
              </span>
              <span>{title.score} / 10</span>
            </p>
            <p>
              <span className="lead text-danger font-weight-bolder">
                Rated:{" "}
              </span>
              <span>{title.rated}</span>
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
          href={title.url}
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
