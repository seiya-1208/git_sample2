// action = {
//     type: 'CREATE_EVENT',
//     title: '2020年東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックが開催されます。つきましては、、、'
// }

// ## before（空の配列にイベントが渡ってきたらそのまま出力される）
// state = []
// ## after
// state = [
//     id: 1,
//     title: '2020年東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックが開催されます。つきましては、、、
// ]

// // ## before
// state = [
//   { id: 1, title: "タイトル", body: "ボディー" },
//   { id: 2, title: "タイトル", body: "ボディー" },
//   { id: 3, title: "タイトル", body: "ボディー" },
// ];

// // ## after （あらかじめ3つの要素がある場合、4つめが加わると）
// state = [
//   { id: 1, title: "タイトル", body: "ボディー" },
//   { id: 2, title: "タイトル", body: "ボディー" },
//   { id: 3, title: "タイトル", body: "ボディー" },
//   //   idのみ不確定。そのため、既存の最後にあるid要素に+1することで重複はなくなる
//   {
//     id: 4,
//     title: "2020年東京オリンピックのお知らせ",
//     body: "2020年に東京でオリンピックが開催されます。つきましては、、、",
//   },
// ];

const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = {
        title: action.title,
        body: action.body,
      };

      //   ##以下は三項演算子で書いている。本来はこのコードになっている
      //   const length = state.length;
      //   ## 新しく作成するイベントオブジェクトに設定するIDを求める
      //   let id;
      //   if (length === 0) {
      //       id = 1
      // } else {
      //     id = state[length - 1]. id + 1
      //   }

      const length = state.length;
      //   idを拾う。なにもない場合は[1]。そうでなければ、前の状態に+1した数字になるというのが1文でかける
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
      return state;
    case "DELETE_EVENT":
      return state;
    case "DELETE_ALL_EVENTS":
      return [];

    default:
      return state;
  }
};

export default events;
