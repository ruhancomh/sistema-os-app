'use strict'

export class ClienteEnderecos {
  constructor(
    descricao = null,
    cnpj = null,
    logradouro = null,
    cep = null,
    telefone = null,
    observacao = null,
    clientes_id = null,
    cliente_contatos_id = null,
    cidades_id = null,
    endereco_tipos_id = null,
    bairros_id = null,
    id = null
  ) {

    this.descricao = descricao
    this.cnpj = cnpj
    this.logradouro = logradouro
    this.cep = cep
    this.telefone = telefone
    this.observacao = observacao
    this.clientes_id = clientes_id
    this.cliente_contatos_id = cliente_contatos_id
    this.cidades_id = cidades_id
    this.endereco_tipos_id = endereco_tipos_id
    this.bairros_id = bairros_id
    this.id = id
  }
}