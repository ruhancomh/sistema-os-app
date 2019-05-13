'use strict'

import { BaseController } from './BaseController';

export class ResiduoEstadoFisicoController extends BaseController {

  async all () {
    return {
      data : [
        {
          'descricao': 'SOLIDO'
        },
        {
          'descricao': 'LIQUIDO'
        },
        {
          'descricao': 'PASTOSO'
        },
      ]
    }
  }

}