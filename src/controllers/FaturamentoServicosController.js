'use strict'
import {
  FaturamentoServicos
} from '../models/FaturamentoServicos';
import {
  BaseController
} from './BaseController';

export class FaturamentoServicosController extends BaseController {
  _baseApiUrl = ''

  getModel() {
    return new FaturamentoServicos()
  }

  getBaseApiUrl(faturamentos_id) {
    return faturamentos_id ? `faturamentos/${faturamentos_id}/servicos` : `faturamentos/servicos`
  }

  async create(params, faturamentos_id) {
    try {
      let data = {
        ordens_servico: params
      }
      let result = await this._request.post(this.getBaseApiUrl(faturamentos_id), data)
      return this.response('Faturamento adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params, faturamentos_id) {
    try {
      let data = {
        id: params.id,
        desconto: params.desconto,
        observacao: params.observacao
      }
      let result = await this._request.put(`${this.getBaseApiUrl(faturamentos_id)}/${data.id}`, data)
      return this.response('Faturamento editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id, faturamentos_id) {
    try {
      let result = await this._request.get(`${this.getBaseApiUrl(faturamentos_id)}/${id}`)
      return this.response('Faturamento carregado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending, faturamentos_id) {
    try {
      let queryParams = this.buildQueryParams(false, page, limit, sortBy, descending)
      let result = await this._request.get(`${this.getBaseApiUrl(faturamentos_id)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async all(faturamentos_id) {
    try {
      let queryParams = this.buildQueryParams(false, false, -1)
      let result = await this._request.get(`${this.getBaseApiUrl(faturamentos_id)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id, faturamentos_id) {
    try {
      let result = await this._request.delete(`${this.getBaseApiUrl(faturamentos_id)}/${id}`)
      return this.response('Faturamento apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}