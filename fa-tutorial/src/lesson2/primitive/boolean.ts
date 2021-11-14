
/**
 * booleanリテラル
 * → true/falseを持つデータ型
 */
console.log(true);
console.log(false);

// 変数の型名はboolean
const flg = true;
// データ型キャスト -> String/Numberキャストは知らなかった
console.log(flg.toString()); // 'true'
console.log(String(flg)); // 'true'
console.log(Number(flg)); // 1

// 他タイプからbooleanにキャストする方法
const notEmpty: boolean = Boolean("test string");
// 文字列(true)同士の比較結果をBooleanで取る
const flagStr: string = 'true';
const castFlag: boolean = flagStr === 'true';
// 反転について
const str: string = 'test';
const isEmpty: boolean = !str;
console.log(str, isEmpty);

// ド・モルガンの法則

// CASE1: "false && false(ff)"は、"どちらかがtrueじゃない時"に通る
// !(P || Q) == !P && !Q

// CASE2: "どちらからtrueになるとき(tf/ft/ff)"は、両方ともtrueじゃない場合
// !(P && Q) == !P || !Q
