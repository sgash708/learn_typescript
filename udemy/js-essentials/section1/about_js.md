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