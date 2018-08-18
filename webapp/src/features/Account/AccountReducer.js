import { SAMPLE } from './AccountActionTypes.js'

const AccountReducer = (state = { }, action) => {
    switch (action.type) {
        case SAMPLE:
            return state;
        default:
            return state;
    }
}
export default AccountReducer;