import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const handleAdd = () => dispatch({type: "ADD_CASH", payload: 5})
  return (
    <>
      <div>{cash}</div>
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default App;
