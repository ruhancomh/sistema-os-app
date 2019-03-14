'use strict'
import {
  ClienteContatos
} from '../models/ClienteContatos';
import {
  BaseController
} from './BaseController';

export class ClienteContatosController extends BaseController {
  _baseApiUrl = ''

  getModel() {
    return new ClienteContatos()
  }

  getBaseApiUrl(clientes_id) {
    return `clientes/${clientes_id}/contatos`
  }

  async create(params, clientes_id) {
    try {
      let clienteContato = new ClienteContatos(
        params.nome,
        params.cargo,
        params.telefone,
        params.email,
        params.clientes_id
      )
      let result = await this._request.post(this.getBaseApiUrl(clientes_id), clienteContato)
      return this.response('Contato adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params, clientes_id) {
    try {
      let clienteContato = new ClienteContatos(
        params.nome,
        params.cargo,
        params.telefone,
        params.email,
        params.clientes_id,
        params.id
      )
      let result = await this._request.put(`${this.getBaseApiUrl(clientes_id)}/${clienteContato.id}`, clienteContato)
      return this.response('Contato editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id, clientes_id) {
    try {
      let result = await this._request.get(`${this.getBaseApiUrl(clientes_id)}/${id}`)
      return this.response('Contato carregado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending, clientes_id) {
    try {
      let queryParams = this.buildQueryParams(filter, page, limit, sortBy, descending)
      let result = await this._request.get(`${this.getBaseApiUrl(clientes_id)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async all(clientes_id) {
    try {
      let queryParams = this.buildQueryParams(false, false, -1)
      let result = await this._request.get(`${this.getBaseApiUrl(clientes_id)}${queryParams}`)
      window.console.log('contato',result)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id, clientes_id) {
    try {
      let result = await this._request.delete(`${this.getBaseApiUrl(clientes_id)}/${id}`)
      return this.response('Contato apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}