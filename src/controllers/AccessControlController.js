'use strict'
import { BaseController } from './BaseController';
import store from '../store';

export class AccessControlController extends BaseController {
  getBaseApiUrl() {
    return 'controle-acesso'
  }

  async loadPermissions() {
    try {
      let result =  await this.getRequest().get(`${this.getBaseApiUrl()}/permissoes/usuario`)

      await store.dispatch('USER_LOAD_PERMISSIONS', {
        user_permissions: result.data.permissoes
      })
    } catch (error){
      return this.response('Falha ao tentar carregar as permissões de acesso do usuário.', error, error)
    }
  }  

}