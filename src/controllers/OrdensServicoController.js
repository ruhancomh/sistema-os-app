'use strict'
import { OrdensServico, OrdensServicoBalanca } from '../models/OrdensServico';
import { BaseController } from './BaseController';

export class OrdensServicoController extends BaseController {
  _baseApiUrl = 'ordens-servico'

  getModel() {
    return new OrdensServico()
  }

  async create(params) {
    try {
      let ordemServico = new OrdensServico(
        params.codigo_os,
        params.data_criacao,
        params.ordem_servico_tipos_id,
        params.funcionarios_id,
        params.clientes_id,
        params.atracacao_id,
        params.atracacao_observacao,
        params.equipamentos_id,
        params.motorista_id,
        params.veiculos_id,
        params.km_inicial,
        params.km_final,
        params.residuos_id,
        params.residuo_quantidade,
        params.residuo_unidade,
        params.gerador_id,
        params.gerador_observacao,
        params.receptores_id,
        params.receptor_observacao,
        params.servico_observacao,
        params.empresa_terceirizada,
        params.nota_fiscal_numero,
        params.comentarios,
      )
      let result = await this._request.post(this._baseApiUrl, ordemServico)
      return this.response('Ordem de serviço adicionada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let ordemServico = new OrdensServico(
        params.codigo_os,
        params.data_criacao,
        params.ordem_servico_tipos_id,
        params.funcionarios_id,
        params.clientes_id,
        params.atracacao_id,
        params.atracacao_observacao,
        params.equipamentos_id,
        params.motorista_id,
        params.veiculos_id,
        params.km_inicial,
        params.km_final,
        params.residuos_id,
        params.residuo_quantidade,
        params.residuo_unidade,
        params.gerador_id,
        params.gerador_observacao,
        params.receptores_id,
        params.receptor_observacao,
        params.servico_observacao,
        params.empresa_terceirizada,
        params.comentarios,
        params.nota_fiscal_numero,
        params.id
      )
      let result = await this._request.put(`${this._baseApiUrl}/${ordemServico.id}`, ordemServico)
      return this.response('Ordem de serviço editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async updateBlanca(params) {
    try {
      let ordemServico = new OrdensServicoBalanca(
        params.balanca_data_entrada,
        params.balanca_data_saida,
        params.balanca_hora_entrada,
        params.balanca_hora_saida,
        params.balanca_peso_entrada,
        params.balanca_peso_saida,
        params.balanca_unidade,
        params.balanca_peso_calculado,
        params.id
      )
      let result = await this._request.put(`${this._baseApiUrl}/${ordemServico.id}`, ordemServico)
      return this.response('Ordem de serviço editada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Ordem de serviço carregada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async getBalanca(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Ordem de serviço carregada com sucesso.', result.data)
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
      return this.response('Ordem de serviço apagada com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}