(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01b53f46"],{"2b58":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-text",[r("v-form",{on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{rules:[e.formRules.default.required],label:"Nome",required:""},model:{value:e.formFields.nome,callback:function(t){e.$set(e.formFields,"nome",t)},expression:"formFields.nome"}})],1),r("v-flex",{attrs:{xs6:"",md3:""}},[r("v-select",{attrs:{items:e.funcionarioCargosOptions,rules:[e.formRules.default.required],loading:e.funcionarioCargosOptionsLoad,label:"Cargo","item-text":"descricao","item-value":"id",required:""},model:{value:e.formFields.funcionario_cargos_id,callback:function(t){e.$set(e.formFields,"funcionario_cargos_id",t)},expression:"formFields.funcionario_cargos_id"}})],1)],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("cebc"),u=r("b4ea"),c=r("b481"),o=r("2f62"),p={data:function(){return{loading:!1,valid:!1,formFields:{nome:"",funcionario_cargos_id:null},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}},funcionarioCargosOptions:[],funcionarioCargosOptionsLoad:!1}},methods:Object(i["a"])({},Object(o["b"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{loadEntity:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),t=new u["a"],e.next=4,t.get(this.$route.params.id);case 4:r=e.sent,this.CLOSE_LOADER(),r.error?(this.SHOW_ALERT({type:"error",message:r.message}),this.$router.push({path:"/funcionarios"})):this.formFields=r.data;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),save:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=8;break}return this.loading=!0,t=new u["a"],e.next=5,t.update(this.formFields);case 5:r=e.sent,this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),this.loading=!1;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadFuncionarioCargos:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.funcionarioCargosOptionsLoad=!0,t=new c["a"],e.next=4,t.all();case 4:r=e.sent,this.funcionarioCargosOptions=r.data.data,this.funcionarioCargosOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SET_TOOLBAR_BACK_URL("/funcionarios"),e.next=3,this.loadEntity();case 3:this.loadFuncionarioCargos();case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},h=p,l=r("2877"),d=r("6544"),f=r.n(d),v=r("8336"),b=r("b0af"),m=r("99d9"),g=r("a523"),w=r("ce7e6"),O=r("0e8f"),_=r("4bd4"),x=r("a722"),R=r("b56d"),y=r("9910"),j=r("2677"),k=Object(l["a"])(h,n,a,!1,null,null,null);t["default"]=k.exports;f()(k,{VBtn:v["a"],VCard:b["a"],VCardActions:m["a"],VCardText:m["b"],VContainer:g["a"],VDivider:w["a"],VFlex:O["a"],VForm:_["a"],VLayout:x["a"],VSelect:R["a"],VSpacer:y["a"],VTextField:j["a"]})},b481:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),u=r("6bb5"),c=r("013f"),o=r("4e2b"),p=r("bd86"),h=function e(t,r){Object(a["a"])(this,e),this.id=r,this.descricao=t},l=r("8141");r.d(t,"a",function(){return d});var d=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return r=Object(i["a"])(this,(e=Object(u["a"])(t)).call.apply(e,[this].concat(s))),Object(p["a"])(Object(c["a"])(r),"_baseApiUrl","funcionario-cargos"),r}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new h(t.descricao),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return n=e.sent,e.abrupt("return",this.response("Cargo adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new h(t.descricao,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Cargo editado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Cargo carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return u=e.sent,e.abrupt("return",this.response(!1,u.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Cargo apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(l["a"])},b4ea:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),u=r("6bb5"),c=r("013f"),o=r("4e2b"),p=r("bd86"),h=function e(t,r,n){Object(a["a"])(this,e),this.id=n,this.nome=t,this.funcionario_cargos_id=r},l=r("8141");r.d(t,"a",function(){return d});var d=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return r=Object(i["a"])(this,(e=Object(u["a"])(t)).call.apply(e,[this].concat(s))),Object(p["a"])(Object(c["a"])(r),"_baseApiUrl","funcionarios"),r}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new h(t.nome,t.funcionario_cargos_id),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return n=e.sent,e.abrupt("return",this.response("Funcionário adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new h(t.nome,t.funcionario_cargos_id,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Funcionário editado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Funcionário carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return u=e.sent,e.abrupt("return",this.response(!1,u.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Funcionário apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(l["a"])}}]);
//# sourceMappingURL=chunk-01b53f46.b3dc6b32.js.map