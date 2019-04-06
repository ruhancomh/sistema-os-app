'use strict'

export class Faturamentos {

  constructor(
    clientes_id = null,
    data_faturamento = null,
    data_vencimento = null,
    observacoes = null,
    funcionarios_id = null,
    numero_nota = null,
    data_emissao_nota = null,
    valor = null,
    valor_pago = null,
    numero_documento = null,
    observacoes_compra = null,
    observacoes_servicos = null,
    id = null
  ) {
    this.clientes_id = clientes_id,
    this.data_faturamento = data_faturamento,
    this.data_vencimento = data_vencimento,
    this.observacoes = observacoes,
    this.funcionarios_id = funcionarios_id,
    this.numero_nota = numero_nota,
    this.data_emissao_nota = data_emissao_nota,
    this.valor = valor,
    this.valor_pago = valor_pago,
    this.numero_documento = numero_documento,
    this.observacoes_compra = observacoes_compra,
    this.observacoes_servicos = observacoes_servicos,
    this.id = id
  }
}