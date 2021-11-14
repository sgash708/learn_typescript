/**
 * undefined: 意図しない未定義な値
 * → undefined は未定義やまだ値が代入されていない変数を参照したり、オブジェクトの未定義の属性にアクセスした際の返り値
 * → typescriptは、「undefined に遭遇するとわかっているコードを事前にチェックしてくれる」ことが本質
 *
 * JavaScriptはメソッドや関数呼び出し時に数が合わなくてもエラーにはならない。
 * 指定されなかった引数には undefined が入る。
 * TypeScriptでは数が合わないとエラーになるが、 ? を変数名の最後に付与すると省略可能になる。
 */

/**
 * 出力
 * @param myName string
 * @param age number
 * @return void
 */
function print(myName: string, age?: number): void {
  console.log(`name ${myName}, age: ${age || 'empty'}`);
}
print("hoge");

/**
 * null: 意図した無効な値
 * → 気軽に null を入れることはできない。
 * → 変数の章でも紹介した「AもしくはBのデータが格納できる」という合併型（Union Type）をつかって null を代入する。
 * → TypeScriptでは「これは無効な値をとる可能性がありますよ」というのは意識して許可すること。
 */
// favoriteGame はstringかnullのみ許容と宣言する
let favoriteGame: string | null = null;

/**
 * undefined と null は別物
 * → コンパイラオプションで compilerOptions.strict: true
 *   もしくは、 compilerOptions.strictNullChecks: true の場合は、 null 型の変数に undefined を入れようとしたり、その逆をするとエラー
 * → これらのオプションは両方とも false にしない。
 */
// 型 'undefined' を型 'string | null' に割り当てることはできません。
// const a: string | null = undefined;

// 型 'null' を型 'string | undefined' に割り当てることはできません。
// const b: string | undefined = null;