import React from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import FailurePreviewModal from "./_failure";
import SuccessPreviewModal from "./_success";

const PreviewModal = props => {
  return (
    <Modal
      show={props.visible}
      onHide={props.closeModal}
      title={props.title}
      centered
    >
      {props.title === undefined && <FailurePreviewModal />}
      {props.title !== undefined && <SuccessPreviewModal title={props.title} />}
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    visible: state.previewModal,
    title: state.newTitle
  };
};

export default connect(mapStateToProps)(PreviewModal);
