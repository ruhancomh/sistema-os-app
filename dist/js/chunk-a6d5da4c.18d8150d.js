(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6d5da4c"],{"201a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticStyle:{padding:"0px"},attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-text",[r("v-form",{on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{mask:"##/##/#### ##:##",placeholder:"dd/mm/aaaa hh:mm",label:"Data","return-masked-value":"",rules:[e.formRules.default.required],required:""},model:{value:e.formFields.data,callback:function(t){e.$set(e.formFields,"data",t)},expression:"formFields.data"}})],1),r("v-flex",{attrs:{xs6:"",md4:""}},[r("v-select",{attrs:{items:e.funcionariosOptions,label:"Funcionário","item-text":"nome","item-value":"id"},model:{value:e.formFields.funcionarios_id,callback:function(t){e.$set(e.formFields,"funcionarios_id",t)},expression:"formFields.funcionarios_id"}})],1),r("v-flex",{attrs:{xs6:"",md3:""}},[r("v-select",{attrs:{items:e.acaoOptions,loading:e.acaoOptionsLoad,label:"Ação","item-text":"descricao","item-value":"id"},model:{value:e.formFields.conversa_acoes_id,callback:function(t){e.$set(e.formFields,"conversa_acoes_id",t)},expression:"formFields.conversa_acoes_id"}})],1),r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-textarea",{attrs:{label:"Descrição da conversa"},model:{value:e.formFields.descricao,callback:function(t){e.$set(e.formFields,"descricao",t)},expression:"formFields.descricao"}})],1)],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("cebc"),c=r("b4ea"),u=r("bc6e"),o=r("2f62"),p=r("3288"),l={data:function(){return{loading:!1,valid:!1,formFields:{},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}},acaoOptions:[],acaoOptionsLoad:!1,funcionariosOptions:[],funcionariosOptionsLoad:!1}},methods:Object(i["a"])({},Object(o["b"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{save:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=9;break}return this.loading=!0,t=new u["a"],e.next=5,t.create(this.formFields);case 5:r=e.sent,this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),r.error||this.$router.push({path:"/clientes/editar/".concat(this.getClienteID(),"/conversas")}),this.loading=!1;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadFuncionarios:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.funcionariosOptionsLoad=!0,t=new c["a"],e.next=4,t.all();case 4:r=e.sent,this.funcionariosOptions=r.data.data,this.funcionariosOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadAcoes:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.acaoOptionsLoad=!0,t=new p["a"],e.next=4,t.all();case 4:r=e.sent,this.acaoOptions=r.data.data,this.acaoOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getClienteID:function(){return this.$route.params.id}}),created:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.SET_TOOLBAR_BACK_URL("/clientes/editar/".concat(this.getClienteID(),"/conversas")),this.formFields=(new u["a"]).getModel(),this.formFields.clientes_id=this.getClienteID(),this.loadFuncionarios(),this.loadAcoes();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},h=l,d=r("2877"),v=r("6544"),f=r.n(v),b=r("8336"),m=r("b0af"),g=r("99d9"),w=r("a523"),_=r("ce7e6"),O=r("0e8f"),x=r("4bd4"),y=r("a722"),k=r("b56d"),R=r("9910"),j=r("2677"),A=r("a844"),F=Object(d["a"])(h,n,a,!1,null,null,null);t["default"]=F.exports;f()(F,{VBtn:b["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["b"],VContainer:w["a"],VDivider:_["a"],VFlex:O["a"],VForm:x["a"],VLayout:y["a"],VSelect:k["a"],VSpacer:R["a"],VTextField:j["a"],VTextarea:A["a"]})},3288:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),c=r("6bb5"),u=r("013f"),o=r("4e2b"),p=r("bd86"),l=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(a["a"])(this,e),this.id=r,this.descricao=t},h=r("8141");r.d(t,"a",function(){return d});var d=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return r=Object(i["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(s))),Object(p["a"])(Object(u["a"])(r),"_baseApiUrl","conversa-acoes"),r}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"getModel",value:function(){return new l}},{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new l(t.descricao),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return n=e.sent,e.abrupt("return",this.response("Ação adicionada com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new l(t.descricao,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Ação editada com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Ação carregada com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return c=e.sent,e.abrupt("return",this.response(!1,c.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Ação apagada com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(h["a"])},b4ea:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),c=r("6bb5"),u=r("013f"),o=r("4e2b"),p=r("bd86"),l=function e(t,r,n){Object(a["a"])(this,e),this.id=n,this.nome=t,this.funcionario_cargos_id=r},h=r("8141");r.d(t,"a",function(){return d});var d=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return r=Object(i["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(s))),Object(p["a"])(Object(u["a"])(r),"_baseApiUrl","funcionarios"),r}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new l(t.nome,t.funcionario_cargos_id),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return n=e.sent,e.abrupt("return",this.response("Funcionário adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new l(t.nome,t.funcionario_cargos_id,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Funcionário editado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Funcionário carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return c=e.sent,e.abrupt("return",this.response(!1,c.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Funcionário apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(h["a"])},bc6e:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),c=r("6bb5"),u=r("013f"),o=r("4e2b"),p=r("bd86"),l=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;Object(a["a"])(this,e),this.data=t,this.descricao=r,this.clientes_id=n,this.funcionarios_id=s,this.conversa_acoes_id=i,this.id=c},h=r("8141");r.d(t,"a",function(){return d});var d=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return r=Object(i["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(s))),Object(p["a"])(Object(u["a"])(r),"_baseApiUrl","cliente-conversas"),r}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"getModel",value:function(){return new l}},{key:"getBaseApiUrl",value:function(e){return"clientes/".concat(e,"/conversas")}},{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new l(t.data,t.descricao,t.clientes_id,t.funcionarios_id,t.conversa_acoes_id),e.next=4,this._request.post(this.getBaseApiUrl(r),n);case 4:return a=e.sent,e.abrupt("return",this.response("Conversa adicionada com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new l(t.data,t.descricao,t.clientes_id,t.funcionarios_id,t.conversa_acoes_id,t.id),e.next=4,this._request.put("".concat(this.getBaseApiUrl(r),"/").concat(n.id),n);case 4:return a=e.sent,e.abrupt("return",this.response("Conversa editada com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return n=e.sent,e.abrupt("return",this.response("Conversa carregada com sucesso.",n.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s,i){var c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,c=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this.getBaseApiUrl(i)).concat(c));case 4:return u=e.sent,e.abrupt("return",this.response(!1,u.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("$".concat(this.getBaseApiUrl(t)).concat(r));case 4:return n=e.sent,e.abrupt("return",this.response(!1,n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return n=e.sent,e.abrupt("return",this.response("Conversa apagada com sucesso.",n.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()}]),t}(h["a"])}}]);
//# sourceMappingURL=chunk-a6d5da4c.18d8150d.js.map