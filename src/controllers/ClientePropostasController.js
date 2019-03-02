'use strict'
import {
  ClientePropostas
} from '../models/ClientePropostas';
import {
  BaseController
} from './BaseController';

export class ClientePropostasController extends BaseController {
  _baseApiUrl = ''

  getModel() {
    return new ClientePropostas()
  }

  getBaseApiUrl(clientes_id) {
    return `clientes/${clientes_id}/propostas`
  }

  async create(params, clientes_id) {
    try {
      let clienteProposta = new ClientePropostas(
        params.data,
        params.numero,
        params.aprovado,
        params.referencia_1,
        params.referencia_2,
        params.referencia_3,
        params.observacao,
        params.servicos_id,
        params.clientes_id,
        params.funcionarios_id,
      )
      let result = await this._request.post(this.getBaseApiUrl(clientes_id), clienteProposta)
      return this.response('Proposta adicionada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params, clientes_id) {
    try {
      let clienteProposta = new ClientePropostas(
        params.data,
        params.numero,
        params.aprovado,
        params.referencia_1,
        params.referencia_2,
        params.referencia_3,
        params.observacao,
        params.servicos_id,
        params.clientes_id,
        params.funcionarios_id,
        params.id
      )
      let result = await this._request.put(`${this.getBaseApiUrl(clientes_id)}/${clienteProposta.id}`, clienteProposta)
      return this.response('Proposta editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id, clientes_id) {
    try {
      let result = await this._request.get(`${this.getBaseApiUrl(clientes_id)}/${id}`)
      return this.response('Proposta carregada com sucesso.', result.data)
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
      let result = await this.request().get(`${this.getBaseApiUrl(clientes_id)}${queryParams}`)
      window.console.log('contato',result)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id, clientes_id) {
    try {
      let result = await this._request.delete(`${this.getBaseApiUrl(clientes_id)}/${id}`)
      return this.response('Proposta apagada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}