'use strict'
import {
  TransportadorContatos
} from '../models/TransportadorContatos';
import {
  BaseController
} from './BaseController';

export class TransportadorContatosController extends BaseController {
  _baseApiUrl = ''

  getModel() {
    return new TransportadorContatos()
  }

  getBaseApiUrl(transportadores_id) {
    return `transportadores/${transportadores_id}/contatos`
  }

  async create(params, transportadores_id) {
    try {
      let transportadorContato = new TransportadorContatos(
        params.nome,
        params.cargo,
        params.telefone,
        params.email,
        params.transportadores_id
      )
      let result = await this._request.post(this.getBaseApiUrl(transportadores_id), transportadorContato)
      return this.response('Contato adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params, transportadores_id) {
    try {
      let transportadorContato = new TransportadorContatos(
        params.nome,
        params.cargo,
        params.telefone,
        params.email,
        params.transportadores_id,
        params.id
      )
      let result = await this._request.put(`${this.getBaseApiUrl(transportadores_id)}/${transportadorContato.id}`, transportadorContato)
      return this.response('Contato editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id, transportadores_id) {
    try {
      let result = await this._request.get(`${this.getBaseApiUrl(transportadores_id)}/${id}`)
      return this.response('Contato carregado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending, transportadores_id) {
    try {
      let queryParams = this.buildQueryParams(filter, page, limit, sortBy, descending)
      let result = await this._request.get(`${this.getBaseApiUrl(transportadores_id)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async all(transportadores_id) {
    try {
      let queryParams = this.buildQueryParams(false, false, -1)
      let result = await this._request.get(`${this.getBaseApiUrl(transportadores_id)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id, transportadores_id) {
    try {
      let result = await this._request.delete(`${this.getBaseApiUrl(transportadores_id)}/${id}`)
      return this.response('Contato apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}