import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export class SearchForm extends React.Component {
    render() {
      return (
        <Col
          xs
          md="8"
          className="mx-auto bg-secondary p-3 text-light rounded shadow"
        >
          <legend>Find New Title</legend>
          <Form id="searchForm">
            <FormControl
              id="title"
              size="lg"
              type="text"
              placeholder="search"
            ></FormControl>
            <small id="titleHelp" className="form-text mb-2">
              Enter the title of the anime you wish to add.
            </small>
            <Button type="submit" onClick={this.props.findTitle}>
              Find It
            </Button>
          </Form>
        </Col>
      );
    }
  }