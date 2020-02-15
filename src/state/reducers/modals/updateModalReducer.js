// Controls visibility and context of UpdateModal
const updateModalReducer = (state={visibility:false, currentTitle:{}}, action, root) => {
    switch (action.type){
        case 'OPEN_UPDATE':
            const newState = {visibility: true, currentTitle: action.payload}
            state = newState;
            return state;
        case 'CLOSE_UPDATE':
            state.visibility = false;
            return state;
        default:
            return state;

    }
}
export default updateModalReducer;