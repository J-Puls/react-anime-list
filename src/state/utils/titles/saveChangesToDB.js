import { trackPromise } from "react-promise-tracker";

export const saveChangesToDB = async (token, title) => {
  const rawResponse = await trackPromise(
    fetch(
      "https://us-central1-react-anime-list.cloudfunctions.net/api/list/save-user-changes/",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(title)
      }
    )
  );
  const content = await rawResponse.json();
  return content;
};
