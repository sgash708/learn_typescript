import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';

@Module({
  // 全てのモジュールからTypeORMが呼び出し可能
  imports: [TypeOrmModule.forRoot(), ItemModule],
})
export class AppModule {}
