'use strict'
import axios from 'axios'
import store from './../store'


export class BaseController {
  _request = axios.create({
    baseURL: store.state.API_URL,
    headers: {
      'Authorization': `Bearer ${store.getters.GET_ACCESS_TOKEN}`
    }
  })

  // request() {
  //   return axios.create({
  //     baseURL: store.state.API_URL
  //   })
  // }

  response (message, data, error = false) {

    window.console.log('error',error.response)

    let responseError = null
    let responseData = null
    let responseMessage = null

    if (error) {
      if (error.response) {
        if (error.response.status == 401) {
          if (error.response.data && error.response.data.error_type && error.response.data.error_type == 'TOKEN_ERROR') {
            store.dispatch('FORCE_USER_LOGOUT', {
              message: 'Sua seção expirou, refaça o seu login.'
            })
            // router.push({ path: '/login' })
          }
        }
      }

      responseError = true
      responseData = error
      responseMessage = Array.isArray(error.response.data) ? error.response.data.join(', ') : error.response.data
    } else {
      responseError = false
      responseData = data
      responseMessage = message
    }

    return {
      error: responseError,
      data: responseData,
      message: responseMessage
    }
  }

  formatFilter (filter) {
    return Object.entries(filter).map( value => {
      if((value[1] != null && value[1] != '') || value[1] == 0 ) {
        return `${value[0]}:${value[1]}`
      }
    }).join(',')
  }

  buildQueryParams (filter, page, limit, sortBy, descending) {
    filter = this.formatFilter(filter)

    let queryParams = []
    queryParams.push('filter='+filter)
    queryParams.push('sort_direction='+(descending ? 'desc' : 'asc')) 
    
    if(page)
      queryParams.push('page='+page) 
    
    if(limit)
      queryParams.push('limit='+limit) 
    
    if(sortBy)
      queryParams.push('sort_by='+sortBy)

    return '?' + queryParams.join('&')
  }
}