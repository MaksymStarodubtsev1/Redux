import {combineReducers, createStore} from "redux";
import {cashReducer} from "./CashReducer";
import {customerReducer} from "./CustomerReducer";

const rootReducer = combineReducers({
  customers: customerReducer,
  cash: cashReducer
})

export const store = createStore(rootReducer)