import React from "react";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Obj extends React.Component {
    render() {
      return (
        <Col xs="6" sm="4" md="3"  className="p-sm-3">
          <Figure className="p-3 shadow-sm rounded">
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
            <Row>
              <Col xs="4" className="p-1 m-0">
                <Button
                  className="p-0 pt-1"
                  block
                  size="md"
                  variant="info"
                  objid={this.props.objID}
                  onClick={this.props.infoClick}
                >
                <i className="material-icons">info</i>
              </Button>
              </Col>
              <Col xs="4" className="p-1 m-0">
                <Button
                    className="p-0 pt-1"
                    block
                    size="md"
                    variant="success"
                    objid={this.props.objID}
                    onClick={this.props.updateClick}
                  >
                  <i className="material-icons">edit</i>
                </Button>
              </Col>
              <Col xs="4" className="p-1 m-0">
                <Button
                  className="p-0 pt-1"
                  block
                  size="md"
                  variant="danger"
                  objid={this.props.objID}
                  onClick={this.props.deleteClick}
                >
                  <i className="material-icons">delete</i>
              </Button>
              </Col>
            </Row>
          </Figure>
        </Col>
      );
    }
  }
  