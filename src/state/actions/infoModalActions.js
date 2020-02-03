export const openInfoModal = (title) => {
    return {
        type: 'OPEN_INFO',
        payload: title
    }
}

export const closeInfoModal = () => {
    return {
        type: 'CLOSE_INFO'
    }
}