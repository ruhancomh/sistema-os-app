'use strict'

export class ManifestoLotes {

  constructor(
    manifestos_id_principal = null,
    manifestos_id_vinculado = null,
  ) {
    this.manifestos_id_principal = manifestos_id_principal
    this.manifestos_id_vinculado = manifestos_id_vinculado
  }
}