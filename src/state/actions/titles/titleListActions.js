import { getAuthorizedUserTitles } from "../../utils";

export const getUserTitles = (token) => {
    return {
        type: 'GET_USER_TITLES',
        payload: getAuthorizedUserTitles(token)
    }
}

export const addTitle = (token, newTitle) => {
    return {
        type: 'CONFIRM',
        payload: {token, newTitle}
    }
}

export const removeTitle = (token, idToRemove) => {
    return {
        type: 'REMOVE',
        payload: {token, idToRemove}
    }
}

export const saveTitleChanges = (token, id) => {
    return {
        type: 'MODIFY',
        payload: {token, id}
    }
}
