'use strict'

export class Faturamentos {

  constructor(
    data_faturamento = null,
    clientes_id = null,
    funcionarios_id = null,
    observacoes_compra = null,
    observacoes_servicos = null,
    id = null
  ) {
    this.data_faturamento = data_faturamento
    this.clientes_id = clientes_id
    this.funcionarios_id = funcionarios_id
    this.observacoes_compra = observacoes_compra
    this.observacoes_servicos = observacoes_servicos
    this.id = id
  }
}

export class FaturamentosNotaFiscal {
  constructor(
    data_vencimento = null,
    data_emissao_nota = null,
    numero_nota = null,
    numero_documento = null,
    valor = null,
    valor_pago = null,
    observacoes = null,
    empresa_fatura = null,
    id = null
  ) {
    this.data_vencimento = data_vencimento
    this.observacoes = observacoes
    this.numero_nota = numero_nota
    this.data_emissao_nota = data_emissao_nota
    this.valor = valor
    this.valor_pago = valor_pago
    this.numero_documento = numero_documento
    this.empresa_fatura = empresa_fatura
    this.id = id
  }
}