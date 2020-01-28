import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";

const UpdateModal = props => {

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
      <Row className="mb-3">
        <Col xs="4" className="mx-auto">
          <img
            src={props.currentTitle.image_url}
            className="figure-img img-fluid rounded"
            alt={props.currentTitle.title + " thumbnail"}
          ></img>
        </Col>
        <Col className="container" xs="10">
          <FormLabel className="lead">Title</FormLabel>
          <InputGroup>
            <FormControl
              id="updateTitle"
              defaultValue={props.currentTitle.title}
              aria-label="title"
            ></FormControl>
          </InputGroup>

          <FormLabel className="lead">Synopsis</FormLabel>
          <InputGroup>
            <FormControl
              as="textarea"
              rows="5"
              id="updateSynopsis"
              defaultValue={props.currentTitle.synopsis}
              aria-label="synopsis"
            ></FormControl>
          </InputGroup>
          
          <Row>
            <Col xs="6">
            <FormLabel className="lead">Airing</FormLabel>
          <InputGroup>
            <InputGroup.Checkbox
              defaultChecked={props.currentTitle.airing}
              aria-label="Checkbox for following text input"
              id="updateAiring"
            />
          </InputGroup>
            </Col>
            <Col xs="6">
              <FormLabel className="lead">Episodes</FormLabel>
              <InputGroup>
                <FormControl
                  id="updateEpisodes"
                  type="number"
                  defaultValue={props.currentTitle.episodes}
                  aria-label="episodes"
                ></FormControl>
              </InputGroup>
            </Col>
            <Col xs="6">
              <FormLabel className="lead">Score</FormLabel>
              <InputGroup>
                <FormControl
                  id="updateScore"
                  type="number"
                  min={1}
                  max={10}
                  step={0.5}
                  defaultValue={props.currentTitle.score}
                  aria-label="score"
                ></FormControl>
              </InputGroup>
            </Col>
            <Col xs="6">
              <FormLabel className="lead">Rating</FormLabel>
              <InputGroup>
                <FormControl
                  id="updateRated"
                  as="select"
                  defaultValue={props.currentTitle.rated}
                  aria-label="rating"
                >
                  <option value="G">G</option>
                  <option value="PG">PG</option>
                  <option value="PG-13">PG-13</option>
                  <option value="R">R</option>
                  <option value="R+">R+</option>
                </FormControl>
              </InputGroup>
            </Col>
          </Row>
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
              Save
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
