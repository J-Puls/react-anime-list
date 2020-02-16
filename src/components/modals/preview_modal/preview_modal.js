import React from "react";
// Redux
import { closePreviewModal, resetSearchResults } from "state/actions";
import { connect, useDispatch } from "react-redux";
// Bootstrap
import Modal from "react-bootstrap/Modal";
// Custom
import FailurePreviewModal from "./_failure";
import SuccessPreviewModal from "./_success";

const PreviewModal = props => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(resetSearchResults());
    dispatch(closePreviewModal());
  };
  const title = props.results[props.selectedTitle];
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
    results: state.searchResults.results,
    selectedTitle: state.searchResults.selectedResult
  };
};

export default connect(mapStateToProps)(PreviewModal);
