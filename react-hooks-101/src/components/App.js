// このコンポーネントはstateとdispatchというデータを作成している

import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "./Events";
import EventForm from "./EventForm";
import AppContext from "../contexts/AppContext";

import reducer from "../reducers";

// console.log({ AppContext });
const App = () => {
  // useReducerを使って状態（state）とdispatchを使うという処理を定義する
  const [state, dispatch] = useReducer(reducer, []);
  // console.log(state, "in App.js");

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        {/* {state}は[配列]を、{dispatch}は関数を渡している
        ⇒　useContextでリファクタリング。providerでvalueを渡すことができる */}
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
