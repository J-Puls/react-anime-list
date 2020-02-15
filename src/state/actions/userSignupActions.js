import {signup, sendDeleteRequest} from "../utils"

export const authenticateAndSignUp = (data) => {
    return {
        type: 'SIGNUP',
        payload: signup(data)
    }
}

export const deleteAccount = (token) => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: sendDeleteRequest(token)
    }
}