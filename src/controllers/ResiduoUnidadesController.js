'use strict'

import { BaseController } from './BaseController';

export class ResiduoUnidadesController extends BaseController {

  async all () {
    return {
      data : [
        {
          'descricao': 'L'
        },
        {
          'descricao': 'Kg'
        },
        {
          'descricao': 'g'
        },
        {
          'descricao': 'm'
        },
      ]
    }
  }

}