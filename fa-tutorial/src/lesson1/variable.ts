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
