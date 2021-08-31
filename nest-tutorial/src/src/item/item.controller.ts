import {
    Controller,
    Get,
    Post,
    Body,
    Param
} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from '../entities/item.entity';
import { CreateItemDTO } from './item.dto';
import { InsertResult, UpdateResult, DeleteResult } from "typeorm";

@Controller('item')
export class ItemController {
    // ItemServiceの呼び出し
    constructor(private readonly service: ItemService) {}

    // getItemList 一覧取得
    @Get()
    async getItemList(): Promise<Item[]> {
        return await this.service.findAll();
    }

    // addItem データ新規登録
    @Post()
    async addItem(@Body() item: CreateItemDTO): Promise<InsertResult> {
        return await this.service.create(item);
    }

    // ':id'は、'http://localhost:3000/item/1'のようにアクセスさせる
    // getItem ID指定して取得
    @Get(':id')
    async getItem(@Param('id') id: string): Promise<Item> {
        return await this.service.find(Number(id));
    }
}
