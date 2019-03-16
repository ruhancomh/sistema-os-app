'use strict'
import { Veiculos } from '../models/Veiculos';
import { BaseController } from './BaseController';

export class VeiculosController extends BaseController {
  _baseApiUrl = 'veiculos'

  getModel() {
    return new Veiculos()
  }

  async create(params) {
    try {
      let veiculo = new Veiculos(params.descricao, params.placa)
      let result = await this._request.post(this._baseApiUrl, veiculo)
      return this.response('Veiculo adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let veiculo = new Veiculos(params.descricao, params.placa, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${veiculo.id}`, veiculo)
      return this.response('Veiculo editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Veiculo carregado com sucesso.', result.data)
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
      return this.response('Veiculo apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}