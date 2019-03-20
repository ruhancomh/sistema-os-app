'use strict'

export class OrdemServicoServicos {
  constructor (
    valor_unitario = null,
    valor_total = null,
    quantidade = null,
    observacao = null,
    ordens_servico_id = null,
    servicos_id = null,
    id = null
  ){
    this.valor_unitario = valor_unitario
    this.valor_total = valor_total
    this.quantidade = quantidade
    this.observacao = observacao
    this.ordens_servico_id = ordens_servico_id
    this.servicos_id = servicos_id
    this.id = id
  }
}