'use strict'
import { ManifestoTiposOperacao } from '../models/ManifestoTiposOperacao';
import { BaseController } from './BaseController';

export class ManifestoTiposOperacaoController extends BaseController {
  _baseApiUrl = 'manifesto-tipos-operacao'

  getModel() {
    return new ManifestoTiposOperacao()
  }

  async create(params) {
    try {
      let residuoClasse = new ManifestoTiposOperacao(params.descricao)
      let result = await this._request.post(this._baseApiUrl, residuoClasse)
      return this.response('Tipo de operação adicionada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let residuoClasse = new ManifestoTiposOperacao(params.descricao, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${residuoClasse.id}`, residuoClasse)
      return this.response('Tipo de operação editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Tipo de operação carregada com sucesso.', result.data)
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
      return this.response('Tipo de operação apagada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}