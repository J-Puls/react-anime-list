import React from "react";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Obj = props => {
  return (
    <Col xs="6" sm="4" md="3" className="p-sm-3">
      <Figure>
        <Figure.Image
          rounded
          alt={props.title + " thumbnail"}
          src={props.image_url}
          className="display-img shadow w-100"
        />
        <span className="lead text-white">{props.title}</span>

        <Figure.Caption className="text-light">
          {"Rating: " + props.score + " / 10"}
        </Figure.Caption>
        <Row className="w-100 m-0">
          <Col xs="4" className="p-1 m-0">
            <Button
              className="p-0 pt-1"
              block
              size="md"
              variant="info"
              objid={props.objID}
              onClick={props.infoClick}
            >
              <i className="material-icons" objid={props.objID}>
                info
              </i>
            </Button>
          </Col>
          <Col xs="4" className="p-1 m-0">
            <Button
              className="p-0 pt-1"
              block
              size="md"
              variant="success"
              objid={props.objID}
              onClick={props.updateClick}
            >
              <i className="material-icons" objid={props.objID}>
                edit
              </i>
            </Button>
          </Col>
          <Col xs="4" className="p-1 m-0">
            <Button
              className="p-0 pt-1"
              block
              size="md"
              variant="danger"
              objid={props.objID}
              onClick={props.deleteClick}
            >
              <i className="material-icons" objid={props.objID}>
                delete
              </i>
            </Button>
          </Col>
        </Row>
      </Figure>
    </Col>
  );
};
export default Obj;
