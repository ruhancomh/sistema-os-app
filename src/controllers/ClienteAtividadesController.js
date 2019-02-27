'use strict'
import { ClienteAtividades } from '../models/ClienteAtividades';
import { BaseController } from './BaseController';

export class ClienteAtividadesController extends BaseController {
  _baseApiUrl = 'cliente-atividades'

  getModel() {
    return new ClienteAtividades()
  }

  async create(params) {
    try {
      let clienteAtividade = new ClienteAtividades(params.descricao)
      let result = await this._request.post(this._baseApiUrl, clienteAtividade)
      return this.response('Atividade adicionada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let clienteAtividade = new ClienteAtividades(params.descricao, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${clienteAtividade.id}`, clienteAtividade)
      return this.response('Atividade editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Atividade carregada com sucesso.', result.data)
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
      return this.response('Atividade apagada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}