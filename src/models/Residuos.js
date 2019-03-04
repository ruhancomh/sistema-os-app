'use strict'

export class Residuos {
  constructor(
    grupo = null,
    descricao = null,
    codigo = null,
    onu = null,
    residuo_tratamentos_id = null,
    residuo_classes_id = null,
    id = null
  ) {
    this.grupo = grupo
    this.descricao = descricao
    this.codigo = codigo
    this.onu = onu
    this.residuo_tratamentos_id = residuo_tratamentos_id
    this.residuo_classes_id = residuo_classes_id
    this.id = id
  }
}