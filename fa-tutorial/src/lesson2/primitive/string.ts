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

console.log(myName);
console.log(multiLine);

// 型キャスト
console.log(parseInt('0100', 10)); // 100
/**
 * 空文字列: false
 * それ以外: true
 */
console.log(Boolean(myName));

const myYear: number = 2019;
/**
 * numberを、2進数のstringに変換する
 * → toString()は、36進数まで可能
 */
console.log((myYear).toString(2));
// booleanもstringに変換することができる。
console.log((true).toString());
// 同様に、Stringのキャストもできる。
console.log(String(false));
console.log(Number(true));

/**
 * JavaScriptは、"UTF-16"という文字コード採用
 * → Javaと同じ
 * → 絵文字一部の文字列は1文字分のデータでは再現できずに、2文字使って1文字を表現することがある。
 *  → これをサロゲートペアと呼ぶ。
 *  → REF: https://codezine.jp/article/detail/1592
 * → 範囲アクセスなどで文字列の一部を扱おうとすると、絵文字の一部だけを拾ってしまう可能性がある。
 * → 文字列のロジックのテストをする場合は、絵文字も入れるようにすると良い。
 */

/** 文字コードの正規化 */
const japaneseStr: string = "ＡＢＣｱｲｳｴｵ㍻"
console.log(japaneseStr);
console.log(japaneseStr.normalize("NFKC"));
/**
 * 正規化をすることによって、全角文字を含んだファイル名検索が容易になる。
 *
 * → 「６月６日議事録.md」という全角数字のファイル名を検索したい
 * → 「6月6日議事録」という検索ワードで検索しようとしたときにひっかからない
 * → 検索対象と検索ワードの両方を正規化しておけば、表記のブレがなくなり検索が簡単になる
 */

/**
 * C: 結合するときの方法
 * D: 濁音の記号とベースの文字を分割するときの方法
 * K: 整形
 *
 * [種類]
 * NFC: Normalization Form Canonical Composition
 * NFD: Normalization Form Canonical Decomposition
 * NFKC: Normalization Form Compatibility Composition
 * NFKD: Normalization Form Compatibility Decomposition
 *
 * REF: https://qiita.com/fury00812/items/b98a7f9428d1395fc230
 */

/**
 * 正規化をこのルールに従って行うと、ユーザーに「全角数字で入力する」ことを強要しなくて良い。
 * ユーザーの入力はすべてバリデーションの手前で正規化すると良いかも。
 * 
 * ※ 長音、ハイフンとマイナス、漢数字の１、横罫線など、字形が似ているものの意味としても違うものは、正規化で対応できない。
 */

/** 文字列の結合 */
// 変数展開するのは、バッククォートのみ
console.log(`[Debug]${myYear}`);

/**
 * 文字列の事前処理
 * → テンプレートリテラルに関数を指定すると（タグ付きテンプレートリテラル）、文字列を加工する処理を挟める。
 *  → ユースケース：翻訳
 * → テンプレートリテラルの前に置かれた関数は、最初に文字列の配列がくる。
 * → その後はプレースホルダの数だけ引数が付く構造。
 * → 文字列の配列は、プレースホルダに挟まれた部分のテキストになる。
 */
const person: string = 'Mike';
const age: number = 28;

/**
 * タグ取得
 * @param strings any
 * @param personExp string
 * @param ageExp number
 * @returns string
 */
function getMyTag(strings: any, personExp: string, ageExp: number): string {
    let str0: string = strings[0]; // "That "
    let str1: string = strings[1]; // " is a "

    let ageStr: string;
    if (ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    // テンプレートリテラルを用いて組み立てた文字列を返すこともできます
    return `${str0}${personExp}${str1}${ageStr}`;
}

console.log(getMyTag`That ${person} is a ${age}`);
