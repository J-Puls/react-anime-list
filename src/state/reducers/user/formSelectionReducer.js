// Controls the state of the authentication from

const formSelectionReducer = (state='login', action, root) => {
    switch (action.type){
        case 'SET_AUTH_FORM_LOGIN':
            state = 'login';
            return state;
        case 'SET_AUTH_FORM_SIGNUP':
            state = 'signup'
            return state;
        default:
            return state;

    }
}
export default formSelectionReducer;