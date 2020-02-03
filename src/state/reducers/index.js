import titles from "../reducers/titleList";
import newTitle from "../reducers/newTitle";
import previewModal from "../reducers/previewModal";
import infoModal from "../reducers/infoModal";
import updateModal from "../reducers/updateModal";

// combineReducers alternative
export const allReducers = (state={}, action) => {
    return ({
        titles: titles(state.titles, action, state),
        newTitle: newTitle(state.newTitle, action, state),
        previewModal: previewModal(state.previewModal, action, state),
        infoModal: infoModal(state.infoModal, action, state),
        updateModal: updateModal(state.updateModal, action, state)
    });
}

export default allReducers;