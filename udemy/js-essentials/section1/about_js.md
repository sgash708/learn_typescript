# 生い立ち
* Sun microsystemsが、Javaをデザイン
* mochaを開発コードネーム
    * 過去: LiveScript/JavaScript/JScript などと呼ばれた
    * 上記はみんな同じだけど、これらを統合して、`ECMAScript`(ES5) と呼ぶ

# どのようにして動くのか
ブラウザは、3つの主要プログラムによって稼働している。
## DOM Parser
HTMLを構造化されたページに変換して、視覚的理解を深める
## CSS Parser
ドキュメントを、正確に描画する。
実際にはHTMLとCSSを結びつけて描画する。
簡単にいえばページを描画すること。
## javascript engine
各ブラウザによってJSを動かせるようにしている。
実際には、ブラウザ間で持っているエンジンは異なる。
ex. FireFox(SpiderMonkey)/Chrome(V8-engine)/Safari(NightPro)/IE(Chakura)

# 実行環境
## JITコンパイラ
即時実行して、可読可能な形に変換する。
`js -> jitコンパイラ -> 機械語`

# JSコンソールについて
昔は`textインターフェイス`として黒い画面を使用して、GUIレスな開発をしていた。
だけど、あまりにもシンプルなので開発には強力だが一般的な仕様においては難しいとされている。

話を戻して、ブラウザベースのJSにもコンソールはあるのだろうか。
答えは、`存在している`。開発者ツールでは、jsのコマンドのみを許可しているコンソールが存在している。
JITとして出入力結果を確認することができる。
また問題がある場合には、errorやwarningが出力される。

# オブジェクトについて
リンゴについて表してみる。
## Nouns, Adjectives
properties(性質)を表す。
* 例: 赤くて丸い。重さは`xxxg`くらい
## Verbs
functions(動詞)を表す。
* 例: 食べたり、投げたりできる。
## Method
functionsとobjectを含んでいるもの
## Hierarchy
また、オブジェクトはカプセル化が可能である。一つのアプリにはさらに機能を持っているということ。

# なぜオブジェクトは重要か
何をすべきか、何ができるかなど関係性を表している。
日常生活においても、そのものでできることや性質を利用して生活をしている。

# 文法(syntax)について
API(`application programming interface`)のこと。
jQueryもAPIであり使えるオブジェクトが存在している。
jQueryは、nativeAPIとしてjs内で起動する。API extensionとして使われている。

JITコンパイラは`native API`あるいは、予約関数やオブジェクトとしての箱である。

1つのブラウザウインドウ/ページには、自身の`window object`と固有の`window object`が存在している。
また、jQueryの場合には`jsのnativeAPI`と`jQueryのAPI`が存在している。