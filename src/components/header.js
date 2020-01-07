import React from "react";
import Col from "react-bootstrap/Col";

export class Header extends React.Component {
    render() {
      return (
        <Col xs="12" className="mx-auto p-2 mt-5">
          <h1 className="display-4 text-center text-light mb-4">Anime List</h1>
        </Col>
      );
    }
  }