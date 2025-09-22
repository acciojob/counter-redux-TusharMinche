import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from ".././redux/actions";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{count}</h1>
      <div>
        <button>
          <span onClick={() => dispatch(increment())}>increment</span>
          <span onClick={() => dispatch(decrement())}>decrement</span>
        </button>
      </div>
    </div>
  );
}

export default App;
