import { trackPromise } from "react-promise-tracker";
import {fetchUserInfo} from "./fetchUserInfo";
import { getAuthorizedUserTitles} from "./getAuthorizedUserTitles";

export const signup = async (data) => {
    const rawResponse = await trackPromise(fetch('https://us-central1-react-anime-list.cloudfunctions.net/api/user/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }));
    const signupResponse = await rawResponse.json()
    console.log(signupResponse.error)
    if (signupResponse.error) {
        return {error: signupResponse.error}
    }
    else if (signupResponse.token){
        const token = signupResponse.token;
        const titles = await trackPromise(getAuthorizedUserTitles(token));
        const userCreds = await trackPromise(fetchUserInfo(token));
        return {
            token,
            titles,
            userCreds
        }
    }
}