import { trackPromise } from "react-promise-tracker";

export const sendAccountChanges = async (token) => {
    const accountChanges = {};
    accountChanges.location = document.querySelector('#updateLocation').value;
    accountChanges.motto = document.querySelector('#updateMotto').value;
  const rawResponse = await trackPromise(
    fetch(
      "https://us-central1-react-anime-list.cloudfunctions.net/api/user/add-details/",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(accountChanges)
      }
    )
  );
  const content = await rawResponse.json();
  return content;
};
