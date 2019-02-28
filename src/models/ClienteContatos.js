'use strict'

export class ClienteContatos {
  constructor(
    nome = null,
    cargo = null,
    telefone = null,
    email = null,
    clientes_id = null,
    id = null
  ) {

    this.nome = nome 
    this.cargo = cargo 
    this.telefone = telefone 
    this.email = email 
    this.clientes_id = clientes_id 
    this.id = id 
  }
}