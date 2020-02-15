// Controls the state of the account delete modal

const accountDeleteModalReducer = (state={visibility:false}, action, root) => {
    switch (action.type){
        case 'OPEN_ACCOUNT_DELETE':
            state.visibility = true;
            return state;
        case 'CLOSE_ACCOUNT_DELETE':
            state.visibility = false;
            return state;
        default:
            return state;

    }
}
export default accountDeleteModalReducer;