import { trackPromise } from "react-promise-tracker";

export const uploadAvatar = async (token, data) => {
  const rawResponse = await trackPromise(
    fetch(
      "http://localhost:5000/react-anime-list/us-central1/api/user/image/",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({image: data})
      }
    )
  );
  const content = await rawResponse.json();
  return content;
};
