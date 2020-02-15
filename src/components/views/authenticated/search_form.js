import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { connect, useDispatch } from "react-redux";
import { search } from "../../../state/actions";
import { useSelector } from "react-redux";
import { openPreviewModal } from "../../../state/actions";
import { trackPromise } from "react-promise-tracker";

const SearchForm = props => {
  const dispatch = useDispatch();
  const titles = useSelector(state => state.titles);
  const find = async (e, titles) => {
    e.preventDefault();
    await trackPromise(dispatch(search(titles)));
    dispatch(openPreviewModal());
  };

  return (
    <Col xs="12" md="8" className="mx-auto p-3 text-light mb-2 fade-in">

      <Form
        id="searchForm"
        onSubmit={e => {
          find(e, titles);
        }}
      >
        <InputGroup className="mb-3">
        
        <input
            type="text"
            id="title"
            className="search-input auth-input w-75"
            size="lg"
            required
            placeholder="search"
          ></input>
          <InputGroup.Append className="w-25">
            <Button type="submit" variant="danger" className="w-100 font-weight-bolder">Find It</Button>
          </InputGroup.Append>
        </InputGroup>
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
