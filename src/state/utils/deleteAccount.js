import { trackPromise } from "react-promise-tracker";

export const sendDeleteRequest = async (token) => {
  const rawResponse = await trackPromise(
    fetch(
      "https://us-central1-react-anime-list.cloudfunctions.net/api/user/delete-account/",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      }
    )
  );
  const content = await rawResponse.json();
  return content;
};
