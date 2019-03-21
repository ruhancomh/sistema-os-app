'use strict'
import { BaseController } from './BaseController';
import { AccessControlController } from './AccessControlController';
import store from '../store';

export class LoginController extends BaseController {
  getBaseApiUrl() {
    return 'auth'
  }



  async login (email,password) {
    try {
      let result = await this._request.post(`${this.getBaseApiUrl()}/login`,{
        email: email,
        password: password
      })

      await store.dispatch('USER_LOGIN', {
        access_token: result.data.access_token,
        user: result.data.user
      })

      await new AccessControlController().loadPermissions()

      return {
        error: false,
        message: 'Login efetuado com sucesso'
      }
    }catch (error){
      // return {
      //   error: true,
      //   message: 'Falha ao tentar realizar o seu login. Verifique se o e-mail/senha foram digitados corretamente.',
      //   data: error
      // }

      return this.response('Falha ao tentar realizar o seu login. Verifique se o e-mail/senha foram digitados corretamente.', error, error)
    }
  }

  async logout () {
    try {
      await this._request.post(`${this.getBaseApiUrl()}/logout`)

      store.dispatch('USER_LOGOUT')
      
      return {
        error: false,
        message: 'Logout realizado com sucesso'
      }
    } catch (error) {
      return {
        error: true,
        message: 'Falha ao tentar sair do sitema.',
        data: error
      }
    }
  }
}