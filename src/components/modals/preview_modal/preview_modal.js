import React from "react";
import Modal from "react-bootstrap/Modal";
import { connect, useDispatch } from "react-redux";
import FailurePreviewModal from "./_failure";
import SuccessPreviewModal from "./_success";
import {closePreviewModal, resetSearchResults} from "../../../state/actions";

const PreviewModal = props => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(resetSearchResults());
    dispatch(closePreviewModal());
  }
  const title = props.titles[props.selectedTitle];
  return (
    <Modal
      show={props.visible}
      centered
      backdrop="static"
      enforceFocus
      onHide={() => close()}
    >
      {!title && <FailurePreviewModal />}
      {title && <SuccessPreviewModal title={title} />}
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    visible: state.previewModal,
    titles: state.newTitles.results,
    selectedTitle: state.newTitles.selectedResult
  };
};

export default connect(mapStateToProps)(PreviewModal);
