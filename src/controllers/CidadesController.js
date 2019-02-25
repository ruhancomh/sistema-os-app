'use strict'
import { Cidades } from '../models/Cidades';
import { BaseController } from './BaseController';

export class CidadesController extends BaseController {
  async create(params) {
    try {
      let cidade = new Cidades(params.nome, params.estados_id)
      let result = await this._request.post('cidades', cidade)
      return this.response('Cidade adicionada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let cidade = new Cidades(params.nome, params.estados_id, params.id)
      let result = await this._request.put(`cidades/${cidade.id}`, cidade)
      return this.response('Cidade editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending) {
    try {
      let queryParams = this.buildQueryParams(filter, page, limit, sortBy, descending)
      let result = await this._request.get(`cidades${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id) {
    try {
      let result = await this._request.delete(`cidades/${id}`)
      return this.response('Cidade apagada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`cidades/${id}`)
      return this.response('Cidade carregada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}