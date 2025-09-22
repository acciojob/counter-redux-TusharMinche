
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./../redux/actions";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{count}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  )
}

export default App
