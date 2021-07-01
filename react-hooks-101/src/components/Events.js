import React from "react";
import Event from "./Event";

const Events = ({ state, dispatch }) => {
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
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}

          {/* ↑リファクタリングして別のファイルに移行　 */}
          {/* {state.map((event, index) => {
            const id = event.id;
            const handleClickDeleteButton = () => {
              dispatch({ type: "DELETE_EVENT", id });
            };
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleClickDeleteButton}
                  >
                    削除
                  </button>
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Events;
