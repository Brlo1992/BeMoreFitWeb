import {LOGIN, LOGOUT} from './LoginActionTypes.js'
import CookieHelper from '../../utils/CookieHelper.js'
const loginReducer = (state = {
    token: CookieHelper.getCookie("authToken")
}, action) => {
    switch (action.type) {
        case LOGIN:
            CookieHelper.saveCookie("authToken", action.token);
            return { ...state, token: action.token}
        case LOGOUT: 
            return { ...state, token: undefined}
        default:
            return state;
    }
}

export default loginReducer;