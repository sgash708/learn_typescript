/**
 * プリミティブ型(基本の型)
 * → リテラルは、専用の文法をもちソースコード中に直接記述できるデータのこと
 * → PHPでは、bool/int/float/array/object/function/null を持っている
 * → TSでも同じく出てくるが上記のうち、それ以上分解できないデータをプリミティブ型と呼ぶ
 */

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

/**
 * 数値型
 * → "number"と"bigInt"の2種類存在する。
 */
// ts/jsは「64ビットfloat」で扱う
// → 整数をロスなく格納できるのは、53ビット(+-9007兆)まで扱える
// → それ以上の数値は末尾が誤差としてカットされるので、整数を期待して扱うと問題が出る場合がある。
// 正確な上限/下限は、下記定数で確認できる。
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
// 範囲内で数値が収まっているか確認できる
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));

console.log(10.5);
console.log(128);
console.log(0b11);  // 0b => binary
console.log(0o777); // 0o => octal
console.log(0xf7);  // 0x => hexial

// 0o => octal 8進数だから、512にするには値を繰り上げた1000となる
// REF: http://cute.sh/solairo/binary/02.html
console.log(0o1000);

// キャストについて
const year: number = 2021;
console.log(year.toString());
console.log(year.toString(2)); // 2進数変換(最大36進数まで)
console.log(Boolean(year));    // bool変換なので、0以外はtrue

// REF: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// 8進数に変換されるので、511が出力される
console.log(parseInt("777", 8));

console.log(Number(true)); // 1

/**
 * stringリテラル
 */

/**
 * undefined / null
 */