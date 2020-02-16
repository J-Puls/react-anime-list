import { trackPromise } from "react-promise-tracker";
import { getAuthorizedUserTitles } from "../titles/getAuthorizedUserTitles"; 
import { fetchUserInfo } from "./fetchUserInfo";



export const login = async (email, password) => {
    const rawResponse = await trackPromise(fetch('https://us-central1-react-anime-list.cloudfunctions.net/api/login', {
        method: 'POST',
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    }));
    const loginResponse = await trackPromise(rawResponse.json());
    if (loginResponse.error) {
        return {error: loginResponse.error}
    }
    else if (loginResponse.token){
        const titles = await trackPromise(getAuthorizedUserTitles(loginResponse.token));
        const userCreds = await trackPromise(fetchUserInfo(loginResponse.token));
        return {
            token: loginResponse.token,
            titles,
            userCreds
        }
    }
};