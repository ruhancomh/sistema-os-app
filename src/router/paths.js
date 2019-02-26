export default [
  // Estados
  {
    path: '/estados',
    name: 'Estados',
    view: 'Estados'
  },
  {
    path: '/estados/novo',
    name: 'Adicionar Estado',
    view: 'EstadosAdd'
  },
  // Cidades
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
  // Bairros
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
  },
  // FuncionarioCargos
  {
    path: '/funcionario-cargos',
    name: 'Cargos',
    view: 'FuncionarioCargosList'
  },
  {
    path: '/funcionario-cargos/adicionar',
    name: 'Adicionar novo cargo',
    view: 'FuncionarioCargosAdd'
  },
  {
    path: '/funcionario-cargos/editar/:id',
    name: 'Editar cargo',
    view: 'FuncionarioCargosEdit'
  },
  // Funcionarios
  {
    path: '/funcionarios',
    name: 'Funcionários',
    view: 'FuncionariosList'
  },
  {
    path: '/funcionarios/adicionar',
    name: 'Adicionar novo funcionário',
    view: 'FuncionariosAdd'
  },
  {
    path: '/funcionarios/editar/:id',
    name: 'Editar funcionário',
    view: 'FuncionariosEdit'
  },
]