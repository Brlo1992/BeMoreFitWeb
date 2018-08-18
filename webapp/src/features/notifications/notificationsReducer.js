import { ADD_NOTIFY, REMOVE_NOTIFY } from './notificationsActionTypes.js'
import Guid from 'guid'
const notificationsReducer = (state = [], action) => {
    const {payload, type} = action;
    
    switch (type) {
        case ADD_NOTIFY:
            return [payload, ...state];
        case REMOVE_NOTIFY:
            var guid = new Guid(payload.value);
            return state.filter(notify => guid.equals(notify.id) === false);
        default:
            return state;
    }
}
export default notificationsReducer;