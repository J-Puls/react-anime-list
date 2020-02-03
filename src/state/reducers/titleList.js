import titles from "../builtin_titles";
import { getUpdated } from "../utils";

const titlesListReducer = (state = new Set(titles), action, root) => {
  const newState = new Set(state);

  switch (action.type) {
    case "CONFIRM":
      // Check if title already exists in user's list before adding
      let titleExists = false;
      for (let x of newState) {
        if (x.mal_id === action.payload.mal_id) {
          titleExists = true;
        }
      }
      // If title exists, alert the user, but don't add the duplicate
      if (titleExists === false) {
        newState.add(action.payload);
        state = newState;
      } else {
        alert("This title is already in your list.");
      }
      return state;
    case "REMOVE":
      // Find the selected object in the list and delete it
      const chosenId = action.payload;
      for (const x of newState) {
        if (x.mal_id === chosenId) {
          newState.delete(x);
        }
      }
      state = newState;
      return state;
    case "MODIFY":
      // Retrieve data from modal inputs and update selected title with
      // this new data
      const updated = getUpdated();
      const id = action.payload;
      for (const x of newState) {
        if (x.mal_id === id) {
          x.title = updated.title;
          x.synopsis = updated.synopsis;
          x.airing = updated.airing;
          x.episodes = updated.episodes;
          x.score = updated.score;
          x.rated = updated.rated;
        }
      }
      state = newState;
      return state;
    default:
      return state;
  }
};

export default titlesListReducer;
