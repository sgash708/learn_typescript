import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from '../entities/item.entity';
import { CreateItemDTO, DeleteItemDTO, UpdateItemDTO } from './item.dto';
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

    @Put(':id/update')
    async update(
        @Param('id') id: string,
        @Body() itemData: UpdateItemDTO,
    ): Promise<UpdateResult> {
        const newData = !itemData.isDone ? itemData : {
            ...itemData,
            ...{ isDone: itemData.isDone.toLowerCase() === 'true' },
        };

        return await this.service.update(Number(id), newData);
    }

    /**
     * delete
     * パスワードなし削除
     *
     * @param id 
     * @returns 
     */
    @Delete(':id/delete')
    async delete(@Param('id') id: string): Promise<DeleteResult> {
        return await this.service.delete(Number(id));
    }

    /**
     * deleteItem
     * パスワードあり削除
     *
     * @param id 
     * @param deleteItem 
     * @returns Promise<DeleteResult>
     */
    @Post(':id/delete')
    async deleteItem(@Param('id') id: string, @Body() deleteItem: DeleteItemDTO) {
        const item = await this.service.find(Number(id));
        // 存在しないアイテム
        if (!item) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: `Missing item(id: ${id})`,
                },
                404,
            );
        }
        try {
            await this.service.deleteByPassword(Number(id), deleteItem.deletePassword);
        } catch (e) {
            // パスワード間違い
            if (e.message === 'Incorrect password') {
                throw new HttpException(
                    {
                        status: HttpStatus.FORBIDDEN,
                        error: 'Incorrect password'
                    },
                    403
                );
                
            }
            throw new HttpException(
                {
                    status: HttpStatus.FORBIDDEN,
                    error: 'Internal server error'
                },
                500
            );
            
        }
    }
}
