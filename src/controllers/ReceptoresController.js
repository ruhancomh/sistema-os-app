'use strict'
import { Receptores } from '../models/Receptores';
import { BaseController } from './BaseController';

export class ReceptoresController extends BaseController {
  _baseApiUrl = 'receptores'

  getModel() {
    return new Receptores()
  }

  async create(params) {
    try {
      let receptor = new Receptores(
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
      let result = await this._request.post(this._baseApiUrl, receptor)
      return this.response('Receptor adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let receptor = new Receptores(
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
      let result = await this._request.put(`${this._baseApiUrl}/${receptor.id}`, receptor)
      return this.response('Receptor editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Receptor carregado com sucesso.', result.data)
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
      return this.response('Receptor apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}