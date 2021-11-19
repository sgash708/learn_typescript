// 変数の型が明確であれば、型名は省略可能
const years: number[] = [1, 2, 3, 5];
const divs: string[] = ['tig', 'sig', 'saig', 'scig'];

years.push(2021);
// 複数個追加することもできる
// REF: push(...items: T[]): number;
years.push(2021, 2022);
console.log(years);
// POPして最後の要素を吐き出す。
const popArr: number | undefined = years.pop();
console.log(popArr, years);

// index呼び出しも同じ
const first: number = years[0];
console.log(first);

/**
 * タプル
 * → 配列の要素ごとに型が違う「タプル」というデータ型
 * → readonlyを使うことで読み込み専用のタプルを作ることもできる
 * → デフォルトは変更可能
 * 
 * あまり使われない。
 */
const film: [string, number] = ['filmName', 1955];
// 型 'number' を型 'string' に割り当てることはできません。
// film[0] = 1999;
console.log(film);

/** 固定長の配列を表現する手段としても利用 */
const r: number = 10;
const t: number = Math.PI * 0.5;
const pos: [number, number] = [r * Math.cos(r), r * Math.sin(r)];
console.log(pos);

/**
 * 配列からデータの取り出し
 * → 以前のJavaScriptは、配列やオブジェクトの中身を変数に取り出すには一つずつ取り出すしかなかった。
 * → 現在のJavaScript/TypeScriptは、分割代入（=の左に配列を書く記法）を使って複数の要素をまとめて取り出せる。
 * → slice()を使わずに、新しい残余（Rest）構文（...）を使って、複数の要素をまとめて取り出せる。
 * → 残余構文は省略記号のようにピリオドを3つ書く構文で、あたかも複数の要素がそこにあるかのように振る舞う。
 * → 残余構文は取り出し以外にも、配列やオブジェクトの加工、関数呼び出しの引数リストに対しても使える強力な構文。
 */
const smalls = [
  "小動物",
  "小型車",
  "小論文"
];
// 旧: 一個ずつ取り出す
const smallCar: string = smalls[1];
const smallAnimal: string = smalls[0];
// 旧: 2番目以降の要素の取り出し
const oldOther: string[] = smalls.slice(1);
console.log(oldOther);

// 新: まとめて取り出し
const [newSmallAnimal, newSmallCar, essay]: string[] = smalls;
// 新: 2番目以降の要素の取り出し
const [, ...newOther]: string[] = smalls;
// 3番目以降の取り出し
const [, , ...threeElementOther]: string[] = smalls;
console.log(newOther, threeElementOther);

/** 配列の要素の存在チェック */
const places: string[] = ['p1', 'p2', 'p3'];
// 旧
console.log(places[0] === 'p1');
// 新
console.log(places.includes('p1'));

/**
 * 配列の加工
 * → 他言語の習熟者がJavaScriptを学ぶときにつまづくポイント
 *  → 旧: splice()という要素の削除と追加をパズルのように行い配列を加工していた。
 *   → 配列のメソッドによっては、配列そのものを変更したり、新しい配列を返したりが統一されていないのも難解さを増やしていた。
 *
 *  → 新: スプレッド構文を使うと標準文法の範囲内でこのような加工ができる。
 *   → さきほどのスプレッド構文は左辺用だったが、右辺で配列の中身を展開する。
 *   → splice()は対象の配列を変更するがスプレッド構文を使うと、この方針に沿ったコーディングがしやすくなる。
 *   → 配列のコピーも簡単にできます。
 */
const smallOnes: string[] = ["小動物", "小型車", "小論文"];
const others: string[] = ["小市民", "小田急"];

// 旧: 3番目の要素を削除し1つの要素を追加
// → 他の配列と結合
smalls.splice(2, 1, "小心者"); // [ '小動物', '小型車', '小心者' ]
const oldSmallThings: string[] = smalls.concat(others); // [ '小動物', '小型車', '小心者', '小市民', '小田急' ]
// 新: スプレッド構文で同じ操作をする
// 先頭要素の削除の場合、分割代入を使えばslice()も消せる
const newSmallThings: string[] = [...smalls.slice(0, 2), "小心者", ...others] // [ '小動物', '小型車', '小心者', '小市民', '小田急' ]
console.log(oldSmallThings, newSmallThings);

// 旧: 配列のコピー
const oldCopy: string[] = Array.from(smalls);
// 新: スプレッド構文で配列のコピー
const newCopy: string[] = [...smalls];
console.log(oldCopy, newCopy);

/** 
 * 配列のソート
 * → インプレースで、その配列を変更する。
 * → ソートをそのまま実行すると中の要素をすべて文字列化した上で、辞書順でソートされる。
 * 
 * 変数.sort([compareFunction])
 * ソート順を定義する関数を指定する。
 * 省略された場合、配列の各要素は文字列に変換され各文字の Unicode のコードポイント順に従ってソートされます。
 */
const numbers: number[] = [30, 1, 200, 50];

// 失敗例
// numbers.sort();
// console.log(numbers); // [1, 200, 30, 50]

// Number
console.log(numbers.sort((n1: number, n2: number) => {
  return n1 - n2;
}));
// REF: https://stackoverflow.com/questions/21687907/typescript-sorting-an-array
// REF: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/**
 * numbers.sort((n1: number, n2: number) => n1 - n2);
 * sortの仕組み
 * [30, 1, 200, 50]
 *
 * 1. n1 === 1 || n2 === 30 // -29 [1 ,30, 200, 50]
 * 2. n1 === 200 || n2 === 1 // 199 [1, 30, 200, 50]
 * 3. n1 === 200 || n2 === 30 // 170 [1, 30, 200, 50]
 * 4. n1 === 50 || n2 === 30 // 20 [1, 30, 200, 50]
 * 5. n1 === 50 || n2 === 200 // -150 [1, 30, 50, 200]
 */