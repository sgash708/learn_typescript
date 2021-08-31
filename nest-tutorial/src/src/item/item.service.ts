import { Injectable } from '@nestjs/common';
import { Item } from 'src/entities/item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ItemService {
    constructor(
        // DIコンテナが登録されたRepositoryを生成して渡してくれる
        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>
    ) {}
}
