'use strict'
import { OrdemServicoServicos } from '../models/OrdemServicoServicos';
import { BaseController } from './BaseController';

export class OrdemServicoServicosController extends BaseController {
  _baseApiUrl = 'ordem-servico-servicos'

  getModel() {
    return new OrdemServicoServicos()
  }

}