'use strict'
import { Transportadores } from '../models/Transportadores';
import { BaseController } from './BaseController';

export class TransportadoresController extends BaseController {
  _baseApiUrl = 'transportadores'

  getModel() {
    return new Transportadores()
  }

  async create(params) {
    try {
      let transportador = new Transportadores(
        params.razao_social,
        params.nome_fantasia,
        params.cpf,
        params.cnpj,
        params.inscricao_estadual,
        params.logradouro,
        params.cep,
        params.cidades_id,
        params.bairros_id,
        params.telefone,
        params.fax,
        params.numero_licenca,
        params.vencimento_licenca,
        params.observacao,
      )
      let result = await this._request.post(this._baseApiUrl, transportador)
      return this.response('Transportador adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let transportador = new Transportadores(
        params.razao_social,
        params.nome_fantasia,
        params.cpf,
        params.cnpj,
        params.inscricao_estadual,
        params.logradouro,
        params.cep,
        params.cidades_id,
        params.bairros_id,
        params.telefone,
        params.fax,
        params.numero_licenca,
        params.vencimento_licenca,
        params.observacao,
        params.id
      )
      let result = await this._request.put(`${this._baseApiUrl}/${transportador.id}`, transportador)
      return this.response('Transportador editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Transportador carregado com sucesso.', result.data)
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
      return this.response('Transportador apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}