'use strict'
import { Clientes } from '../models/Clientes';
import { BaseController } from './BaseController';

export class ClientesController extends BaseController {
  _baseApiUrl = 'clientes'

  getModel() {
    return new Clientes()
  }

  async create(params) {
    try {
      let cliente = new Clientes(
        params.razao_social,
        params.nome_fantasia,
        params.cnpj,
        params.cpf,
        params.inscricao_estadual,
        params.telefone_principal,
        params.fax,
        params.numero_licensa,
        params.ativo ,
        params.prospeccao,
        params.porcentagem_comissao_vendedor,
        params.pendencia,
        params.pendencia_motivo,
        params.obervacao,
        params.informacao_faturamento,
        params.rastreabilidade_mri ,
        params.faturamento_mensal ,
        params.contrato_manutencao ,
        params.cliente_atividades_id,
        params.funcionarios_id,
      )
      let result = await this._request.post(this._baseApiUrl, cliente)
      return this.response('Cliente adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let cliente = new Clientes(
        params.razao_social,
        params.nome_fantasia,
        params.cnpj,
        params.cpf,
        params.inscricao_estadual,
        params.telefone_principal,
        params.fax,
        params.numero_licensa,
        params.ativo,
        params.prospeccao,
        params.porcentagem_comissao_vendedor,
        params.pendencia,
        params.pendencia_motivo,
        params.observacao,
        params.informacao_faturamento,
        params.rastreabilidade_mri,
        params.faturamento_mensal,
        params.contrato_manutencao,
        params.cliente_atividades_id,
        params.funcionarios_id,
        params.id
      )
      let result = await this._request.put(`${this._baseApiUrl}/${cliente.id}`, cliente)
      return this.response('Cliente editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Cliente carregado com sucesso.', result.data)
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
      return this.response('Cliente apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}