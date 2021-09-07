import { combineReducers } from "redux";
import productreducer from "./productreducer";
import userreducer from './userreducer'
import { cartReducer } from "./cardreducer";
export const reducer = combineReducers({

    product: productreducer,
    
})