import {SELECT} from '../actionTypes.js';
import {BACK} from '../actionTypes.js';

export function select(selected) {
    return {
        type: SELECT,
        selected
    }
};

export function back(){
    return {
        type: BACK
    }
}

