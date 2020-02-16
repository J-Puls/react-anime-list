// Controls the state current user credentials

const userSignupReducer = (state = {signupSent: false}, action, root) => {
    let newState;
    switch (action.type) {
      case "SIGNUP_FULFILLED":
        newState = {signupSent: true};
        state = newState;
        return state;
      default:
        return state;
    }
  };
  
  export default userSignupReducer;
  