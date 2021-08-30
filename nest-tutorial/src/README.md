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