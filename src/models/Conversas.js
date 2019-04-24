'use strict'

export class Conversas {
  constructor(
    data = null,
    descricao = null,
    clientes_id = null,
    funcionarios_id = null,
    conversa_acoes_id = null,
    data_agendamento = null,
    id = null
  ) {

    this.data = data 
    this.descricao = descricao 
    this.clientes_id = clientes_id 
    this.funcionarios_id = funcionarios_id 
    this.conversa_acoes_id = conversa_acoes_id 
    this.data_agendamento = data_agendamento
    this.id = id 
  }
}