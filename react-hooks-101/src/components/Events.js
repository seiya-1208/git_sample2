import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContext";

// propで渡されるものは関数コンポーネントでは引数として渡される
const Events = ({ state, dispatch }) => {
  const value = useContext(AppContext);
  return (
    <React.Fragment>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* stateは各イベントを保持する。mapメソッドで拾ってイベントに関する情報を伝播している */}
          {/* dispatchはEventsコンポーネントでは直接的に状態を変える actionは存在しないがDELETEのために垂れ流している*/}
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}

          {/* ↑リファクタリングして別のファイルに移行　 */}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Events;
