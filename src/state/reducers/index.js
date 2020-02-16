import userTitles from "./titles/user_titles_reducer";
import searchResults from "./titles/search_results_reducer";
import previewModal from "./modals/previewModalReducer";
import infoModal from "./modals/infoModalReducer";
import updateModal from "./modals/updateModalReducer";
import deleteModal from "./modals/deleteModalReducer";
import userModal from "./modals/userModalReducer";
import accountDeleteModal from "./modals/accountDeleteModalReducer";
import formSelection from "./user/formSelectionReducer";
import userCreds from "./user/userCredsReducer"
import errorAlert from "./alerts/errorAlertReducer";
import shareTitles from "./titles/share_titles_reducer";

// combineReducers alternative
export const allReducers = (state={}, action) => {
    return ({
        userTitles: userTitles(state.userTitles, action, state),
        searchResults: searchResults(state.searchResults, action, state),
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