'use strict'
import { OrdemServicoServicos } from '../models/OrdemServicoServicos';
import { BaseController } from './BaseController';

export class OrdemServicoServicosController extends BaseController {

  getModel() {
    return new OrdemServicoServicos()
  }

  getBaseApiUrl(ordens_servico_id) {
    return `ordens-servico/${ordens_servico_id}/servicos`
  }

  async update(params, ordens_servico_id) {
    try {
      let result = await this._request.put(`${this.getBaseApiUrl(ordens_servico_id)}`, params)
      return this.response('Serviços atualizados com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async all (ordens_servico_id) {
    try {
      let queryParams = this.buildQueryParams({ordens_servico_id: ordens_servico_id}, false, -1)
      let result = await this._request.get(`${this.getBaseApiUrl(ordens_servico_id)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}