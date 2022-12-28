import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./CashReducer";
import {customerReducer} from "./CustomerReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  customers: customerReducer,
  cash: cashReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))