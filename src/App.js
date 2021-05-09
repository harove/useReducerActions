import "./styles.css";
import { useReducer } from "react";

export default function App() {
  const [counter, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <input type="button" onClick={(e) => dispatch("increment")} value="+" />
      <input type="button" onClick={(e) => dispatch("decrement")} value="-" />
      <input
        type="button"
        onClick={(e) => dispatch("decrement")}
        value="reset"
      />
    </div>
  );
}
