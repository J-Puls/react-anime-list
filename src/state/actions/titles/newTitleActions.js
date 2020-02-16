import { findTitle } from "../../utils"

export const search = (titles) => {
    const query = document.getElementById('title').value;
    return {
        type: 'FIND',
        payload: findTitle(query, titles).then(data => {
            return data
        })
    }
}

export const nextTitle = () => {
    return {
        type: 'NEXT_TITLE'
    }
}

export const prevTitle = () => {
    return {
        type: 'PREV_TITLE'
    }
}

export const resetSearchResults = () => {
    return {
        type: 'RESET_SEARCH_RESULTS'
    }
}
