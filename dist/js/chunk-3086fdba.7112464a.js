(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3086fdba"],{"07f2":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),c=r("6bb5"),o=r("013f"),u=r("4e2b"),l=r("bd86"),p=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(a["a"])(this,e),this.id=r,this.descricao=t},h=r("8141");r.d(t,"a",function(){return d});var d=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return r=Object(i["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(s))),Object(l["a"])(Object(o["a"])(r),"_baseApiUrl","servicos"),r}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"getModel",value:function(){return new p}},{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new p(t.descricao),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return n=e.sent,e.abrupt("return",this.response("Servico adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new p(t.descricao,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Servico editado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Servico carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return c=e.sent,e.abrupt("return",this.response(!1,c.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Servico apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(h["a"])},"2e29":function(e,t,r){},3890:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticStyle:{padding:"0px"},attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-text",[r("v-form",{on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-switch",{attrs:{color:"primary",label:"Proposta Aprovada?"},model:{value:e.formFields.aprovado,callback:function(t){e.$set(e.formFields,"aprovado",t)},expression:"formFields.aprovado"}})],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md2:""}},[r("v-text-field",{attrs:{label:"Data",rules:[e.formRules.default.required],required:"","return-masked-value":"",mask:"##/##/####",placeholder:"dd/mm/aaaa"},model:{value:e.formFields.data,callback:function(t){e.$set(e.formFields,"data",t)},expression:"formFields.data"}})],1),r("v-flex",{attrs:{xs12:"",md2:""}},[r("v-text-field",{attrs:{label:"Numero"},model:{value:e.formFields.numero,callback:function(t){e.$set(e.formFields,"numero",t)},expression:"formFields.numero"}})],1),r("v-flex",{attrs:{xs6:"",md4:""}},[r("v-select",{attrs:{items:e.servicosOptions,loading:e.servicosOptionsLoad,label:"Serviço","item-text":"descricao","item-value":"id"},model:{value:e.formFields.servicos_id,callback:function(t){e.$set(e.formFields,"servicos_id",t)},expression:"formFields.servicos_id"}})],1),r("v-flex",{attrs:{xs6:"",md4:""}},[r("v-select",{attrs:{items:e.funcionariosOptions,loading:e.funcionariosOptionsLoad,label:"Funcionário","item-text":"nome","item-value":"id"},model:{value:e.formFields.funcionarios_id,callback:function(t){e.$set(e.formFields,"funcionarios_id",t)},expression:"formFields.funcionarios_id"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-textarea",{attrs:{label:"Referência 1"},model:{value:e.formFields.referencia_1,callback:function(t){e.$set(e.formFields,"referencia_1",t)},expression:"formFields.referencia_1"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-textarea",{attrs:{label:"Referência 2"},model:{value:e.formFields.referencia_2,callback:function(t){e.$set(e.formFields,"referencia_2",t)},expression:"formFields.referencia_2"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-textarea",{attrs:{label:"Referência 3"},model:{value:e.formFields.referencia_3,callback:function(t){e.$set(e.formFields,"referencia_3",t)},expression:"formFields.referencia_3"}})],1),r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-textarea",{attrs:{label:"Observações"},model:{value:e.formFields.observacao,callback:function(t){e.$set(e.formFields,"observacao",t)},expression:"formFields.observacao"}})],1)],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("cebc"),c=r("7d87"),o=r("2f62"),u=r("07f2"),l=r("b4ea"),p={data:function(){return{loading:!1,valid:!1,formFields:{},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}},servicosOptions:[],servicosOptionsLoad:!1,funcionariosOptions:[],funcionariosOptionsLoad:!1}},methods:Object(i["a"])({},Object(o["b"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{save:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=9;break}return this.loading=!0,t=new c["a"],e.next=5,t.create(this.formFields,this.getClienteID());case 5:r=e.sent,this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),r.error||this.$router.push({path:"/clientes/editar/".concat(this.getClienteID(),"/propostas")}),this.loading=!1;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadServicos:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.servicosOptionsLoad=!0,t=new u["a"],e.next=4,t.all();case 4:r=e.sent,this.servicosOptions=r.data.data,this.servicosOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadFuncionarios:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.funcionariosOptionsLoad=!0,t=new l["a"],e.next=4,t.all();case 4:r=e.sent,this.funcionariosOptions=r.data.data,this.funcionariosOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getClienteID:function(){return this.$route.params.id}}),created:function(){this.SET_TOOLBAR_BACK_URL("/clientes/editar/".concat(this.getClienteID(),"/propostas")),this.formFields=(new c["a"]).getModel(),this.formFields.clientes_id=this.getClienteID(),this.loadServicos(),this.loadFuncionarios()}},h=p,d=r("2877"),v=r("6544"),f=r.n(v),m=r("8336"),b=r("b0af"),g=r("99d9"),w=r("a523"),x=r("ce7e6"),_=r("0e8f"),O=r("4bd4"),y=r("a722"),k=r("b56d"),R=r("9910"),j=r("b73d"),F=r("2677"),A=r("a844"),C=Object(d["a"])(h,n,a,!1,null,null,null);t["default"]=C.exports;f()(C,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VContainer:w["a"],VDivider:x["a"],VFlex:_["a"],VForm:O["a"],VLayout:y["a"],VSelect:k["a"],VSpacer:R["a"],VSwitch:j["a"],VTextField:F["a"],VTextarea:A["a"]})},"7d87":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),c=r("6bb5"),o=r("013f"),u=r("4e2b"),l=r("bd86"),p=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,p=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,h=arguments.length>10&&void 0!==arguments[10]?arguments[10]:null;Object(a["a"])(this,e),this.data=t,this.numero=r,this.aprovado=n,this.referencia_1=s,this.referencia_2=i,this.referencia_3=c,this.observacao=o,this.servicos_id=u,this.clientes_id=l,this.funcionarios_id=p,this.id=h},h=r("8141");r.d(t,"a",function(){return d});var d=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return r=Object(i["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(s))),Object(l["a"])(Object(o["a"])(r),"_baseApiUrl",""),r}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"getModel",value:function(){return new p}},{key:"getBaseApiUrl",value:function(e){return"clientes/".concat(e,"/propostas")}},{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new p(t.data,t.numero,t.aprovado,t.referencia_1,t.referencia_2,t.referencia_3,t.observacao,t.servicos_id,t.clientes_id,t.funcionarios_id),e.next=4,this._request.post(this.getBaseApiUrl(r),n);case 4:return a=e.sent,e.abrupt("return",this.response("Proposta adicionada com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new p(t.data,t.numero,t.aprovado,t.referencia_1,t.referencia_2,t.referencia_3,t.observacao,t.servicos_id,t.clientes_id,t.funcionarios_id,t.id),e.next=4,this._request.put("".concat(this.getBaseApiUrl(r),"/").concat(n.id),n);case 4:return a=e.sent,e.abrupt("return",this.response("Proposta editada com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return n=e.sent,e.abrupt("return",this.response("Proposta carregada com sucesso.",n.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s,i){var c,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,c=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this.getBaseApiUrl(i)).concat(c));case 4:return o=e.sent,e.abrupt("return",this.response(!1,o.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=this.buildQueryParams(!1,!1,-1),e.next=4,this.request().get("".concat(this.getBaseApiUrl(t)).concat(r));case 4:return n=e.sent,window.console.log("contato",n),e.abrupt("return",this.response(!1,n.data));case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return n=e.sent,e.abrupt("return",this.response("Proposta apagada com sucesso.",n.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()}]),t}(h["a"])},b4ea:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),c=r("6bb5"),o=r("013f"),u=r("4e2b"),l=r("bd86"),p=function e(t,r,n){Object(a["a"])(this,e),this.id=n,this.nome=t,this.funcionario_cargos_id=r},h=r("8141");r.d(t,"a",function(){return d});var d=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return r=Object(i["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(s))),Object(l["a"])(Object(o["a"])(r),"_baseApiUrl","funcionarios"),r}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new p(t.nome,t.funcionario_cargos_id),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return n=e.sent,e.abrupt("return",this.response("Funcionário adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new p(t.nome,t.funcionario_cargos_id,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Funcionário editado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Funcionário carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return c=e.sent,e.abrupt("return",this.response(!1,c.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Funcionário apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(h["a"])},b73d:function(e,t,r){"use strict";r("94a7"),r("2e29");var n=r("5368"),a=r("c341"),s=r("0789"),i=r("490a"),c=r("80d2"),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t["a"]={name:"v-switch",directives:{Touch:a["a"]},mixins:[n["a"]],props:{loading:{type:[Boolean,String],default:!1}},computed:{classes:function(){return{"v-input--selection-controls v-input--switch":!0}},switchData:function(){return this.setTextColor(this.loading?void 0:this.computedColor,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",this.$attrs),this.genRipple(this.setTextColor(this.computedColor,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",o({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",o({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(s["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===c["o"].left&&this.isActive||e.keyCode===c["o"].right&&!this.isActive)&&this.onChange()}}}}}]);
//# sourceMappingURL=chunk-3086fdba.7112464a.js.map