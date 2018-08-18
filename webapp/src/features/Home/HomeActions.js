import {SET_ACCESS} from './HomeActionTypes.js';

export function setAccess(changedItems){
    return { 
        type: SET_ACCESS, 
        changedItems
    }
}