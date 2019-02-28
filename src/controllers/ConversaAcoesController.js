'use strict'
import { ConversaAcoes } from '../models/ConversaAcoes';
import { BaseController } from './BaseController';

export class ConversaAcoesController extends BaseController {
  _baseApiUrl = 'conversa-acoes'

  getModel() {
    return new ConversaAcoes()
  }

  async create(params) {
    try {
      let conversaAcao = new ConversaAcoes(params.descricao)
      let result = await this._request.post(this._baseApiUrl, conversaAcao)
      return this.response('Ação adicionada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let conversaAcao = new ConversaAcoes(params.descricao, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${conversaAcao.id}`, conversaAcao)
      return this.response('Ação editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Ação carregada com sucesso.', result.data)
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
      return this.response('Ação apagada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}