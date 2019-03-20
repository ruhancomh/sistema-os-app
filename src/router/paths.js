export default [
  {
    path: '/login',
    view: 'Login',
    meta: {
      layout: 'the-layout-empty'
    }
  },

  {
    path: '/',
    name: 'Dashboard',
    view: 'ClientesList',
    meta: {
      title: 'Dashboard',
    },
  },

  // Estados
  {
    path: '/estados',
    view: 'Estados',
    meta: {
      title: 'Estados',
    },
  },
  {
    path: '/estados/novo',
    view: 'EstadosAdd',
    meta: {
      title: 'Adicionar Estado',
    },
  },
  // Cidades
  {
    path: '/cidades',
    view: 'CidadesList',
    meta: {
      title: 'Cidades',
    },
  },
  {
    path: '/cidades/adicionar',
    view: 'CidadesAdd',
    meta: {
      title: 'Adicionar nova cidade',
    },
  },
  {
    path: '/cidades/editar/:id',
    view: 'CidadesEdit',
    meta: {
      title: 'Editar cidade',
    },
  },
  // Bairros
  {
    path: '/bairros',
    view: 'BairrosList',
    meta: {
      title: 'Bairros',
    },
  },
  {
    path: '/bairros/adicionar',
    view: 'BairrosAdd',
    meta: {
      title: 'Adicionar novo bairro',
    },
  },
  {
    path: '/bairros/editar/:id',
    view: 'BairrosEdit',
    meta: {
      title: 'Editar bairro',
    },
  },
  // FuncionarioCargos
  {
    path: '/funcionario-cargos',
    view: 'FuncionarioCargosList',
    meta: {
      title: 'Cargos',
    },
  },
  {
    path: '/funcionario-cargos/adicionar',
    view: 'FuncionarioCargosAdd',
    meta: {
      title: 'Adicionar novo cargo',
    },
  },
  {
    path: '/funcionario-cargos/editar/:id',
    view: 'FuncionarioCargosEdit',
    meta: {
      title: 'Editar cargo',
    },
  },
  // Funcionarios
  {
    path: '/funcionarios',
    view: 'FuncionariosList',
    meta: {
      title: 'Funcionários',
    },
  },
  {
    path: '/funcionarios/adicionar',
    view: 'FuncionariosAdd',
    meta: {
      title: 'Adicionar novo funcionário',
    },
  },
  {
    path: '/funcionarios/editar/:id',
    view: 'FuncionariosEdit',
    meta: {
      title: 'Editar funcionário',
    },
  },
  // EnderecoTipos
  {
    path: '/endereco-tipos',
    view: 'EnderecoTiposList',
    meta: {
      title: 'Tipos de endereço',
    },
  },
  {
    path: '/endereco-tipos/adicionar',
    view: 'EnderecoTiposAdd',
    meta: {
      title: 'Adicionar novo tipo de endereço',
    },
  },
  {
    path: '/endereco-tipos/editar/:id',
    view: 'EnderecoTiposEdit',
    meta: {
      title: 'Editar tipo de endereço',
    },
  },
  // Servicos
  {
    path: '/servicos',
    view: 'ServicosList',
    meta: {
      title: 'Serviços',
    },
  },
  {
    path: '/servicos/adicionar',
    view: 'ServicosAdd',
    meta: {
      title: 'Adicionar novo serviço',
    },
  },
  {
    path: '/servicos/editar/:id',
    view: 'ServicosEdit',
    meta: {
      title: 'Editar serviço',
    },
  },

  // Veiculos
  {
    path: '/veiculos',
    view: 'VeiculosList',
    meta: {
      title: 'Veículos',
    },
  },
  {
    path: '/veiculos/adicionar',
    view: 'VeiculosAdd',
    meta: {
      title: 'Adicionar novo veículo',
    },
  },
  {
    path: '/veiculos/editar/:id',
    view: 'VeiculosEdit',
    meta: {
      title: 'Editar veículo',
    },
  },

  // Equipamentos
  {
    path: '/equipamentos',
    view: 'EquipamentosList',
    meta: {
      title: 'Equipamentos',
    },
  },
  {
    path: '/equipamentos/adicionar',
    view: 'EquipamentosAdd',
    meta: {
      title: 'Adicionar novo equipamento',
    },
  },
  {
    path: '/equipamentos/editar/:id',
    view: 'EquipamentosEdit',
    meta: {
      title: 'Editar equipamento',
    },
  },

  // ClienteAtividades
  {
    path: '/cliente-atividades',
    view: 'ClienteAtividadesList',
    meta: {
      title: 'Atividades',
    },
  },
  {
    path: '/cliente-atividades/adicionar',
    view: 'ClienteAtividadesAdd',
    meta: {
      title: 'Adicionar nova atividade',
    },
  },
  {
    path: '/cliente-atividades/editar/:id',
    view: 'ClienteAtividadesEdit',
    meta: {
      title: 'Editar atividade',
    },
  },
  // ConversaAcoes
  {
    path: '/conversa-acoes',
    view: 'ClienteConversaAcoesList',
    meta: {
      title: 'Ações de conversa',
    },
  },
  {
    path: '/conversa-acoes/adicionar',
    view: 'ClienteConversaAcoesAdd',
    meta: {
      title: 'Adicionar nova ação de conversa',
    },
  },
  {
    path: '/conversa-acoes/editar/:id',
    view: 'ClienteConversaAcoesEdit',
    meta: {
      title: 'Editar ação de conversa',
    },
  },

  // Clientes
  {
    path: '/clientes',
    view: 'ClientesList',
    meta: {
      title: 'Clientes',
    },
  },
  {
    path: '/clientes/adicionar',
    view: 'ClientesAdd',
    meta: {
      title: 'Adicionar novo cliente',
    },
  },
  {
    path: '/clientes/editar/:id',
    name: '',
    view: 'ClientesTabview',
    
    children: [
      // Detalhes
      {
        path: '',
        view: 'ClientesEdit',
        meta: {
          title: 'Detalhes do Cliente',
        },
      },
      {
        path: 'detalhes',
        view: 'ClientesEdit',
        meta: {
          title: 'Detalhes do Cliente',
        },
      },
      // ClienteContatos
      {
        path: 'contatos',
        view: 'ClienteContatosList',
        meta: {
          title: 'Contatos do cliente',
        },
      },
      {
        path: 'contatos/adicionar',
        view: 'ClienteContatosAdd',
        meta: {
          title: 'Adicionar novo contato',
        },
      },
      {
        path: 'contatos/editar/:cliente_contatos_id',
        view: 'ClienteContatosEdit',
        meta: {
          title: 'Editar contatos',
        },
      },
      // ClienteConversas
      {
        path: 'conversas',
        view: 'ClienteConversasList',
        meta: {
          title: 'Conversas do cliente',
        },
      },
      {
        path: 'conversas/adicionar',
        view: 'ClienteConversasAdd',
        meta: {
          title: 'Adicionar nova conversa',
        },
      },
      {
        path: 'conversas/editar/:conversas_id',
        view: 'ClienteConversasEdit',
        meta: {
          title: 'Editar conversa',
        },
      },
      // ClienteEnderecos
      {
        path: 'enderecos',
        view: 'ClienteEnderecosList',
        meta: {
          title: 'Endereços do cliente',
        },
      },
      {
        path: 'enderecos/adicionar',
        view: 'ClienteEnderecosAdd',
        meta: {
          title: 'Adicionar novo endereço',
        },
      },
      {
        path: 'enderecos/editar/:cliente_enderecos_id',
        view: 'ClienteEnderecosEdit',
        meta: {
          title: 'Editar endereço',
        },
      },
      // ClienteCobrancas
      {
        path: 'cobrancas',
        view: 'ClienteCobrancasList',
        meta: {
          title: 'Cobranças do cliente',
        },
      },
      {
        path: 'cobrancas/adicionar',
        view: 'ClienteCobrancasAdd',
        meta: {
          title: 'Adicionar nova cobrança',
        },
      },
      {
        path: 'cobrancas/editar/:cliente_cobrancas_id',
        view: 'ClienteCobrancasEdit',
        meta: {
          title: 'Editar cobrança',
        },
      },
      // ClientePropostas
      {
        path: 'propostas',
        view: 'ClientePropostasList',
        meta: {
          title: 'Propostas do cliente',
        },
      },
      {
        path: 'propostas/adicionar',
        view: 'ClientePropostasAdd',
        meta: {
          title: 'Adicionar nova proposta',
        },
      },
      {
        path: 'propostas/editar/:cliente_propostas_id',
        view: 'ClientePropostasEdit',
        meta: {
          title: 'Editar proposta',
        },
      }
    ]
  },
  // Transportadores
  {
    path: '/transportadores',
    view: 'TransportadoresList',
    meta: {
      title: 'Transportadores',
    },
  },
  {
    path: '/transportadores/adicionar',
    view: 'TransportadoresAdd',
    meta: {
      title: 'Adicionar novo transportador',
    },
  },
  {
    path: '/transportadores/editar/:id',
    view: 'TransportadoresTabview',

    children:[
      // Detalhes
      {
        path: '',
        view: 'TransportadoresEdit',
        meta: {
          title: 'Detalhes do Transportador',
        },
      },
      {
        path: 'detalhes',
        view: 'TransportadoresEdit',
        meta: {
          title: 'Detalhes do Transportador',
        },
      },
      // TransportadorContatos
      {
        path: 'contatos',
        view: 'TransportadorContatosList',
        meta: {
          title: 'Contatos do transportador',
        },
      },
      {
        path: 'contatos/adicionar',
        view: 'TransportadorContatosAdd',
        meta: {
          title: 'Novo contato do transportador',
        },
      },
      {
        path: 'contatos/editar/:transportador_contatos_id',
        view: 'TransportadorContatosEdit',
        meta: {
          title: 'Editar contato do transportador',
        },
      },
    ]
  },
  // Receptores
  {
    path: '/receptores',
    view: 'ReceptoresList',
    meta: {
      title: 'Receptores',
    },
  },
  {
    path: '/receptores/adicionar',
    view: 'ReceptoresAdd',
    meta: {
      title: 'Adicionar novo receptor',
    },
  },
  {
    path: '/receptores/editar/:id',
    view: 'ReceptoresTabview',

    children:[
      // Detalhes
      {
        path: '',
        view: 'ReceptoresEdit',
        meta: {
          title: 'Detalhes do Receptor',
        },
      },
      {
        path: 'detalhes',
        view: 'ReceptoresEdit',
        meta: {
          title: 'Detalhes do Receptor',
        },
      },
      // ReceptorContatos
      {
        path: 'contatos',
        view: 'ReceptorContatosList',
        meta: {
          title: 'Contatos do receptor',
        },
      },
      {
        path: 'contatos/adicionar',
        view: 'ReceptorContatosAdd',
        meta: {
          title: 'Novo contato do receptor',
        },
      },
      {
        path: 'contatos/editar/:receptor_contatos_id',
        view: 'ReceptorContatosEdit',
        meta: {
          title: 'Editar contato do receptor',
        },
      },
    ]
  },
  // Residus
  {
    path: '/residuos',
    view: 'ResiduosList',
    meta: {
      title: 'Residuos',
    },
  },
  {
    path: '/residuos/adicionar',
    view: 'ResiduosAdd',
    meta: {
      title: 'Adicionar novo residuos',
    },
  },
  {
    path: '/residuos/editar/:id',
    view: 'ResiduosEdit',
    meta: {
      title: 'Editar residuos',
    },
  },
  // ResiduoTratamentos
  {
    path: '/residuo-tratamentos',
    view: 'ResiduoTratamentosList',
    meta: {
      title: 'Tratamentos de residuos',
    },
  },
  {
    path: '/residuo-tratamentos/adicionar',
    view: 'ResiduoTratamentosAdd',
    meta: {
      title: 'Adicionar novo tratamento de residuo',
    },
  },
  {
    path: '/residuo-tratamentos/editar/:id',
    view: 'ResiduoTratamentosEdit',
    meta: {
      title: 'Editar tratamento de residuo',
    },
  },
  // ResiduoClasses
  {
    path: '/residuo-classes',
    view: 'ResiduoClassesList',
    meta: {
      title: 'Classes de residuos',
    },
  },
  {
    path: '/residuo-classes/adicionar',
    view: 'ResiduoClassesAdd',
    meta: {
      title: 'Adicionar nova classe de residuo',
    },
  },
  {
    path: '/residuo-classes/editar/:id',
    view: 'ResiduoClassesEdit',
    meta: {
      title: 'Editar classe de residuo',
    },
  },

  // Ordens de Serviço
  {
    path: '/ordens-servico',
    view: 'OrdensServicoList',
    meta: {
      title: 'Ordens de Servico',
    },
  },
  {
    path: '/ordens-servico/adicionar',
    view: 'OrdensServicoAdd',
    meta: {
      title: 'Adicionar nova ordem de serviço',
    },
  },
  {
    path: '/ordens-servico/editar/:id',
    name: '',
    view: 'OrdensServicoTabview',
    
    children: [
      // Detalhes
      {
        path: '',
        view: 'OrdensServicoEdit',
        meta: {
          title: 'Detalhes da O.S',
        },
      },
      {
        path: 'detalhes',
        view: 'OrdensServicoEdit',
        meta: {
          title: 'Detalhes da O.S',
        },
      },
      // Balança
      {
        path: 'balanca',
        view: 'OrdensServicoBalancaEdit',
        meta: {
          title: 'Dados da balança',
        },
      },
      // Serviços
      {
        path: 'servicos',
        view: 'OrdensServicoServicosEdit',
        meta: {
          title: 'Serviços da OS',
        },
      }
    ]
  }
]