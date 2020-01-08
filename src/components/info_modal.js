import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export function InfoModal(props) {
    let airing = "";
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
          <p className="lead">Title: {props.currentTitle.title}</p>
              <p>
                <span className="lead">Synopsis:<br/></span>
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
              <small className="text-muted ">All information retreived from MyAnimeList.net via
              the Jikan API</small>
          </Col>
        </Row>
        <ModalFooter>
            <Button 
              variant="info"
              href={props.currentTitle.url}
              target="_black"
              rel="noopener"
              className="w-100"
              >
              Read more on MyAnimeList.net</Button>
             
        </ModalFooter>
      </Modal>
  )};