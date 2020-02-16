const shareTitlesReducer = (state = new Set(), action, root) => {
    let newState;
    switch (action.type) {
      case "GET_SHARE_TITLES_FULFILLED":
        newState = new Set(action.payload)
        state = newState;
        console.log(state)
        return state;
      default:
        return state;
    }
  };
  export default shareTitlesReducer;