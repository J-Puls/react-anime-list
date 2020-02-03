// Controls the state of the delete modal

const deleteModalReducer = (state={visibility:false, currentTitle:{}}, action, root) => {
    switch (action.type){
        case 'OPEN_DELETE':
            state.currentTitle = action.payload;
            state.visibility = true;
            return state;
        case 'CLOSE_DELETE':
            state.visibility = false;
            state.currentTitle = {}
            return state;
        default:
            return state;

    }
}
export default deleteModalReducer;