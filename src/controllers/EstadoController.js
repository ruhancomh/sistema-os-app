'use strict'
import { EstadoModel } from '../models/EstadoModel';
import { BaseController } from './BaseController';

export class EstadoController extends BaseController {
  async create(params) {
    try {
      let estado = new EstadoModel(params.nome, params.uf)
      let result = await this._request.post('estados', estado)
      return this.response('Estado adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending) {
    try {
      let queryParams = this.buildQueryParams(filter, page, limit, sortBy, descending)
      let result = await this._request.get(`estados${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}