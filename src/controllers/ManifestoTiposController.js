'use strict'

import { BaseController } from './BaseController';

export class ManifestoTiposController extends BaseController {

  async all () {
    return {
      data : [
        {
          'descricao': 'MTR1'
        },
        {
          'descricao': 'MTR2'
        },
        {
          'descricao': 'MTR3'
        }
      ]
    }
  }

}