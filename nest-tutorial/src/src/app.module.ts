import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';

@Module({
  // 全てのモジュールからTypeORMが呼び出し可能
  imports: [TypeOrmModule.forRoot(), ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
