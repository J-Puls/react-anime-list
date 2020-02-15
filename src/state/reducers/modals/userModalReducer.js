// Controls visibility and context of UpdateModal
const userModalReducer = (state={visibility:false, currentTitle:{}}, action, root) => {
    let newState;
    switch (action.type){
        case 'OPEN_USER':
            newState = {visibility: true}
            state = newState;
            return state;
        case 'CLOSE_USER':
            newState = {visibility: false}
            state = newState;
            return state;
        default:
            return state;

    }
}
export default userModalReducer;