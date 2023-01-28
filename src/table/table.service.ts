import { Injectable } from '@nestjs/common';

@Injectable()
export default class TableService {
  findAll() {
    return 'Buscar todas as mesas';
  }
  create() {
    return 'Criar uma mesa';
  }
}
