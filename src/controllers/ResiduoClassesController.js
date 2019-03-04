'use strict'
import { ResiduoClasses } from '../models/ResiduoClasses';
import { BaseController } from './BaseController';

export class ResiduoClassesController extends BaseController {
  _baseApiUrl = 'residuo-classes'

  getModel() {
    return new ResiduoClasses()
  }

  async create(params) {
    try {
      let residuoClasse = new ResiduoClasses(params.descricao)
      let result = await this._request.post(this._baseApiUrl, residuoClasse)
      return this.response('Classe de residuo adicionada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let residuoClasse = new ResiduoClasses(params.descricao, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${residuoClasse.id}`, residuoClasse)
      return this.response('Classe de residuo editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Classe de residuo carregada com sucesso.', result.data)
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
      return this.response('Classe de residuo apagada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}