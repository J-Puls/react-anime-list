import React from "react";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";

export default class Obj extends React.Component {
    render() {
      return (
        <Col xs="6" sm="4" md="3" className="p-sm-3">
          <Figure>
            <Figure.Image
              rounded
              alt={this.props.title + " thumbnail"}
              src={this.props.image_url}
              className="display-img shadow"
            />
            <span className="lead text-white">{this.props.title}</span>
            <Figure.Caption className="text-light">
              {"Rating: " + this.props.score + " / 10"}
            </Figure.Caption>
            <Button
              block
              size="md"
              variant="outline-info"
              objid={this.props.objID}
              onClick={this.props.infoClick}
            >
              More Info
            </Button>
            <Button
              block
              size="md"
              variant="danger"
              objid={this.props.objID}
              onClick={this.props.deleteClick}
            >
              Remove
            </Button>
          </Figure>
        </Col>
      );
    }
  }
  