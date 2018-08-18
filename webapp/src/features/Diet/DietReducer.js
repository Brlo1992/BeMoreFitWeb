import { SET_MEAL_BY_TYPE } from './DietActionTypes.js';

const DietReducer = (state = {
    smallMeals: [],
    breakfastMeals: [],
    dinnerMeals: [],
    supperMeals: []

}, action) => {
    switch (action.type) {
        case SET_MEAL_BY_TYPE:
            switch (action.mealType) {
                case "small":
                    return { ...state, smallMeals: action.meals }
                case "breakfast":
                    return { ...state, breakfastMeals: action.meals }
                case "dinner":
                    return { ...state, dinnerMeals: action.meals }
                case "supper":
                    return { ...state, supperMeals: action.meals }
                default:
                    return state;
            }
        default:
            return state;
    }
}
export default DietReducer;