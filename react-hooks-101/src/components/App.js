import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "./Events";
import EventForm from "./EventForm";
import reducer from "../reducers";

const App = () => {
  // useReducerを使って状態（state）とdispatchを使うという処理を定義する
  const [state, dispatch] = useReducer(reducer, []);
  console.log(state, "in App.js");

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
