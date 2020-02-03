export const openDeleteModal = (title) => {
    return {
        type: 'OPEN_DELETE',
        payload: title
    }
}

export const closeDeleteModal = () => {
    return {
        type: 'CLOSE_DELETE'
    }
}