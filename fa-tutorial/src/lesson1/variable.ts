/**
 * 宣言構文(const/let)
 * 
 * [重要] まず、constで必ず定義
 * → 変更の可能性がないものを定義することによって、コードの複雑さを減らす
 */
// REF: https://www.webdevqa.jp.net/ja/typescript/typescript%E3%81%A7%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%97%E3%81%AE%E5%A4%89%E6%95%B0-%27name%27%E3%82%92%E5%86%8D%E5%AE%A3%E8%A8%80%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%9B%E3%82%93/835321354/
const myname = "taro";

let mode = "line";
// 変数の型定義
let animalType: string;
// 型を指定した場合、「変数 'animalType' は割り当てられる前に使用されています」とエラーが表示されるので初期化必須
animalType = "";

if (mode === "line") {
  animalType = "bear";
} else if (mode === "twitter") {
  animalType = "bird";
}
console.log(animalType);


/**
 * 変数の型定義
 */
// 「代入時に値から型推論できる」場合は、自動で設定される。
let title: string = "タイトル";
// 代入なしで型を指定しないと、any型として扱う
let mail;
// 明示的にanyを指定することもできる
let email: any;

/**
 * 弱い型定義
 * → PHPと同じ
 */
// union type
let birthYear: number | string;
birthYear = 1000;
birthYear = "hoge";
// nullは定義していないのでエラーになる
// birthYear = null;

// 特定の値のみを、型として許可することもできる！
let ramen: "味噌" | "醤油";
// 型 '"豚骨"' を型 '"味噌" | "醤油"' に割り当てることはできません。
// ramen = "豚骨";
let likeNumber: 1 | 3 | 5;
// 型 '2' を型 '1 | 3 | 5' に割り当てることはできません。
// likeNumber = 2;

// 同様に、型と値も混ぜ合わせることができる
let nengo: number | "昭和" | "平成" | "令和"
nengo = "昭和";

/**
 * 変数の巻き上げ(hoisting)
 * REF: https://analogic.jp/hoisting/
 */
function oldFunc(): void {
  // 変数 'v' は割り当てられる前に使用されています。
  // undefined

  // console.log(`巻き上げテスト${v}`);
  // var v: string = "バリュー";
}
oldFunc();
function letFunc(): void {
  // ブロック スコープの変数 'v' が、宣言の前に使用されています。
  // error

  // console.log(`巻き上げテスト${v}`);
  // let v: string = "巻き上げ";
}
letFunc();

/**
 * 変数のスコープ
 */
// varの問題点は、どこからでもアクセスできてしまうこと
for (var i = 0; i < 10; i++) {
}
console.log(i); // 10
for (let index = 0; index < 10; index++) {
}
// 名前 'index' が見つかりません。
// console.log(index);

function code(): void {
  {
    const store = "店舗";
    // ここでのみ有効
    console.log(store);
  }
  const storeName = "店舗名";
}
code();