'use strict'
import { EnderecoTipos } from '../models/EnderecoTipos';
import { BaseController } from './BaseController';

export class EnderecoTiposController extends BaseController {
  _baseApiUrl = 'endereco-tipos'

  getModel() {
    return new EnderecoTipos()
  }

  async create(params) {
    try {
      let enderecoTipo = new EnderecoTipos(params.descricao)
      let result = await this._request.post(this._baseApiUrl, enderecoTipo)
      return this.response('Tipo de endereço adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let enderecoTipo = new EnderecoTipos(params.descricao, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${enderecoTipo.id}`, enderecoTipo)
      return this.response('Tipo de endereço editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Tipo de endereço carregado com sucesso.', result.data)
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
      return this.response('Tipo de endereço apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}