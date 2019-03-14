'use strict'
import {
  ReceptorContatos
} from '../models/ReceptorContatos';
import {
  BaseController
} from './BaseController';

export class ReceptorContatosController extends BaseController {
  _baseApiUrl = ''

  getModel() {
    return new ReceptorContatos()
  }

  getBaseApiUrl(receptores_id) {
    return `receptores/${receptores_id}/contatos`
  }

  async create(params, receptores_id) {
    try {
      let receptorContato = new ReceptorContatos(
        params.nome,
        params.cargo,
        params.telefone,
        params.email,
        params.receptores_id
      )
      let result = await this._request.post(this.getBaseApiUrl(receptores_id), receptorContato)
      return this.response('Contato adicionado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async update(params, receptores_id) {
    try {
      let receptorContato = new ReceptorContatos(
        params.nome,
        params.cargo,
        params.telefone,
        params.email,
        params.receptores_id,
        params.id
      )
      let result = await this._request.put(`${this.getBaseApiUrl(receptores_id)}/${receptorContato.id}`, receptorContato)
      return this.response('Contato editado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async get(id, receptores_id) {
    try {
      let result = await this._request.get(`${this.getBaseApiUrl(receptores_id)}/${id}`)
      return this.response('Contato carregado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending, receptores_id) {
    try {
      let queryParams = this.buildQueryParams(filter, page, limit, sortBy, descending)
      let result = await this._request.get(`${this.getBaseApiUrl(receptores_id)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async all(receptores_id) {
    try {
      let queryParams = this.buildQueryParams(false, false, -1)
      let result = await this._request.get(`${this.getBaseApiUrl(receptores_id)}${queryParams}`)
      window.console.log('contato',result)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id, receptores_id) {
    try {
      let result = await this._request.delete(`${this.getBaseApiUrl(receptores_id)}/${id}`)
      return this.response('Contato apagado com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}