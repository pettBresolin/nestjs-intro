import { Injectable } from '@nestjs/common';
import { createTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export default class TableService {
  tables: Table[] = [];

  findAll() {
    return this.tables;
  }
  create(createTableDto: createTableDto) {
    const table: Table = { id: `random_id`, ...createTableDto };

    this.tables.push(table);

    return table;
  }
}
