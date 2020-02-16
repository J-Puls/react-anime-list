import { getTitlesByUsername } from "../../utils";

export const getShareTitles = (username) => {
    return {
        type: 'GET_SHARE_TITLES',
        payload: getTitlesByUsername(username)
    }
}