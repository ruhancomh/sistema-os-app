'use strict'
import {
  ClienteCobrancas
} from '../models/ClienteCobrancas';
import {
  BaseController
} from './BaseController';

export class ClienteCobrancasController extends BaseController {
  _baseApiUrl = ''

  getModel() {
    return new ClienteCobrancas()
  }

  getBaseApiUrl(clientes_id) {
    return clientes_id ? `clientes/${clientes_id}/cobrancas` : `clientes/cobrancas`
  }

  async create(params, clientes_id) {
    try {
      let clienteCobranca = new ClienteCobrancas(
        params.data,
        params.vencimento,
        params.valor,
        params.referencia,
        params.porcentagem,
        params.dia,
        params.observacao,
        params.servicos_id,
        params.clientes_id,
      )
      let result = await this._request.post(this.getBaseApiUrl(clientes_id), clienteCobranca)
      return this.response('Cobrança adicionada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params, clientes_id) {
    try {
      let clienteCobranca = new ClienteCobrancas(
        params.data,
        params.vencimento,
        params.valor,
        params.referencia,
        params.porcentagem,
        params.dia,
        params.observacao,
        params.servicos_id,
        params.clientes_id,
        params.id
      )
      let result = await this._request.put(`${this.getBaseApiUrl(clientes_id)}/${clienteCobranca.id}`, clienteCobranca)
      return this.response('Cobrança editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id, clientes_id) {
    try {
      let result = await this._request.get(`${this.getBaseApiUrl(clientes_id)}/${id}`)
      return this.response('Cobrança carregada com sucesso.', result.data)
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
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async allByOrdemServico(ordens_servico_id) {
    try {
      let queryParams = this.buildQueryParams({ordens_servico_id: ordens_servico_id}, false, -1)
      let result = await this._request.get(`${this.getBaseApiUrl()}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id, clientes_id) {
    try {
      let result = await this._request.delete(`${this.getBaseApiUrl(clientes_id)}/${id}`)
      return this.response('Cobrança apagada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}