import {ADD_NOTIFY, REMOVE_NOTIFY} from './notificationsActionTypes.js';
import Create from './notificationsFactory';

export function addNotify(options = {}){
    return { 
        payload: Create(options),
        type: ADD_NOTIFY
    }
}

export function removeNotify(options ={}){
    return {
        payload: Create(options),
        type: REMOVE_NOTIFY
    }
}

