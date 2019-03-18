'use strict'
import { OrdemServicoTipos } from '../models/OrdemServicoTipos';
import { BaseController } from './BaseController';

export class OrdemServicoTiposController extends BaseController {
  _baseApiUrl = 'ordem-servico-tipos'

  getModel() {
    return new OrdemServicoTipos()
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Tipo de ordem de serviço carregada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending) {
    try {
      let queryParams = this.buildQueryParams(filter, page, limit, sortBy, descending)
      let result = await this._request.get(`${this._baseApiUrl}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async all () {
    try {
      let queryParams = this.buildQueryParams(false, false, -1)
      let result = await this._request.get(`${this._baseApiUrl}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}