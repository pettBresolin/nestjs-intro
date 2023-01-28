import { Injectable } from '@nestjs/common';
import { createTableDto } from './dto/create-table.dto';

@Injectable()
export default class TableService {
  findAll() {
    return 'Buscar todas as mesas';
  }
  create(createTableDto: createTableDto) {
    return 'Criar uma mesa: ' + JSON.stringify(createTableDto);
  }
}
