import { findTitle } from "../utils"

export const search = (titles) => {
    const query = document.getElementById('title').value;
    return {
        type: 'FIND',
        payload: findTitle(query, titles).then(data => {
            return data
        })
    }
}

export const resetNewTitle = () => {
    return {
        type: 'RESET_NEW_TITLE'
    }
}
