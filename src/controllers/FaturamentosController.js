'use strict'
import { Faturamentos, FaturamentosNotaFiscal } from '../models/Faturamentos';
import { BaseController } from './BaseController';

export class FaturamentosController extends BaseController {
  _baseApiUrl = 'faturamentos'

  getModel() {
    let model = new Faturamentos()
    return model
  }

  async create(params) {
    try {
      let ordemServico = new Faturamentos(
        params.data_faturamento,
        params.clientes_id,
        params.funcionarios_id,
        params.observacoes_compra,
        params.observacoes_servicos,
      )
      let result = await this._request.post(this._baseApiUrl, ordemServico)
      return this.response('Faturamento adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let ordemServico = new Faturamentos(
        params.data_faturamento,
        params.clientes_id,
        params.funcionarios_id,
        params.observacoes_compra,
        params.observacoes_servicos,
        params.id
      )
      let result = await this._request.put(`${this._baseApiUrl}/${ordemServico.id}`, ordemServico)
      return this.response('Faturamento editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Faturamento carregado com sucesso.', result.data)
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
      return this.response('Faturamento apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async updateNotaFiscal(params) {
    try {
      let ordemServico = new FaturamentosNotaFiscal(
        params.data_vencimento,
        params.data_emissao_nota,
        params.numero_nota,
        params.numero_documento,
        params.valor,
        params.valor_pago,
        params.observacoes,
        params.empresa_fatura,
        params.id
      )
      let result = await this._request.put(`${this._baseApiUrl}/${ordemServico.id}`, ordemServico)
      return this.response('Nota fiscal editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  listEmpresasFaturamento () {
    return {
      data : [
        {
          id: 'CLEAN',
          descricao: 'CLEAN'
        },
        {
          id: 'CSA',
          descricao: 'CSA'
        }
      ]
    }
  }

}