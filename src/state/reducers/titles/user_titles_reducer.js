import { getUpdatedInfo, appendTitleToDB, removeTitleFromDB, saveChangesToDB } from "../../utils";
import { trackPromise } from "react-promise-tracker";

const titlesListReducer = (state = new Set(), action, root) => {
  let newState;
  switch (action.type) {
    case "LOGIN_FULFILLED":
      newState = new Set(state);
      const userTitles = action.payload.titles;
      if (userTitles !== undefined){
        userTitles.forEach(title => {
          newState.add(title);
        });
      }
      state = newState;
      return state;

    case "CONFIRM":
      newState = new Set(state);
      // Check if title already exists in user's list before adding
      let titleExists = false;
      for (let x of newState) {
        if (x.mal_id === action.payload.newTitle.mal_id) {
          titleExists = true;
        }
      }
      // If title exists, alert the user, but don't add the duplicate
      if (titleExists === false) {
        (async () =>
          await appendTitleToDB(
            action.payload.token,
            action.payload.newTitle
          ))();
        let currentList = Array.from(newState);
        const newList = [...currentList, action.payload.newTitle ];
        newState = new Set(newList);
        state = newState;
      } else {
        alert("This title is already in your list.");
      }
      return state;

    case "REMOVE":
      newState = new Set(state);
      
      const idToRemove = action.payload.idToRemove;
      (async () =>
          await removeTitleFromDB(
            action.payload.token,
            idToRemove
          ))();
        // Find the selected object in the list and delete it
      for (const x of newState) {
        if (x.mal_id === idToRemove) {
          newState.delete(x);
        }
      }
      state = newState;
      return state;

    case "MODIFY":
      newState = new Set(state);
      // Retrieve data from modal inputs and update selected title with
      // this new data
      const updated = getUpdatedInfo();
      const id = action.payload.id;
      updated.mal_id = id;
      (async () =>
          await trackPromise(saveChangesToDB(
            action.payload.token,
            updated
          )))();

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
      case "LOGOUT":
        newState = new Set();
        state = newState;
        return state;
    default:
      return state;
  }
};

export default titlesListReducer;
