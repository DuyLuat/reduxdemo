import foodReducer from "./food-reducer";
import activefoodreducer from "./activefoodreducer";
import { combineReducers } from "redux";

const myReducer = combineReducers({
    foods: foodReducer,
    activeFood: activefoodreducer
});

export default myReducer;