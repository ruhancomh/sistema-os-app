'use strict'
import { Funcionarios } from '../models/Funcionarios';
import { BaseController } from './BaseController';

export class FuncionariosController extends BaseController {
  _baseApiUrl = 'funcionarios'

  defaultCargos = {
    motorista: 1
  }

  async create(params) {
    try {
      let funcionario = new Funcionarios(params.nome, params.funcionario_cargos_id)
      let result = await this._request.post(this._baseApiUrl, funcionario)
      return this.response('Funcionário adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params) {
    try {
      let funcionario = new Funcionarios(params.nome, params.funcionario_cargos_id, params.id)
      let result = await this._request.put(`${this._baseApiUrl}/${funcionario.id}`, funcionario)
      return this.response('Funcionário editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id) {
    try {
      let result = await this._request.get(`${this._baseApiUrl}/${id}`)
      return this.response('Funcionário carregado com sucesso.', result.data)
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

  async all (filter = false) {
    try {
      let queryParams = this.buildQueryParams(filter, false, -1)
      let result = await this._request.get(`${this._baseApiUrl}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async allMotoristas () {
    try {
      let queryParams = this.buildQueryParams({cargo:this.defaultCargos.motorista}, false, -1)
      let result = await this._request.get(`${this._baseApiUrl}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id) {
    try {
      let result = await this._request.delete(`${this._baseApiUrl}/${id}`)
      return this.response('Funcionário apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}