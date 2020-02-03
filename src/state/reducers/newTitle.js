// Default title, used to trigger "loading" context of PreviewModal 
// before API call is finished

const defaultTitle = {
  mal_id: null,
  title: "Loading...",
  score: null,
  airing: null,
  rated: null,
  episodes: null,
  synopsis: "Loading...",
  image_url: null,
  url: null
};


const newTitleReducer = (state = defaultTitle, action, root) => {
  switch (action.type) {
    case "FIND_FULFILLED":
        state = action.payload
      return state;
    case "RESET_NEW_TITLE":
      // Resets the PreviewModal context so it does not display previously
      // searched title while making API call
      state = defaultTitle;
      return state;
    default:
      return state;
  }
};
export default newTitleReducer;
