export default [
  {
    path: '/login',
    view: 'Login'
  },

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
  // EnderecoTipos
  {
    path: '/endereco-tipos',
    name: 'Tipos de endereço',
    view: 'EnderecoTiposList'
  },
  {
    path: '/endereco-tipos/adicionar',
    name: 'Adicionar novo tipo de endereço',
    view: 'EnderecoTiposAdd'
  },
  {
    path: '/endereco-tipos/editar/:id',
    name: 'Editar tipo de endereço',
    view: 'EnderecoTiposEdit'
  },
  // Servicos
  {
    path: '/servicos',
    name: 'Serviços',
    view: 'ServicosList'
  },
  {
    path: '/servicos/adicionar',
    name: 'Adicionar novo serviço',
    view: 'ServicosAdd'
  },
  {
    path: '/servicos/editar/:id',
    name: 'Editar serviço',
    view: 'ServicosEdit'
  },

  // ClienteAtividades
  {
    path: '/cliente-atividades',
    name: 'Atividades',
    view: 'ClienteAtividadesList'
  },
  {
    path: '/cliente-atividades/adicionar',
    name: 'Adicionar nova atividade',
    view: 'ClienteAtividadesAdd'
  },
  {
    path: '/cliente-atividades/editar/:id',
    name: 'Editar atividade',
    view: 'ClienteAtividadesEdit'
  },
  // ConversaAcoes
  {
    path: '/conversa-acoes',
    name: 'Ações de conversa',
    view: 'ClienteConversaAcoesList'
  },
  {
    path: '/conversa-acoes/adicionar',
    name: 'Adicionar nova ação de conversa',
    view: 'ClienteConversaAcoesAdd'
  },
  {
    path: '/conversa-acoes/editar/:id',
    name: 'Editar ação de conversa',
    view: 'ClienteConversaAcoesEdit'
  },

  // Clientes
  {
    path: '/clientes',
    name: 'Clientes',
    view: 'ClientesList'
  },
  {
    path: '/clientes/adicionar',
    name: 'Adicionar novo cliente',
    view: 'ClientesAdd'
  },
  {
    path: '/clientes/editar/:id',
    view: 'ClientesTabview',
    
    children: [
      // Detalhes
      {
        path: '',
        name: 'Detalhes do Cliente',
        view: 'ClientesEdit'
      },
      {
        path: 'detalhes',
        name: 'Detalhes do Cliente',
        view: 'ClientesEdit'
      },
      // ClienteContatos
      {
        path: 'contatos',
        name: 'Contatos do cliente',
        view: 'ClienteContatosList'
      },
      {
        path: 'contatos/adicionar',
        name: 'Adicionar novo contato',
        view: 'ClienteContatosAdd'
      },
      {
        path: 'contatos/editar/:cliente_contatos_id',
        name: 'Editar contatos',
        view: 'ClienteContatosEdit'
      },
      // ClienteConversas
      {
        path: 'conversas',
        name: 'Conversas do cliente',
        view: 'ClienteConversasList'
      },
      {
        path: 'conversas/adicionar',
        name: 'Adicionar nova conversa',
        view: 'ClienteConversasAdd'
      },
      {
        path: 'conversas/editar/:conversas_id',
        name: 'Editar conversa',
        view: 'ClienteConversasEdit'
      },
      // ClienteEnderecos
      {
        path: 'enderecos',
        name: 'Endereços do cliente',
        view: 'ClienteEnderecosList'
      },
      {
        path: 'enderecos/adicionar',
        name: 'Adicionar novo endereço',
        view: 'ClienteEnderecosAdd'
      },
      {
        path: 'enderecos/editar/:cliente_enderecos_id',
        name: 'Editar endereço',
        view: 'ClienteEnderecosEdit'
      },
      // ClienteCobrancas
      {
        path: 'cobrancas',
        name: 'Cobranças do cliente',
        view: 'ClienteCobrancasList'
      },
      {
        path: 'cobrancas/adicionar',
        name: 'Adicionar nova cobrança',
        view: 'ClienteCobrancasAdd'
      },
      {
        path: 'cobrancas/editar/:cliente_cobrancas_id',
        name: 'Editar cobrança',
        view: 'ClienteCobrancasEdit'
      },
      // ClientePropostas
      {
        path: 'propostas',
        name: 'Propostas do cliente',
        view: 'ClientePropostasList'
      },
      {
        path: 'propostas/adicionar',
        name: 'Adicionar nova proposta',
        view: 'ClientePropostasAdd'
      },
      {
        path: 'propostas/editar/:cliente_propostas_id',
        name: 'Editar proposta',
        view: 'ClientePropostasEdit'
      }
    ]
  },
  // Transportadores
  {
    path: '/transportadores',
    name: 'Transportadores',
    view: 'TransportadoresList'
  },
  {
    path: '/transportadores/adicionar',
    name: 'Adicionar novo transportador',
    view: 'TransportadoresAdd'
  },
  {
    path: '/transportadores/editar/:id',
    view: 'TransportadoresTabview',

    children:[
      // Detalhes
      {
        path: '',
        name: 'Detalhes do Transportador',
        view: 'TransportadoresEdit'
      },
      {
        path: 'detalhes',
        name: 'Detalhes do Transportador',
        view: 'TransportadoresEdit'
      },
      // TransportadorContatos
      {
        path: 'contatos',
        name: 'Contatos do transportador',
        view: 'TransportadorContatosList'
      },
      {
        path: 'contatos/adicionar',
        name: 'Novo contato do transportador',
        view: 'TransportadorContatosAdd'
      },
      {
        path: 'contatos/editar/:transportador_contatos_id',
        name: 'Editar contato do transportador',
        view: 'TransportadorContatosEdit'
      },
    ]
  },
  // Receptores
  {
    path: '/receptores',
    name: 'Receptores',
    view: 'ReceptoresList'
  },
  {
    path: '/receptores/adicionar',
    name: 'Adicionar novo receptor',
    view: 'ReceptoresAdd'
  },
  {
    path: '/receptores/editar/:id',
    view: 'ReceptoresTabview',

    children:[
      // Detalhes
      {
        path: '',
        name: 'Detalhes do Receptor',
        view: 'ReceptoresEdit'
      },
      {
        path: 'detalhes',
        name: 'Detalhes do Receptor',
        view: 'ReceptoresEdit'
      },
      // ReceptorContatos
      {
        path: 'contatos',
        name: 'Contatos do receptor',
        view: 'ReceptorContatosList'
      },
      {
        path: 'contatos/adicionar',
        name: 'Novo contato do receptor',
        view: 'ReceptorContatosAdd'
      },
      {
        path: 'contatos/editar/:receptor_contatos_id',
        name: 'Editar contato do receptor',
        view: 'ReceptorContatosEdit'
      },
    ]
  },
  // Residus
  {
    path: '/residuos',
    name: 'Residuos',
    view: 'ResiduosList'
  },
  {
    path: '/residuos/adicionar',
    name: 'Adicionar novo residuos',
    view: 'ResiduosAdd'
  },
  {
    path: '/residuos/editar/:id',
    name: 'Editar residuos',
    view: 'ResiduosEdit'
  },
  // ResiduoTratamentos
  {
    path: '/residuo-tratamentos',
    name: 'Tratamentos de residuos',
    view: 'ResiduoTratamentosList'
  },
  {
    path: '/residuo-tratamentos/adicionar',
    name: 'Adicionar novo tratamento de residuo',
    view: 'ResiduoTratamentosAdd'
  },
  {
    path: '/residuo-tratamentos/editar/:id',
    name: 'Editar tratamento de residuo',
    view: 'ResiduoTratamentosEdit'
  },
  // ResiduoClasses
  {
    path: '/residuo-classes',
    name: 'Classes de residuos',
    view: 'ResiduoClassesList'
  },
  {
    path: '/residuo-classes/adicionar',
    name: 'Adicionar nova classe de residuo',
    view: 'ResiduoClassesAdd'
  },
  {
    path: '/residuo-classes/editar/:id',
    name: 'Editar classe de residuo',
    view: 'ResiduoClassesEdit'
  },
]