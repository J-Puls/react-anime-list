import React from "react";
// Redux
import { useDispatch, connect } from "react-redux";
import { closeUpdateModal, saveTitleChanges } from "state/actions";
// Bootstrap
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";

const UpdateModal = props => {
  const title = props.title;
  const dispatch = useDispatch();
  const save = async () => {
    await dispatch(saveTitleChanges(props.token, props.title.mal_id));
    dispatch(closeUpdateModal());
  };
  return (
    <Modal
      show={props.visible}
      onHide={() => dispatch(closeUpdateModal())}
      size="large"
      backdrop="static"
      enforceFocus
    >
      <Modal.Header className="text-light">
        <Modal.Title>{title.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bkg-black" id="previewModalBody">
        <Row className="mb-3 mx-0 bkg-black">
          <Col className="container" xs="10">
            <Form>
              <FormLabel className="lead text-danger font-weight-bolder">
                Title
              </FormLabel>
              <InputGroup>
                <FormControl
                  id="updateTitle"
                  defaultValue={title.title}
                  aria-label="title"
                ></FormControl>
              </InputGroup>

              <FormLabel className="lead text-danger font-weight-bolder">
                Synopsis
              </FormLabel>
              <InputGroup>
                <FormControl
                  as="textarea"
                  rows="5"
                  id="updateSynopsis"
                  defaultValue={title.synopsis}
                  aria-label="synopsis"
                ></FormControl>
              </InputGroup>

              <Row>
                <Col xs="6">
                  <FormLabel className="lead text-danger font-weight-bolder">
                    Airing
                  </FormLabel>

                  <Form.Check
                    type="switch"
                    defaultChecked={title.airing}
                    id="updateAiring"
                    label=""
                  />
                </Col>
                <Col xs="6">
                  <FormLabel className="lead text-danger font-weight-bolder">
                    Episodes
                  </FormLabel>
                  <InputGroup>
                    <FormControl
                      id="updateEpisodes"
                      type="number"
                      defaultValue={title.episodes}
                      aria-label="episodes"
                    ></FormControl>
                  </InputGroup>
                </Col>
                <Col xs="6">
                  <FormLabel className="lead text-danger font-weight-bolder">
                    Score
                  </FormLabel>
                  <InputGroup>
                    <FormControl
                      id="updateScore"
                      type="number"
                      min={1}
                      max={10}
                      step={0.5}
                      defaultValue={title.score}
                      aria-label="score"
                    ></FormControl>
                  </InputGroup>
                </Col>
                <Col xs="6">
                  <FormLabel className="lead text-danger font-weight-bolder">
                    Rating
                  </FormLabel>
                  <InputGroup>
                    <FormControl
                      id="updateRated"
                      as="select"
                      defaultValue={title.rated}
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
            </Form>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row className="w-100">
          <Col xs="6">
            <Button className="w-100" variant="danger" onClick={() => save()}>
              Save
            </Button>
          </Col>
          <Col xs="6">
            <Button
              className="w-100"
              variant="outline-secondary"
              onClick={() => dispatch(closeUpdateModal())}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    visible: state.updateModal.visibility,
    title: state.updateModal.currentTitle,
    token: state.userCreds.session_token
  };
};

export default connect(mapStateToProps)(UpdateModal);
