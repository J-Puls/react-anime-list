import { trackPromise } from "react-promise-tracker";

export const removeTitleFromDB = async (token, idToRemove) => {
  const rawResponse = await trackPromise(
    fetch(
      "https://us-central1-react-anime-list.cloudfunctions.net/api/list/remove-title-by-id/",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({idToRemove})
      }
    )
  );
  const content = await rawResponse.json();
  return content;
};
