import {LOGIN} from './LoginActionTypes.js';
import {LOGOUT} from './LoginActionTypes.js';

export function login(token){
    return { 
        type: LOGIN,
        token
    }
}

export function logout(){
    return {
        type: LOGOUT
    }
}