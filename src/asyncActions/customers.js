import {addFetchedCustomersAction} from "../store/CustomerReducer";

export const fetchCustomers = () => {
  return (callBack) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => callBack(addFetchedCustomersAction([json.name])))
  }
}