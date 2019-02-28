'use strict'
import { Conversas } from '../models/Conversas';
import { BaseController } from './BaseController';

export class ConversasController extends BaseController {
  _baseApiUrl = 'cliente-conversas'

  getModel() {
    return new Conversas()
  }

  getBaseApiUrl (clientes_id) {
    return `clientes/${clientes_id}/conversas`
  }

  async create(params, clientes_id) {
    try {
      let conversa = new Conversas(params.data, params.descricao, params.clientes_id, params.funcionarios_id, params.conversa_acoes_id)
      let result = await this._request.post(this.getBaseApiUrl(clientes_id), conversa)
      return this.response('Conversa adicionada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params, clientes_id) {
    try {
      let conversa = new Conversas(params.data, params.descricao, params.clientes_id, params.funcionarios_id, params.conversa_acoes_id, params.id)
      let result = await this._request.put(`${this.getBaseApiUrl(clientes_id)}/${conversa.id}`, conversa)
      return this.response('Conversa editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id, clientes_id) {
    try {
      let result = await this._request.get(`${this.getBaseApiUrl(clientes_id)}/${id}`)
      return this.response('Conversa carregada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending, clientes_id) {
    try {
      let queryParams = this.buildQueryParams(filter, page, limit, sortBy, descending)
      let result = await this._request.get(`${this.getBaseApiUrl(clientes_id)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async all (clientes_id) {
    try {
      let queryParams = this.buildQueryParams(false, false, -1)
      let result = await this._request.get(`$${this.getBaseApiUrl(clientes_id)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id, clientes_id) {
    try {
      let result = await this._request.delete(`${this.getBaseApiUrl(clientes_id)}/${id}`)
      return this.response('Conversa apagada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}