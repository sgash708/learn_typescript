# package.json
* プロジェクトの核ファイル
* 依存ライブラリ情報
* 開発に必要なタスク実行

# 準備コマンド

```bash
$ mkdir ts
$ cd ts
$ npm init -y
$ vi package.json
### ここから ###
# npmjs.orgにアップする際に必要な情報なども含まれるため、公開しない設定とする
private: true
### ここまで ###
```

# プロジェクト作成
## npm installオプションについて
* `--save-dev`：開発のみに使用する場合
* `--save`：本番もts-nodeを使ってビルドする場合

```bash
$ npm install --save-dev ts-node typescript
```

# コマンドについて

```bash
# インタプリタ実行
npx ts-node
# WEBサーバ起動
npm run start
npm run serve
# test
npm run test
# 静的解析実行
npm run lint
# ビルド
npm run build
```

# TypeScriptの環境設定について
tsを使うには、いくつかの設定が必要となる。
js系のビルドは2種類ある。

## コンパイル
TypeScriptやjsの文法を実行環境に合わせてjsに変換する
ex) TypeScript, Babel

## バンドル
ソースコードは、コンポーネント単位やクラスごとなどに分割して記述する。
実際のデプロイ時には最適化(1ファイルにまとめてダウンロードの高速化/無駄なコードの排除など)を行う
ex) webpack, Browserify, Rollup, Parcel

## TypeScriptのコンパイル
何も設定しなくてもコンパイルは可能。
入力フォルダの設定、出力形式の設定や新しい機能を使う場合は設定ファイル(`tsconfig.json`)を作成する。

```
npx tsc --init
```
