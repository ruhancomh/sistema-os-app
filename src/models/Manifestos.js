'use strict'

export class Manifestos {
  constructor(
    ordens_servico_id = null,
    manifesto_tipos_operacao_id = null,
    gerador_id = null,
    gerador_observacao = null,
    clientes_id = null,
    numero_manifesto = null,
    motorista_id = null,
    veiculos_id = null,
    residuos_id = null,
    residuo_acondicionamentos_id = null,
    residuo_quantidade = null,
    residuo_unidade = null,
    residuo_estado_fisico = null,
    receptores_id = null,
    receptor_observacao = null,
    transportadores_id = null,
    data_geracao = null,
    data_recebimento = null,
    balanca_data_entrada = null,
    balanca_data_saida = null,
    balanca_hora_entrada = null,
    balanca_hora_saida = null,
    balanca_peso_entrada = null,
    balanca_peso_saida = null,
    balanca_unidade = null,
    balanca_peso_calculado = null,
    id = null
  ) {
    this.ordens_servico_id = ordens_servico_id
    this.manifesto_tipos_operacao_id = manifesto_tipos_operacao_id
    this.gerador_id = gerador_id
    this.gerador_observacao = gerador_observacao
    this.clientes_id = clientes_id
    this.numero_manifesto = numero_manifesto
    this.motorista_id = motorista_id
    this.veiculos_id = veiculos_id
    this.residuos_id = residuos_id
    this.residuo_acondicionamentos_id = residuo_acondicionamentos_id
    this.residuo_quantidade = residuo_quantidade
    this.residuo_unidade = residuo_unidade
    this.residuo_estado_fisico = residuo_estado_fisico
    this.receptores_id = receptores_id
    this.receptor_observacao = receptor_observacao
    this.transportadores_id = transportadores_id
    this.data_geracao = data_geracao
    this.data_recebimento = data_recebimento
    this.balanca_data_entrada = balanca_data_entrada
    this.balanca_data_saida = balanca_data_saida
    this.balanca_hora_entrada = balanca_hora_entrada
    this.balanca_hora_saida = balanca_hora_saida
    this.balanca_peso_entrada = balanca_peso_entrada
    this.balanca_peso_saida = balanca_peso_saida
    this.balanca_unidade = balanca_unidade
    this.balanca_peso_calculado = balanca_peso_calculado
    this.id = id
  }
}