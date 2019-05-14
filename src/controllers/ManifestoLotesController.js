'use strict'
import {
  ManifestoLotes
} from '../models/ManifestoLotes';
import {
  BaseController
} from './BaseController';

export class ManifestoLotesController extends BaseController {
  _baseApiUrl = ''

  getModel() {
    return new ManifestoLotes()
  }

  getBaseApiUrl(manifestos_id_principal) {
    return manifestos_id_principal ? `manifestos/${manifestos_id_principal}/lotes` : `manifestos/lotes`
  }

  async create(params, manifestos_id_principal) {
    try {
      let data = {
        manifestos_vinculado: params
      }
      let result = await this._request.post(this.getBaseApiUrl(manifestos_id_principal), data)
      return this.response('Manifesto adicionado ao lote com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async list(filter, page, limit, sortBy, descending, manifestos_id_principal) {
    try {
      let queryParams = this.buildQueryParams(false, page, limit, sortBy, descending)
      let result = await this._request.get(`${this.getBaseApiUrl(manifestos_id_principal)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async all(manifestos_id_principal) {
    try {
      let queryParams = this.buildQueryParams(false, false, -1)
      let result = await this._request.get(`${this.getBaseApiUrl(manifestos_id_principal)}${queryParams}`)
      return this.response(false, result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

  async delete(id, manifestos_id_principal) {
    try {
      let result = await this._request.delete(`${this.getBaseApiUrl(manifestos_id_principal)}/${id}`)
      return this.response('Manifesto removido do lote com sucesso.', result.data)
    } catch (error) {
      return this.response(false, false, error)
    }
  }

}