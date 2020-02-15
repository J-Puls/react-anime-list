import { trackPromise } from "react-promise-tracker";

export const appendTitleToDB = async (token, newTitle) => {
    const rawResponse = await trackPromise(fetch('https://us-central1-react-anime-list.cloudfunctions.net/api/add-title', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(newTitle)
    }));
    const content = await rawResponse.json();
    return content
};
