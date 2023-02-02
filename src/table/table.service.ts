import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.table.findMany();
  }
  create(createTableDto: CreateTableDto) {
    const table: Table = { id: `random_id`, ...createTableDto };

    this.tables.push(table);

    return table;
  }
}
