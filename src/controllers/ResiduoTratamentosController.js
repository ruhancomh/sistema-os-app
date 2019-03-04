'use strict'
import { ResiduoTratamentos } from '../models/ResiduoTratamentos';
import { BaseController } from './BaseController';

export class ResiduoTratamentosController extends BaseController {
  _baseApiUrl = 'residuo-tratamentos'

  getModel() {
    return new ResiduoTratamentos()
  }

  async create(params) {
    try {
      let residuoTratamento = new ResiduoTratamentos(params.descricao)
      let result = await this._request.post(this._baseApiUrl, residuoTratamento)
      return this.response('Tratamento de residuo adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let residuoTratamento = new ResiduoTratamentos(params.descricao, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${residuoTratamento.id}`, residuoTratamento)
      return this.response('Tratamento de residuo editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Tratamento de residuo carregado com sucesso.', result.data)
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

  async delete(id) {
    try {
      let result = await this._request.delete(`${this._baseApiUrl}/${id}`)
      return this.response('Tratamento de residuo apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}