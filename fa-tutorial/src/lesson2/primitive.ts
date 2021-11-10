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

// numberは2進数で、0.3のように表示ができないので"decimal.js"を使用すること
// 対応はnumber.mdを参照
const a = 0.1;
const b = 0.2;
console.log(a + b); // 0.30000000000000004

// 演算子について
// 「+,-,*,/,%,**(ES2016)」が使用できる
// AND: 2つの数値の対応するビットがともに1の場合に1を返す。
console.log(a & b);
// OR: 2つの数値の対応するビットのどちらかが1の場合に1を返す。
console.log(a | b);
// XOR: 2つの数値の対応するビットのどちらか一方のみが1の場合に1を返す。
console.log(a ^ b);
// NOT: ビットを反転させる。
console.log(~a);
// LSHIFT: aのビットを、b(32未満の整数)分だけ左にずらし、右から0をつめる。
console.log(a << b);
// RSHIFT: aのビットを、b(32未満の整数)分だけ右にずらし、左から0をつめる。符号は維持される。
console.log(a >> b);
// 0埋めRSHIFT: aのビットを、b(32未満の整数)分だけ右にずらし、左から0をつめる。
console.log(a >>> b);

// ビット演算を用いた小数点の整数値変換
// ただし、ビット演算のため本来扱えるよりもかなり小さい数字でしか正常に動作しない。
console.log(~~a);
console.log(a | 0);

// 特殊な数値も存在している(Infinity/NaN)があるが、場合によっては攻撃対策にチェックするのも必要。

// Mathオブジェクト
// "max"は最大値を返す。また、配列にも使うことができる。
console.log(Math.max(1, 100, 100000));
// 配列内の数値の最大値を取得
const maxNumberArr: Array<number> = [1, 100, 30000];
console.log(Math.max(...maxNumberArr));

// "mins"は最小値を返す。また、配列にも使うことができる。
console.log(Math.min(1, 100, 100000));
// 配列内の数値の最大値を取得
const minNumberArr: Array<number> = [11, 100, 30000];
console.log(Math.min(...minNumberArr));

/** 整数値変換 */
// 0以上1未満の疑似乱数を返す。
console.log(Math.random());
// nodeでは、暗号的乱数を返す。
// const cryptStr = crypto.randomBytes(20).toString('hex');

// aの絶対値を返す
console.log(Math.abs(a)); // 0.1
// a以上の最小の整数を返す
console.log(Math.ceil(a)); // 1
// a以下の最大の整数を返す
console.log(Math.floor(a)); // 0
// aに近似の単精度浮動小数点数を返す
console.log(Math.fround(a)); // 0.10000000149011612
// aを四捨五入して近似整数整数を返す
console.log(Math.round(a)); // 0
// aが正なら1、負なら-1、0なら0を返す
console.log(Math.sign(a)); // 1
// 小数点以下切り捨て
console.log(Math.trunc(a)); // 0

/** 32ビット整数 */
// 2進数32ビット整数値で表した数の先頭の0の個数を返す
console.log(Math.clz32(a)); // 32
// 32ビット同士の整数の乗算の結果を返す。超えた範囲は切り捨てられる。主にビット演算と一緒に使う。
console.log(Math.imul(a, b)); // 0

/** ルート(平方根) */
// √1/2
console.log(Math.SQRT1_2);
// √2
console.log(Math.SQRT2);
// aの立法根
console.log(Math.cbrt(a));
// 引数の数値の二乗和のルートを返す
console.log(Math.hypot(a, b));
// aのルート
console.log(Math.sqrt(a));

/**
 * stringリテラル
 */

/**
 * undefined / null
 */