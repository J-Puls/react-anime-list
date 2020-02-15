import titles from "./titleListReducer";
import newTitles from "./newTitleReducer";
import previewModal from "./modals/previewModalReducer";
import infoModal from "./modals/infoModalReducer";
import updateModal from "./modals/updateModalReducer";
import deleteModal from "./modals/deleteModalReducer";
import userModal from "./modals/userModalReducer";
import accountDeleteModal from "./modals/accountDeleteModalReducer";
import formSelection from "./formSelectionReducer";
import userCreds from "./userCredsReducer"
import errorAlert from "./alerts/errorAlertReducer";
import shareTitles from "./shareTitlesReducer";

// combineReducers alternative
export const allReducers = (state={}, action) => {
    return ({
        titles: titles(state.titles, action, state),
        newTitles: newTitles(state.newTitles, action, state),
        previewModal: previewModal(state.previewModal, action, state),
        infoModal: infoModal(state.infoModal, action, state),
        updateModal: updateModal(state.updateModal, action, state),
        deleteModal: deleteModal(state.deleteModal, action, state),
        accountDeleteModal: accountDeleteModal(state.accountDeleteModal, action, state),
        userModal: userModal(state.userModal, action, state),
        formSelection: formSelection(state.formSelection, action, state),
        userCreds: userCreds(state.userCreds, action, state),
        errorAlert: errorAlert(state.errorAlert, action, state),
        shareTitles: shareTitles(state.shareTitles, action, state)
    });
}

export default allReducers;