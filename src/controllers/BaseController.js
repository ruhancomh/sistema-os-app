'use strict'
import axios from 'axios'
import store from './../store'

export class BaseController {
  _request = axios.create({
    // baseURL: 'http://127.0.0.1:8000/api/'
    baseURL: store.state.API_URL
  })

  response (message, data, error = false) {

    let responseError = null
    let responseData = null
    let responseMessage = null

    if (error) {
      responseError = true
      responseData = error
      responseMessage = error.response.data.join(', ')
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