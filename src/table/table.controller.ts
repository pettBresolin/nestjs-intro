import { Body, Controller, Get, Post } from '@nestjs/common';
import { createTableDto } from './dto/create-table.dto';
import TableService from './table.service';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Get()
  findAll() {
    return this.tableService.findAll();
  }

  @Post()
  create(@Body() createTableDto: createTableDto) {
    return this.tableService.create(createTableDto);
  }
}
