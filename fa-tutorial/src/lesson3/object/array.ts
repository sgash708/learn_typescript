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
const oldOther: Array<string> = smalls.slice(1);
console.log(oldOther);

// 新: まとめて取り出し
const [newSmallAnimal, newSmallCar, essay]: string[] = smalls;
// 新: 2番目以降の要素の取り出し
const [, ...newOther]: string[] = smalls;
// 3番目以降の取り出し
const [, , ...threeElementOther]: string[] = smalls;
console.log(newOther, threeElementOther);