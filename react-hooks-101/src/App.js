import React, { useState } from "react";

const App = (props) => {
  // stateで管理
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setName(props.name);
    setPrice(props.price);
  };

  return (
    <React.Fragment>
      <p>
        現在の{name}は、{price}円です
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>

      {/* inputに入力した文字列を拾ってオンチェンジに渡すとsetNameが書き換わる */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
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
