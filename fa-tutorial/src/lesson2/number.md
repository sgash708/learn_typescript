# 文字列のキャストについて

|    |  Number("string")  |  paseInt("string")  |  リテラル  |
| ---- | ---- | ---- | ---- |
|  "10"  |  10  |  10  |  10  |
|  "010"  |  10  |  10  |  8  |
|  "0x10"  |  16  |  16  |  16  |
|  "0o10"  |  8  |  0  |  8  |
|  "0b10"  |  2  |  0  |  2  |

>なお、リテラルの8進数ですが、ESLintの推奨設定を行うと no-octal というオプションが有効になります。このフラグが有効だと、8進数を使用すると警告になります。

>注釈
>IE8以前及びその時代のブラウザは、 parseInt() に0が先頭の文字列を渡すと8進数になっているため、かならずradixを省略せずに10を設定しろ、というのが以前言われていました。その世代のブラウザは現在市場に出回っていないため、10は省略しても問題ありません。
>また、8進数リテラルは以前のJavaScriptは0777のように、ゼロ始まりのものも使えましたが、現在はこちらの記法はES5以上で非推奨となっており、TypeScriptではエラーになります。

## REF
https://future-architect.github.io/typescript-guide/primitive.html

# 数値型の使い分け
## number
* 64ビットFloat

## bigint
* 桁の制限数がない整数

## 選択方法
### number
浮動小数や整数の計算が可能で、範囲内であれば最速の演算が可能

### bigint
使用方法には、`"target": "esnext"`とすることで使用可能になる。
基本的には使わない。

# 小数点の計算誤差について
js/tsは、IEEE754(浮動小数点数演算標準)に沿った実装がされている。
`0.1 + 0.2 = 0.30000000000000004`のように小数点がずれる。

## 対応
### ①10^Nで整数にする
10の倍数をかけることで整数に変換する試み
しかし、整数値に直す処理を挟んでしまうと正しい数値を導くことができない。

```typescript
// 成功パターン
const value1: number = 80.7;
const value2: number = 10.1;
let result: number;

result = ((value1 *10) - (value2 * 10)) / 10;

// 失敗パターン
const value3: number = 20.42;
const value4: number = 10.1;

result = ((value3 *100) - (value4 * 100)) / 100;
```

### ②数値を文字列に変換して小数点を取り除く

```typescript
// getDotPosition 小数点位置の取得
function getDotPosition(value: number): number {
  const strVal: string = String(value);
  let dotPosition: number = 0;

  //　小数点存在確認
  if(strVal.lastIndexOf('.') >= 0){
    // 小数点の位置取得
    dotPosition = (strVal.length - 1) - strVal.lastIndexOf('.');
  }

  return dotPosition;
}

// calcSubtract 引き算の計算
function calcSubtract(value1: number, value2: number) {
  // 小数点の位置取得
  let dotPosition1: number = getDotPosition(value1);
  let dotPosition2: number = getDotPosition(value2);

  // 位置の値が大きい方（小数点以下の位が多い方）の位置を取得
  const max: number = Math.max(dotPosition1, dotPosition2);

  // 大きい方に小数の桁を合わせて文字列化、小数点を除いて整数の値にする
  const intValue1: number = parseInt((value1.toFixed(max) + '').replace('.', ''));
  const intValue2: number = parseInt((value2.toFixed(max) + '').replace('.', ''));

  // 10^N の値を計算
  const power: number = Math.pow(10, max);

  // 整数値で引き算した後に10^Nで割る
  return (intValue1 - intValue2) / power;
}

console.log(0.1, 0.2);
```

### ③ライブラリの使用
`decimal.js`の使用