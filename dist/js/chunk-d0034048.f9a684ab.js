(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0034048"],{"1ee7":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-text",[r("v-form",{on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{rules:[e.formRules.default.required],label:"Descrição",required:""},model:{value:e.formFields.descricao,callback:function(t){e.$set(e.formFields,"descricao",t)},expression:"formFields.descricao"}})],1)],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("cebc"),u=r("b5aa"),c=r("2f62"),o={data:function(){return{loading:!1,valid:!1,formFields:{},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}}}},methods:Object(i["a"])({},Object(c["b"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL"]),{save:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=9;break}return this.loading=!0,t=new u["a"],e.next=5,t.create(this.formFields);case 5:r=e.sent,this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),r.error||this.$router.push({path:"/residuo-tratamentos"}),this.loading=!1;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),mounted:function(){this.SET_TOOLBAR_BACK_URL("/residuo-tratamentos"),this.formFields=(new u["a"]).getModel()}},l=o,d=r("2877"),p=r("6544"),h=r.n(p),v=r("8336"),f=r("b0af"),b=r("99d9"),m=r("a523"),g=r("ce7e6"),w=r("0e8f"),x=r("4bd4"),y=r("a722"),O=r("9910"),_=r("2677"),R=Object(d["a"])(l,n,a,!1,null,null,null);t["default"]=R.exports;h()(R,{VBtn:v["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VContainer:m["a"],VDivider:g["a"],VFlex:w["a"],VForm:x["a"],VLayout:y["a"],VSpacer:O["a"],VTextField:_["a"]})},b5aa:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),u=r("6bb5"),c=r("013f"),o=r("4e2b"),l=r("bd86"),d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(a["a"])(this,e),this.id=r,this.descricao=t},p=r("8141");r.d(t,"a",function(){return h});var h=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return r=Object(i["a"])(this,(e=Object(u["a"])(t)).call.apply(e,[this].concat(s))),Object(l["a"])(Object(c["a"])(r),"_baseApiUrl","residuo-tratamentos"),r}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"getModel",value:function(){return new d}},{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.descricao),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return n=e.sent,e.abrupt("return",this.response("Tratamento de residuo adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.descricao,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Tratamento de residuo editado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Tratamento de residuo carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return u=e.sent,e.abrupt("return",this.response(!1,u.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Tratamento de residuo apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(p["a"])}}]);
//# sourceMappingURL=chunk-d0034048.f9a684ab.js.map