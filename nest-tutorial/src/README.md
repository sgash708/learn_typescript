# インストールしたもの

```bash
# sqlite3
# https://typeorm.io/
npm i @nestjs/typeorm typeorm sqlite3
# validation
# https://github.com/typestack/class-transformer#implicit-type-conversion
npm i class-transformer class-validator
```

# 自作ファイルについて
## src/ormconfig.json
type：DBの種類  
database：DB名  
entities：テーブル構成の定義  
migrations：マイグレーションファイルの定義場所  
logging：SQLの詳細をログに出力する  

# マイグレーション
```bash
npm run build
npx typeorm migration:generate -d src/migrations -n create-item
# Migration /var/www/html/src/migrations/1630370722417-create-item.ts has been generated successfully.
npm run build
npx typeorm migration:run
```

# ファイル作成
```bash
# moduleクラス
# ここで作成したItemModuleは自動的に、<code>app.module.ts</code>に読み込む
npx nest g module item

# Controllerクラス
# ここで作成したItemControllerは自動的に、<code>item.module.ts</code>に読み込む
npx nest g controller item

# Serviceクラス
# ここで作成したItemServiceは自動的に、<code>item.module.ts</code>に読み込む
npx nest g service item
```