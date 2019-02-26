export default [{
    path: '/estados',
    name: 'Estados',
    view: 'Estados'
  },
  {
    path: '/estados/novo',
    name: 'Adicionar Estado',
    view: 'EstadosAdd'
  },
  {
    path: '/cidades',
    name: 'Cidades',
    view: 'CidadesList'
  },
  {
    path: '/cidades/adicionar',
    name: 'Adicionar nova cidade',
    view: 'CidadesAdd'
  },
  {
    path: '/cidades/editar/:id',
    name: 'Editar cidade',
    view: 'CidadesEdit'
  },
  {
    path: '/bairros',
    name: 'Bairros',
    view: 'BairrosList'
  },
  {
    path: '/bairros/adicionar',
    name: 'Adicionar novo bairro',
    view: 'BairrosAdd'
  },
  {
    path: '/bairros/editar/:id',
    name: 'Editar bairro',
    view: 'BairrosEdit'
  }
]