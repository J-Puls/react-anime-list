// Controls the state current user credentials

const userCredsReducer = (state = {isLoggedIn: false}
  , action, root) => {
  let newState;
  switch (action.type) {
    case "LOGIN_FULFILLED":
      if (action.payload.token) {
        newState = {
          isLoggedIn: true,
          session_token: action.payload.token,
          username: action.payload.userCreds.username,
          email: action.payload.userCreds.email,
          image_url: action.payload.userCreds.imageUrl,
          signup_date: action.payload.userCreds.date_created,
        };
        if (action.payload.userCreds.location) newState.location = action.payload.userCreds.location;
        if (action.payload.userCreds.motto) newState.motto = action.payload.userCreds.motto;
        state = newState;
      } else {
        newState = {
          isLoggedIn: false
        }
        state = newState
      }
      return state;
    case "LOGOUT":
      newState = {
        isLoggedIn: false
      }
      state = newState;
      return state;
    case "SIGNUP_FULFILLED":
      if (action.payload.token) {
      newState = {
        isLoggedIn: true,
        session_token: action.payload.token,
        username: action.payload.userCreds.username,
        email: action.payload.userCreds.email,
        image_url: action.payload.userCreds.imageUrl,
        signup_date: action.payload.userCreds.date_created,

      };
      state = newState;
    } else{
      newState = {
        isLoggedIn: false
      }
      state = newState
    }
      return state;
    case 'MODIFY_CREDS_FULFILLED':
      newState = {
        isLoggedIn: true,
        session_token: state.session_token,
        username: state.username,
        email: state.email,
        image_url: state.image_url,
        signup_date: state.signup_date,

      }
      newState.location = document.querySelector('#updateLocation').value;
      newState.motto = document.querySelector('#updateMotto').value;
      state = newState;
      return state;
    case 'DELETE_ACCOUNT_FULFILLED':
      newState = {
        isLoggedIn: false
      }
      state = newState;
      return state;
    default:
      return state;
  }
};
export default userCredsReducer;