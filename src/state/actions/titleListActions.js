export const addTitle = (newTitle) => {
    return {
        type: 'CONFIRM',
        payload: newTitle
    }
}

export const removeTitle = (id) => {
    return {
        type: 'REMOVE',
        payload: id
    }
}

export const saveTitleChanges = (id) => {
    return {
        type: 'MODIFY',
        payload: id
    }
}