import {createStore} from 'redux';
import rootReducer from './Reducers.js';

export default(initialState) => {
    return createStore(rootReducer, initialState)
}