'use strict'
import { Residuos } from '../models/Residuos';
import { BaseController } from './BaseController';

export class ResiduosController extends BaseController {
  _baseApiUrl = 'residuos'

  getModel() {
    return new Residuos()
  }

  async create(params) {
    try {
      let residuo = new Residuos(
        params.grupo,
        params.descricao,
        params.codigo,
        params.onu,
        params.residuo_tratamentos_id,
        params.residuo_classes_id,
      )
      let result = await this._request.post(this._baseApiUrl, residuo)
      return this.response('Residuo adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let residuo = new Residuos(
        params.grupo,
        params.descricao,
        params.codigo,
        params.onu,
        params.residuo_tratamentos_id,
        params.residuo_classes_id,
        params.id
      )
      
      let result = await this._request.put(`${this._baseApiUrl}/${residuo.id}`, residuo)
      return this.response('Residuo editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Residuo carregado com sucesso.', result.data)
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
      return this.response('Residuo apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}