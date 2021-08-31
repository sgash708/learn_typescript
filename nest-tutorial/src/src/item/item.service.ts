import { Injectable } from '@nestjs/common';
import { Item } from 'src/entities/item.entity';
import { Repository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDTO } from './item.dto';


@Injectable()
export class ItemService {
    constructor(
        // DIコンテナが登録されたRepositoryを生成して渡してくれる
        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>
    ) {}

    // findAll 全データ取得
    async findAll(): Promise<Item[]> {
        return await this.itemRepository.find();
    }

    // create データ1件追加
    async create(item: CreateItemDTO): Promise<InsertResult> {
        return await this.itemRepository.insert(item);
    }

    // find データ1件取得
    async find(id: number): Promise<Item> | null {
        return await this.itemRepository.findOne({id: id});
    }

    // update データ1件取得
    async update(id: number, item): Promise<UpdateResult> {
        return await this.itemRepository.update(id, item);
    }

    // delete データ1件削除
    async delete(id: number): Promise<DeleteResult> {
        return await this.itemRepository.delete(id);
    }
}
