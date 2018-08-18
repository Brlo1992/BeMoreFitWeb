import {SET_MEAL_BY_TYPE} from './DietActionTypes.js';

export function setMealByType(mealType, meals){
    return { 
        type: SET_MEAL_BY_TYPE,
        mealType,
        meals
    }
}