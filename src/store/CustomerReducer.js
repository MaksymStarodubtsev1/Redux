
const defaultState = {
  customers: []
}

const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"
const ADD_CUSTOMER = "ADD_CUSTOMER"

export const customerReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_MANY_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      }
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [ ...state.customers, action.payload]
      }
    default:
      return state
  }
}
export const addFetchedCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})