'use strict'

export class ClientePropostas {
  constructor(
    data = null,
    numero = null,
    aprovado = false,
    referencia_1 = null,
    referencia_2 = null,
    referencia_3 = null,
    observacao = null,
    servicos_id = null,
    clientes_id = null,
    funcionarios_id = null,
    id = null
  ) {

    this.data = data
    this.numero = numero
    this.aprovado = aprovado
    this.referencia_1 = referencia_1
    this.referencia_2 = referencia_2
    this.referencia_3 = referencia_3
    this.observacao = observacao
    this.servicos_id = servicos_id
    this.clientes_id = clientes_id
    this.funcionarios_id = funcionarios_id
    this.id = id 
  }
}