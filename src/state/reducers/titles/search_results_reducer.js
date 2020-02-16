// Default title, used to trigger "loading" context of PreviewModal 
// before API call is finished

// const defaultTitle = {
//   mal_id: null,
//   title: "Loading...",
//   score: null,
//   airing: null,
//   rated: null,
//   episodes: null,
//   synopsis: "Loading...",
//   image_url: null,
//   url: null
// };


const newTitleReducer = (state = {
  results: [],
  selectedResult: 0
}, action, root) => {
  let newState;
  switch (action.type) {
    case "FIND_FULFILLED":
      state.results = action.payload;
      return state;
    case "RESET_SEARCH_RESULTS":
      state = {
        results: [],
        selectedResult: 0
      };
      return state;
    case 'NEXT_TITLE':
      if (state.selectedResult < 4) {
        newState = {
          results: state.results,
          selectedResult: state.selectedResult + 1
        }
        state = newState;
      }
      return state;
    case 'PREV_TITLE':
      if (state.selectedResult > 0){
        newState = {
          results: state.results,
          selectedResult: state.selectedResult - 1
        }
        state = newState;
      } 
      return state;
    default:
      return state;
  }
};
export default newTitleReducer;