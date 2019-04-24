(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1113fba2"],{"77a8":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticStyle:{padding:"0px"},attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-text",[r("v-form",{ref:"form",on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{label:"Descrição"},model:{value:e.formFields.descricao,callback:function(t){e.$set(e.formFields,"descricao",t)},expression:"formFields.descricao"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{mask:"##.###.###/####-##",label:"CNPJ",rules:[e.formRules.default.required],required:"","return-masked-value":""},model:{value:e.formFields.cnpj,callback:function(t){e.$set(e.formFields,"cnpj",t)},expression:"formFields.cnpj"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{label:"Telefone","return-masked-value":"",mask:"(##) ##########"},model:{value:e.formFields.telefone,callback:function(t){e.$set(e.formFields,"telefone",t)},expression:"formFields.telefone"}})],1),r("v-flex",{attrs:{xs6:"",md4:""}},[r("v-layout",[r("v-select",{attrs:{items:e.enderecoTiposOptions,loading:e.enderecoTiposOptionsLoad,label:"Tipo","item-text":"descricao","item-value":"id"},model:{value:e.formFields.endereco_tipos_id,callback:function(t){e.$set(e.formFields,"endereco_tipos_id",t)},expression:"formFields.endereco_tipos_id"}}),r("endereco-tipo-light-form",{on:{success:function(t){return e.enderecoTipoAddSuccess(t)}}})],1)],1),r("v-flex",{attrs:{xs12:"",md2:""}},[r("v-text-field",{attrs:{label:"CEP","return-masked-value":"",mask:"##.###-###",rules:[e.formRules.default.required],required:""},model:{value:e.formFields.cep,callback:function(t){e.$set(e.formFields,"cep",t)},expression:"formFields.cep"}})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{label:"Logradouro",rules:[e.formRules.default.required],required:""},model:{value:e.formFields.logradouro,callback:function(t){e.$set(e.formFields,"logradouro",t)},expression:"formFields.logradouro"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-select",{attrs:{items:e.estadosOptions,loading:e.estadosOptionsLoad,label:"Estado","item-text":"nome","item-value":"id"},model:{value:e.estados_id,callback:function(t){e.estados_id=t},expression:"estados_id"}})],1),r("v-flex",{attrs:{xs12:"",md5:""}},[r("v-select",{attrs:{items:e.cidadesOptions,loading:e.cidadesOptionsLoad,label:"Cidade","item-text":"nome","item-value":"id","no-data-text":"Selecione um estado",rules:[e.formRules.default.required],required:""},model:{value:e.formFields.cidades_id,callback:function(t){e.$set(e.formFields,"cidades_id",t)},expression:"formFields.cidades_id"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-layout",[r("v-select",{attrs:{items:e.bairrosOptions,loading:e.bairrosOptionsLoad,label:"Bairro","item-text":"nome","item-value":"id","no-data-text":"Seleciona uma cidade"},model:{value:e.formFields.bairros_id,callback:function(t){e.$set(e.formFields,"bairros_id",t)},expression:"formFields.bairros_id"}}),r("bairro-light-form",{attrs:{"cidades-id":this.formFields.cidades_id},on:{success:function(t){return e.bairroAddSuccess(t)}}})],1)],1),r("v-flex",{attrs:{xs12:"",md5:""}},[r("v-select",{attrs:{items:e.clienteContatosOptions,loading:e.clienteContatosOptionsLoad,label:"Contato","item-text":"nome","item-value":"id"},model:{value:e.formFields.cliente_contatos_id,callback:function(t){e.$set(e.formFields,"cliente_contatos_id",t)},expression:"formFields.cliente_contatos_id"}})],1),r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-textarea",{attrs:{label:"Observações"},model:{value:e.formFields.observacao,callback:function(t){e.$set(e.formFields,"observacao",t)},expression:"formFields.observacao"}})],1)],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},a=[],i=(r("96cf"),r("3b8d")),s=r("cebc"),o=r("2f62"),c=r("9410"),d=r("2e88"),l=r("8b35"),u=r("823f"),p=r("1718"),f=r("8d64"),h=r("1266"),m=r("e46e"),v={components:{BairroLightForm:c["a"],EnderecoTipoLightForm:d["a"]},data:function(){return{loading:!1,valid:!1,formFields:{},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}},clienteContatosOptions:[],clienteContatosOptionsLoad:!1,enderecoTiposOptions:[],enderecoTiposOptionsLoad:!1,estados_id:"",estadosOptions:[],estadosOptionsLoad:!1,cidadesOptions:[],cidadesOptionsLoad:!1,bairrosOptions:[],bairrosOptionsLoad:!1,cliente:!1}},methods:Object(s["a"])({},Object(o["c"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{save:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=11;break}return this.loading=!0,t=new l["a"],e.next=5,t.create(this.formFields);case 5:r=e.sent,this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),r.error||this.$router.push({path:"/clientes/editar/".concat(this.getClienteID(),"/enderecos")}),this.loading=!1,e.next=12;break;case 11:this.$refs.form.validate();case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadCliente:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new m["a"],e.next=3,t.get(this.getClienteID());case 3:r=e.sent,this.cliente=!r.error&&r.data;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadEnderecoTipos:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.enderecoTiposOptionsLoad=!0,t=new u["a"],e.next=4,t.all();case 4:r=e.sent,this.enderecoTiposOptions=r.data.data,this.enderecoTiposOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadEstados:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.enderecoTiposOptionsLoad=!0,t=new p["a"],e.next=4,t.all();case 4:r=e.sent,this.estadosOptions=r.data.data,this.enderecoTiposOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadCidades:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.cidadesOptionsLoad=!0,r=new p["a"],e.next=4,r.getCidades(t);case 4:n=e.sent,this.cidadesOptions=n.data,this.formFields.cidades_id=null,this.cidadesOptionsLoad=!1;case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),loadBairros:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return this.bairrosOptionsLoad=!0,r=new f["a"],e.next=5,r.getBairros(t);case 5:n=e.sent,this.bairrosOptions=n.data,this.bairrosOptionsLoad=!1,e.next=11;break;case 10:this.bairrosOptions=[];case 11:this.formFields.bairros_id=null;case 12:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),bairroAddSuccess:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadBairros(this.formFields.cidades_id);case 2:this.formFields.bairros_id=t.id;case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),enderecoTipoAddSuccess:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadEnderecoTipos();case 2:this.formFields.endereco_tipos_id=t.id;case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),loadContatos:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.clienteContatosOptionsLoad=!0,t=new h["a"],e.next=4,t.all(this.getClienteID());case 4:r=e.sent,this.clienteContatosOptions=r.data.data,this.formFields.bairros_id=null,this.clienteContatosOptionsLoad=!1;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getClienteID:function(){return this.$route.params.id}}),watch:{estados_id:function(){this.loadCidades(this.estados_id)},"formFields.cidades_id":{handler:function(){this.loadBairros(this.formFields.cidades_id)},deep:!0}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),this.SET_TOOLBAR_BACK_URL("/clientes/editar/".concat(this.getClienteID(),"/enderecos")),this.formFields=(new l["a"]).getModel(),this.formFields.clientes_id=this.getClienteID(),this.loadEnderecoTipos(),this.loadEstados(),this.loadContatos(),e.next=9,this.loadCliente();case 9:this.formFields.cnpj=this.cliente.cnpj,this.formFields.telefone=this.cliente.telefone_principal,this.CLOSE_LOADER();case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},b=v,_=r("2877"),g=r("6544"),x=r.n(g),O=r("8336"),w=r("b0af"),F=r("99d9"),k=r("a523"),R=r("ce7e6"),C=r("0e8f"),j=r("4bd4"),y=r("a722"),L=r("b56d"),T=r("9910"),A=r("2677"),E=r("a844"),S=Object(_["a"])(b,n,a,!1,null,null,null);t["default"]=S.exports;x()(S,{VBtn:O["a"],VCard:w["a"],VCardActions:F["a"],VCardText:F["b"],VContainer:k["a"],VDivider:R["a"],VFlex:C["a"],VForm:j["a"],VLayout:y["a"],VSelect:L["a"],VSpacer:T["a"],VTextField:A["a"],VTextarea:E["a"]})},e46e:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),i=r("b0b4"),s=r("308d"),o=r("6bb5"),c=r("013f"),d=r("4e2b"),l=r("bd86"),u=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=!(arguments.length>8&&void 0!==arguments[8])||arguments[8],u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:2,p=arguments.length>10&&void 0!==arguments[10]?arguments[10]:null,f=arguments.length>11&&void 0!==arguments[11]&&arguments[11],h=arguments.length>12&&void 0!==arguments[12]?arguments[12]:null,m=arguments.length>13&&void 0!==arguments[13]?arguments[13]:null,v=arguments.length>14&&void 0!==arguments[14]?arguments[14]:null,b=arguments.length>15&&void 0!==arguments[15]&&arguments[15],_=arguments.length>16&&void 0!==arguments[16]&&arguments[16],g=arguments.length>17&&void 0!==arguments[17]&&arguments[17],x=arguments.length>18&&void 0!==arguments[18]?arguments[18]:null,O=arguments.length>19&&void 0!==arguments[19]?arguments[19]:null,w=arguments.length>20&&void 0!==arguments[20]?arguments[20]:null;Object(a["a"])(this,e),this.razao_social=t,this.nome_fantasia=r,this.cnpj=n,this.cpf=i,this.inscricao_estadual=s,this.telefone_principal=o,this.fax=c,this.numero_licenca=d,this.ativo=l,this.prospeccao=u,this.porcentagem_comissao_vendedor=p,this.pendencia=f,this.pendencia_motivo=h,this.observacao=m,this.informacao_faturamento=v,this.rastreabilidade_mri=b,this.faturamento_mensal=_,this.contrato_manutencao=g,this.cliente_atividades_id=x,this.funcionarios_id=O,this.id=w},p=r("8141");r.d(t,"a",function(){return f});var f=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,i=new Array(n),d=0;d<n;d++)i[d]=arguments[d];return r=Object(s["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(i))),Object(l["a"])(Object(c["a"])(r),"_baseApiUrl","clientes"),r}return Object(d["a"])(t,e),Object(i["a"])(t,[{key:"getModel",value:function(){return new u}},{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new u(t.razao_social,t.nome_fantasia,t.cnpj,t.cpf,t.inscricao_estadual,t.telefone_principal,t.fax,t.numero_licensa,t.ativo,t.prospeccao,t.porcentagem_comissao_vendedor,t.pendencia,t.pendencia_motivo,t.obervacao,t.informacao_faturamento,t.rastreabilidade_mri,t.faturamento_mensal,t.contrato_manutencao,t.cliente_atividades_id,t.funcionarios_id),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return n=e.sent,e.abrupt("return",this.response("Cliente adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new u(t.razao_social,t.nome_fantasia,t.cnpj,t.cpf,t.inscricao_estadual,t.telefone_principal,t.fax,t.numero_licensa,t.ativo,t.prospeccao,t.porcentagem_comissao_vendedor,t.pendencia,t.pendencia_motivo,t.observacao,t.informacao_faturamento,t.rastreabilidade_mri,t.faturamento_mensal,t.contrato_manutencao,t.cliente_atividades_id,t.funcionarios_id,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Cliente editado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Cliente carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,i){var s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s=this.buildQueryParams(t,r,n,a,i),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(s));case 4:return o=e.sent,e.abrupt("return",this.response(!1,o.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Cliente apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(p["a"])}}]);
//# sourceMappingURL=chunk-1113fba2.afb489aa.js.map