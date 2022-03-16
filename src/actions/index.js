import * as types from './../constanst/actionTypes';

export const selectFood=(food)=>{
    console.log('You clicked a food with name = ${food.name}');
    return {
        type:types.SELECT_FOOD,
        payload: food
    };
}
