/**
 * stringリテラル
 * → シングルクオート/ダブルクオートでくくり、文字列を表現
 * → シングルクオート/ダブルクオートは、途中で改行が挟まると「末尾がない」とエラー
 * → バッククオートでくくると、複数行あるテキストをそのまま表現できる
 */
console.log('hello world');
const myName: string = "hoge";
const multiLine: string = `
hello, my name is ...
hoge
`;

console.log(myName, multiLine);
console.log(parseInt('0100', 10));
