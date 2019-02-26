'use strict'
import { FuncionarioCargos } from '../models/FuncionarioCargos';
import { BaseController } from './BaseController';

export class FuncionarioCargosController extends BaseController {
  _baseApiUrl = 'funcionario-cargos'

  async create(params) {
    try {
      let funcionarioCargo = new FuncionarioCargos(params.descricao)
      let result = await this._request.post(this._baseApiUrl, funcionarioCargo)
      return this.response('Cargo adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let cargo = new FuncionarioCargos(params.descricao, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${cargo.id}`, cargo)
      return this.response('Cargo editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Cargo carregado com sucesso.', result.data)
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
      return this.response('Cargo apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}