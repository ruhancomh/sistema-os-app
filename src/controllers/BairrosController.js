'use strict'
import { Bairros } from '../models/Bairros';
import { BaseController } from './BaseController';

export class BairrosController extends BaseController {
  async create(params) {
    try {
      let bairro = new Bairros(params.nome, params.cidades_id)
      let result = await this._request.post('bairros', bairro)
      return this.response('Bairro adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let bairro = new Bairros(params.nome, params.cidades_id, params.id)
      let result = await this._request.put(`bairros/${bairro.id}`, bairro)
      return this.response('Bairro editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending) {
    try {
      let queryParams = this.buildQueryParams(filter, page, limit, sortBy, descending)
      let result = await this._request.get(`bairros${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id) {
    try {
      let result = await this._request.delete(`bairros/${id}`)
      return this.response('Bairro apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`bairros/${id}`)
      return this.response('Bairro carregado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }
}