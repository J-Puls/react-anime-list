import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export function UpdateModal(props) {
    let airing;
    if (props.currentTitle.airing){
      airing = "Yes";
    } else {
      airing = "No";
    }
  return (
      <Modal
        show={props.modalVisible}
        onHide={props.closeModal}
        size="large"
        backdrop="static"
        enforceFocus
        >
        
            <ModalHeader closeButton  className="bg-secondary text-light">
            <ModalTitle>{props.currentTitle.title}</ModalTitle>
            </ModalHeader>
            <ModalBody id="previewModalBody"/>
            <Row>
            <Col xs="4"className="mx-auto">
                <img 
                src={props.currentTitle.image_url}
                className="figure-img img-fluid rounded"
                alt={props.currentTitle.title + " thumbnail"}></img>
            </Col>
            <Col className="container" xs="10">
            <p className="lead">Title: <input type="text"
                                            defaultValue={props.currentTitle.title}
                                            id="updateTitle"
                                            />
            </p>
                <p>
                    <span className="lead">Synopsis:<br/></span>
                    <textarea
                            cols="40"
                            rows="10"
                            defaultValue={props.currentTitle.synopsis}
                            id="updateSynopsis">
                    </textarea>
                </p>
                <p>
                    <span className="lead">Airing: </span>
                    <span> {airing}</span>
                </p>
                <p>
                    <span className="lead"># of episodes: </span>
                    <input type="number"
                            defaultValue={props.currentTitle.episodes}
                            id="updateEpisodes"
                            />
                </p>
                <p>
                    <span className="lead">Score: </span>
                    <input type="number"
                        defaultValue={props.currentTitle.score}
                        min={1}
                        max={10}
                        step={.5}
                        id="updateScore"
                        />
                    <span> / 10</span>
                </p>
                <p>
                    <span className="lead">Rated: </span>
                    <input type="text"
                            defaultValue={props.currentTitle.rated}
                            id="updateRated"
                    />
                </p>
                
            </Col>
            </Row>
            <ModalFooter>
                <Button 
                    className="w-100"
                    onClick={props.saveChanges}
                >
                Save Changes</Button>
            </ModalFooter>
      </Modal>
  )};