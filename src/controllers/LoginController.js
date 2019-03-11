'use strict'
import { BaseController } from './BaseController';
import store from '../store';

export class LoginController extends BaseController {
  _baseApiUrl = 'auth'

  async login (email,password) {
    try {
      let result = await this._request.post(`${this._baseApiUrl}/login`,{
        email: email,
        password: password
      })

      store.dispatch('USER_LOGIN', {
        access_token: result.data.access_token,
        user: result.data.user
      })

      return {
        error: false,
        message: 'Login efetuado com sucesso'
      }
    }catch (error){
      return {
        error: true,
        message: 'Falha ao tentar realizar o seu login. Verifique se o e-mail/senha foram digitados corretamente.',
        data: error
      }
    }
  }

  async logout () {
    try {
      let result = await this._request.post(`${this._baseApiUrl}/logout`)

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