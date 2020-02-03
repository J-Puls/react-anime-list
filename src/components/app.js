import React from "react";
import Container from "react-bootstrap/Container";
import TitlesDisplay from "./display_box/";
import Header from "./header";
import SearchForm from "./search_form";
import LoadingSpinner from "./loading_spinner";
import {PreviewModal, UpdateModal, InfoModal, DeleteModal} from "./modals";

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <SearchForm />
        <br />
        <TitlesDisplay />
      </Container>
      <PreviewModal />
      <InfoModal />
      <UpdateModal />
      <DeleteModal />
      <LoadingSpinner />
    </div>
  );
};
export default App;
