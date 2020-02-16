import { login, sendAccountChanges, uploadAvatar } from "../../utils";

export const authenticateAndLogIn = (email, password) => {
    return {
        type: 'LOGIN',
        payload: login(email, password)
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const changeAccountDetails = (token) => {
    return {
        type: 'MODIFY_CREDS',
        payload: sendAccountChanges(token)
    }
}

export const changeAvatar = (token, data) => {
    return {
        type: 'CHANGE_AVATAR',
        payload: uploadAvatar(token, data)
    }
}
