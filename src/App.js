import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addCashAction} from "./store/CashReducer";
import {addCustomerAction} from "./store/CustomerReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
  const [customerName, setCustomerName] = useState()
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  const handleAdd = () => dispatch(addCashAction(5))

  const handleAddCustomer = () => {
    dispatch(addCustomerAction(customerName))
  }
  return (
    <div>
      <div>
        <div>{cash}</div>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <input type="text" onChange={({target: {value}}) => setCustomerName(value)}/>
        <div>{customers}</div>
        <button onClick={handleAddCustomer}>Add Customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Add Customers</button>
      </div>
    </div>
  );
}

export default App;
