import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect, useDispatch } from "react-redux";
import { search } from "../state/actions";
import { useSelector } from "react-redux";
import { openPreviewModal } from "../state/actions"

const SearchForm = (props) => {
  const dispatch = useDispatch();
  const titles = useSelector(state => state.titles);
  const find = async (e, titles) => {
    e.preventDefault();
    dispatch(search(titles));
    dispatch(openPreviewModal());
  };
  
  return (
    <Col
      xs="12"
      md="8"
      className="mx-auto bg-dark p-3 text-light rounded shadow"
    >
      <legend>Find New Title</legend>
      <Form id="searchForm" onSubmit={e => {find(e, titles)}}>
        <Form.Control
          as="input"
          id="title"
          size="lg"
          type="text"
          placeholder="search"
          required={true}
        ></Form.Control>
        <small id="titleHelp" className="form-text mb-2">
          Enter the title of the anime you wish to add.
        </small>
        <Button type="submit" >
          Find It
        </Button>
      </Form>
    </Col>
  );
};

const mapStateToProps = state => {
  return {
    titles: state.titles,
    searchResult: state.newTitle
  };
};

export default connect(mapStateToProps)(SearchForm);
