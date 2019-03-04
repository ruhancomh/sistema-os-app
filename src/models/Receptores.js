'use strict'

export class Receptores {

  constructor(
    razao_social = null,
    nome_fantasia = null,
    cpf = null,
    cnpj = null,
    inscricao_estadual = null,
    logradouro = null,
    cep = null,
    cidades_id = null,
    bairros_id = null,
    telefone = null,
    fax = null,
    numero_licenca = null,
    vencimento_licenca = null,
    observacao = null,
    id = null
  ) {
    this.razao_social = razao_social
    this.nome_fantasia = nome_fantasia
    this.cpf = cpf
    this.cnpj = cnpj
    this.inscricao_estadual = inscricao_estadual
    this.logradouro = logradouro
    this.cep = cep
    this.cidades_id = cidades_id
    this.bairros_id = bairros_id
    this.telefone = telefone
    this.fax = fax
    this.numero_licenca = numero_licenca
    this.vencimento_licenca = vencimento_licenca
    this.observacao = observacao
    this.id = id
  }
}