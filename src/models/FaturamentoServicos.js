'use strict'

export class FaturamentoServicos {

  constructor(
    id = null,
    desconto = null,
    observacao = null,
    faturamentos_id = null,
    ordens_servico_id = null,
    ordem_servico_servicos_id = null,
    servicos_id = null,
  ) {
    this.faturamentos_id = faturamentos_id
    this.ordens_servico_id = ordens_servico_id
    this.ordem_servico_servicos_id = ordem_servico_servicos_id
    this.servicos_id = servicos_id
    this.desconto = desconto
    this.observacao = observacao
    this.id = id
  }
}