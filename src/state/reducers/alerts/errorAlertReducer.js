// Controls the state of the alert

const errorAlertReducer = (state = {
    visibility: false,
    message: "",
    variant: ""
}, action, root) => {
    switch (action.type) {
        case 'LOGIN_FULFILLED':
            if (!action.payload.token) {
                state.heading = "Error!";
                state.message = action.payload.error;
                state.variant = "danger";
                state.visibility = true;
            }
            return state;
        case 'SIGNUP_FULFILLED':
            if (!action.payload.token) {
                state.heading = "Error!";
                state.message = action.payload.error;
                state.variant = "danger";
                state.visibility = true;
            }
            return state;
        case 'DELETE_ACCOUNT_FULFILLED':
            state.heading = "Sorry to see you go!";
            state.message = "Your information has been permanently deleted.";
            state.variant = "success";
            state.visibility = true;
            return state;
        case 'SHOW_ALERT':
            state.visibility = true;
            return state;
        case 'HIDE_ALERT':
            state.message = "";
            state.variant = "";
            state.visibility = false;
            return state;
        default:
            return state;

    }
}
export default errorAlertReducer;