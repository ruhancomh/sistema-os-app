'use strict'

export class Conversas {
  constructor(
    data = null,
    descricao = null,
    clientes_id = null,
    funcionarios_id = null,
    conversa_acoes_id = null,
    id = null
  ) {

    this.data = data 
    this.descricao = descricao 
    this.clientes_id = clientes_id 
    this.funcionarios_id = funcionarios_id 
    this.conversa_acoes_id = conversa_acoes_id 
    this.id = id 
  }
}