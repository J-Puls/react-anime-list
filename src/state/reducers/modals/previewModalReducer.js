// Controls visibility of PreviewModal
const previewModalReducer = (state=false, action, root) => {
    switch (action.type){
        case 'OPEN_PREVIEW':
            state = true;
            return state;
        case 'CLOSE_PREVIEW':
            // Clear the search box on closing the modal
            document.querySelector('#title').value = '';
            state = false;
            return state;
        default:
            return state;

    }
}
export default previewModalReducer;