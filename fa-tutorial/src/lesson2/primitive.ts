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
const notEmpty = Boolean("test string");
// 文字列(true)同士の比較結果をBooleanで取る
const flagStr = 'true';
const castFlag = flagStr === 'true';
// 反転について
const str = 'test';
const isEmpty = !str;
console.log(str, isEmpty);

/**
 * 数値型
 */


/**
 * stringリテラル
 */

/**
 * undefined / null
 */