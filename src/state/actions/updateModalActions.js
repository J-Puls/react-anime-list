export const openUpdateModal = (title) => {
    return {
        type: 'OPEN_UPDATE',
        payload: title
    }
}

export const closeUpdateModal = () => {
    return {
        type: 'CLOSE_UPDATE'
    }
}

