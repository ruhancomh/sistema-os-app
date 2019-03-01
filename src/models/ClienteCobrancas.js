'use strict'

export class ClienteCobrancas {
  constructor(
    data = null,
    vencimento = null,
    valor = null,
    referencia = null,
    porcentagem = null,
    dia = null,
    observacao = null,
    servicos_id = null,
    clientes_id = null,
    id = null
  ) {

    this.data = data
    this.vencimento = vencimento
    this.valor = valor
    this.referencia = referencia
    this.porcentagem = porcentagem
    this.dia = dia
    this.observacao = observacao
    this.servicos_id = servicos_id
    this.clientes_id = clientes_id
    this.id = id 
  }
}