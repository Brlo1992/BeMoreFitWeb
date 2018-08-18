import { SET_ACCESS } from './HomeActionTypes.js'
import ArrayHelper from '../../utils/ArrayHelper';

const HomeReducer = (state = {
    selected: 'none',
    items: [
        { title: 'Dieta', enabled: false, id: 'diet', description: 'test test test test test test test test test test test test test test test ' },
        { title: 'Trening', enabled: false, id: 'training', description: 'test test test test test test test test test test test test test test test ' },
        { title: 'Wskazowki', enabled: true, id: 'tips', description: 'test test test test test test test test test test test test test test test ' },
        { title: 'Postępy', enabled: true, id: 'progress', description: 'test test test test test test test test test test test test test test test ' },
        { title: 'Trener', enabled: false, id: 'coach', description: 'test test test test test test test test test test test test test test test ' },
        { title: 'Dietetyk', enabled: false, id: 'dietecian', description: 'test test test test test test test test test test test test test test test ' }
    ]
}, action) => {
    switch (action.type) {
        case SET_ACCESS:
            let arrayHelper = new ArrayHelper();
            return { ...state, items: arrayHelper.copyArray(action.changedItems) }
        default:
            return state;
    }
}
export default HomeReducer;