import React, { useState } from "react";

const App = (props) => {
  // オブジェクトはそのまま渡すことが可能
  const [state, setState] = useState(props);
  const { name, price } = state;

  return (
    <React.Fragment>
      <p>
        現在の{name}は、{price}円です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>

      {/* inputに入力された文字列を拾ってオンチェンジに渡す→setNameが書き換わる */}
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </React.Fragment>
  );
};

// 初期値を定義（こちらでも可）
App.defaultProps = {
  name: "",
  price: 1000,
};

// 初期値を定義;
// const initialStates = {
//   name: "",
//   price: 1000,
// };
export default App;
