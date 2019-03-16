'use strict'
import { Equipamentos } from '../models/Equipamentos';
import { BaseController } from './BaseController';

export class EquipamentosController extends BaseController {
  _baseApiUrl = 'equipamentos'

  getModel() {
    return new Equipamentos()
  }

  async create(params) {
    try {
      let equipamento = new Equipamentos(params.descricao)
      let result = await this._request.post(this._baseApiUrl, equipamento)
      return this.response('Equipamento adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let equipamento = new Equipamentos(params.descricao, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${equipamento.id}`, equipamento)
      return this.response('Equipamento editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Equipamento carregado com sucesso.', result.data)
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
      return this.response('Equipamento apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}