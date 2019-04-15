'use strict'

export class ClienteCobrancas {
  constructor(
    data = null,
    valor = null,
    referencia = null,
    observacao = null,
    servicos_id = null,
    clientes_id = null,
    id = null
  ) {

    this.data = data
    this.valor = valor
    this.referencia = referencia
    this.observacao = observacao
    this.servicos_id = servicos_id
    this.clientes_id = clientes_id
    this.id = id 
  }
}