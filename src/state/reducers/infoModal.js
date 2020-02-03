// Controls the state of the "More Info" modal

const infoModalReducer = (state={visibility:false, currentTitle:{}}, action, root) => {
    switch (action.type){
        case 'OPEN_INFO':
            state.currentTitle = action.payload;
            state.visibility = true;
            return state;
        case 'CLOSE_INFO':
            state.visibility = false;
            return state;
        default:
            return state;

    }
}
export default infoModalReducer;