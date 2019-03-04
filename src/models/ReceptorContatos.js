'use strict'

export class ReceptorContatos {
  constructor(
    nome = null,
    cargo = null,
    telefone = null,
    email = null,
    receptores_id = null,
    id = null
  ) {

    this.nome = nome 
    this.cargo = cargo 
    this.telefone = telefone 
    this.email = email 
    this.receptores_id = receptores_id 
    this.id = id 
  }
}