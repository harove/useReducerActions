import "./styles.css";
import { useReducer } from "react";
import Slider from "./Slider";

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    step: 1
  });

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, counter: state.counter + state.step };
      case "decrement":
        return { ...state, counter: state.counter - state.step };
      case "reset":
        return { ...state, counter: 0 };
      case "updateStep":
        return { ...state, step: action.step };
      default:
        return { ...state };
    }
  }

  const onChange = (value) => {
    dispatch({ type: "updateStep", step: value });
  };

  return (
    <div className="App">
      <h1>{state.counter}</h1>
      <input
        type="button"
        onClick={(e) => dispatch({ type: "increment" })}
        value="+"
      />
      <input
        type="button"
        onClick={(e) => dispatch({ type: "decrement" })}
        value="-"
      />
      <input
        type="button"
        onClick={(e) => dispatch({ type: "reset" })}
        value="reset"
      />
      <hr />
      <Slider onChange={onChange} />
    </div>
  );
}
