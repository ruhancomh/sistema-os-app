'use strict'
import {
  ClienteEnderecos
} from '../models/ClienteEnderecos';
import {
  BaseController
} from './BaseController';

export class ClienteEnderecosController extends BaseController {
  _baseApiUrl = ''

  getModel() {
    return new ClienteEnderecos()
  }

  getBaseApiUrl(clientes_id) {
    window.console.log('id cliente', clientes_id)
    return clientes_id ? `clientes/${clientes_id}/enderecos` : `clientes/enderecos`
  }

  async create(params) {
    try {
      let clienteEndereco = new ClienteEnderecos(
        params.descricao,
        params.cnpj,
        params.logradouro,
        params.cep,
        params.telefone,
        params.observacao,
        params.clientes_id,
        params.cliente_contatos_id,
        params.cidades_id,
        params.endereco_tipos_id,
        params.bairros_id,
      )
      let result = await this._request.post(this.getBaseApiUrl(params.clientes_id), clienteEndereco)
      return this.response('Endereço adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let clienteEndereco = new ClienteEnderecos(
        params.descricao,
        params.cnpj,
        params.logradouro,
        params.cep,
        params.telefone,
        params.observacao,
        params.clientes_id,
        params.cliente_contatos_id,
        params.cidades_id,
        params.endereco_tipos_id,
        params.bairros_id,
        params.id
      )
      let result = await this._request.put(`${this.getBaseApiUrl(params.clientes_id)}/${clienteEndereco.id}`, clienteEndereco)
      return this.response('Endereço editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(clientes_id, id) {
    try {
      let result = await this._request.get(`${this.getBaseApiUrl(clientes_id)}/${id}`)

      return this.response('Endereço carregado com sucesso.', result.data)
      
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

  async delete(id, clientes_id) {
    try {
      let result = await this._request.delete(`${this.getBaseApiUrl(clientes_id)}/${id}`)
      return this.response('Endereço apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}