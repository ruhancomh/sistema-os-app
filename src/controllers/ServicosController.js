'use strict'
import { Servicos } from '../models/Servicos';
import { BaseController } from './BaseController';

export class ServicosController extends BaseController {
  _baseApiUrl = 'servicos'

  getModel() {
    return new Servicos()
  }

  async create(params) {
    try {
      let servico = new Servicos(params.descricao)
      let result = await this._request.post(this._baseApiUrl, servico)
      return this.response('Servico adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let servico = new Servicos(params.descricao, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${servico.id}`, servico)
      return this.response('Servico editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Servico carregado com sucesso.', result.data)
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
      return this.response('Servico apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}