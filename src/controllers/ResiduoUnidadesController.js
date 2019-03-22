'use strict'

import { BaseController } from './BaseController';

export class ResiduoUnidadesController extends BaseController {

  async all () {
    return {
      data : [
        {
          'descricao': 'M3'
        },
        {
          'descricao': 'L'
        },
        {
          'descricao': 'TON'
        },
        {
          'descricao': 'KG'
        },
        {
          'descricao': 'UNID.'
        }
      ]
    }
  }

}