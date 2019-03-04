'use strict'

export class TransportadorContatos {
  constructor(
    nome = null,
    cargo = null,
    telefone = null,
    email = null,
    transportadores_id = null,
    id = null
  ) {

    this.nome = nome 
    this.cargo = cargo 
    this.telefone = telefone 
    this.email = email 
    this.transportadores_id = transportadores_id 
    this.id = id 
  }
}