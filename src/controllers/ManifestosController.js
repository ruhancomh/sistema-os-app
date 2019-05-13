'use strict'
import { Manifestos, ManifestosBalanca } from '../models/Manifestos';
import { BaseController } from './BaseController';

export class ManifestosController extends BaseController {
  _baseApiUrl = 'manifestos'

  getModel() {
    let model = new Manifestos()
    return model
  }

  async create(params) {
    try {
      let manifesto = new Manifestos(
        params.ordens_servico_id,
        params.manifesto_tipos_operacao_id,
        params.gerador_id,
        params.gerador_observacao,
        params.clientes_id,
        params.numero_manifesto,
        params.motorista_id,
        params.veiculos_id,
        params.residuos_id,
        params.residuo_acondicionamentos_id,
        params.residuo_quantidade,
        params.residuo_unidade,
        params.residuo_estado_fisico,
        params.receptores_id,
        params.receptor_observacao,
        params.transportadores_id,
        params.data_geracao,
        params.data_recebimento,
      )
      let result = await this._request.post(this._baseApiUrl, manifesto)
      return this.response('Manifesto adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let manifesto = new Manifestos(
        params.ordens_servico_id,
        params.manifesto_tipos_operacao_id,
        params.gerador_id,
        params.gerador_observacao,
        params.clientes_id,
        params.numero_manifesto,
        params.motorista_id,
        params.veiculos_id,
        params.residuos_id,
        params.residuo_acondicionamentos_id,
        params.residuo_quantidade,
        params.residuo_unidade,
        params.residuo_estado_fisico,
        params.receptores_id,
        params.receptor_observacao,
        params.transportadores_id,
        params.data_geracao,
        params.data_recebimento,
        params.id
      )
      let result = await this._request.put(`${this._baseApiUrl}/${manifesto.id}`, manifesto)
      return this.response('Manifesto editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async updateBlanca(params) {
    try {
      let manifesto = new ManifestosBalanca(
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
      let result = await this._request.put(`${this._baseApiUrl}/${manifesto.id}`, manifesto)
      return this.response('Manifesto editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Manifesto carregado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async getBalanca(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Manifesto carregado com sucesso.', result.data)
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
      return this.response('Manifesto apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}