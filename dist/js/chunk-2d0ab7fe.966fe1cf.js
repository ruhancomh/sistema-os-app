(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab7fe"],{1614:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{padding:"0px"},attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-flex",[a("v-card",{attrs:{color:"white",width:"100%"}},[a("v-card-text",[a("v-form",{ref:"form",on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-text-field",{attrs:{mask:"##/##/#### ##:##",placeholder:"dd/mm/aaaa hh:mm",label:"Data","return-masked-value":"",rules:[e.formRules.default.required],required:""},model:{value:e.formFields.data,callback:function(t){e.$set(e.formFields,"data",t)},expression:"formFields.data"}})],1),a("v-flex",{attrs:{xs6:"",md4:""}},[a("v-select",{attrs:{items:e.funcionariosOptions,label:"Funcionário","item-text":"nome","item-value":"id",rules:[e.formRules.default.required],required:""},model:{value:e.formFields.funcionarios_id,callback:function(t){e.$set(e.formFields,"funcionarios_id",t)},expression:"formFields.funcionarios_id"}})],1),a("v-flex",{attrs:{xs6:"",md3:""}},[a("v-select",{attrs:{items:e.acaoOptions,loading:e.acaoOptionsLoad,label:"Ação","item-text":"descricao","item-value":"id"},model:{value:e.formFields.conversa_acoes_id,callback:function(t){e.$set(e.formFields,"conversa_acoes_id",t)},expression:"formFields.conversa_acoes_id"}})],1),a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-textarea",{attrs:{label:"Descrição da conversa",rules:[e.formRules.default.required],required:""},model:{value:e.formFields.descricao,callback:function(t){e.$set(e.formFields,"descricao",t)},expression:"formFields.descricao"}})],1)],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},n=[],i=(a("96cf"),a("3b8d")),s=a("cebc"),o=a("b4ea"),c=a("bc6e"),l=a("2f62"),u=a("3288"),d={data:function(){return{loading:!1,valid:!1,formFields:{},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}},acaoOptions:[],acaoOptionsLoad:!1,funcionariosOptions:[],funcionariosOptionsLoad:!1}},methods:Object(s["a"])({},Object(l["c"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{loadEntity:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),t=new c["a"],e.next=4,t.get(this.$route.params.conversas_id,this.$route.params.id);case 4:a=e.sent,this.CLOSE_LOADER(),a.error?(this.SHOW_ALERT({type:"error",message:a.message}),this.$router.push({path:"/clientes/editar/".concat(this.getClienteID(),"/conversas")})):this.formFields=a.data;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),save:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=10;break}return this.loading=!0,t=new c["a"],e.next=5,t.update(this.formFields,this.getClienteID());case 5:a=e.sent,this.SHOW_ALERT({type:a.error?"error":"success",message:a.message}),this.loading=!1,e.next=11;break;case 10:this.$refs.form.validate();case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadFuncionarios:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.funcionariosOptionsLoad=!0,t=new o["a"],e.next=4,t.all();case 4:a=e.sent,this.funcionariosOptions=a.data.data,this.funcionariosOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadAcoes:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.acaoOptionsLoad=!0,t=new u["a"],e.next=4,t.all();case 4:a=e.sent,this.acaoOptions=a.data.data,this.acaoOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getClienteID:function(){return this.$route.params.id}}),created:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SET_TOOLBAR_BACK_URL("/clientes/editar/".concat(this.getClienteID(),"/conversas")),e.next=3,this.loadEntity();case 3:this.loadFuncionarios(),this.loadAcoes();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},f=d,m=a("2877"),p=a("6544"),v=a.n(p),h=a("8336"),x=a("b0af"),O=a("99d9"),b=a("a523"),g=a("ce7e6"),w=a("0e8f"),_=a("4bd4"),R=a("a722"),F=a("b56d"),L=a("9910"),k=a("2677"),y=a("a844"),A=Object(m["a"])(f,r,n,!1,null,null,null);t["default"]=A.exports;v()(A,{VBtn:h["a"],VCard:x["a"],VCardActions:O["a"],VCardText:O["b"],VContainer:b["a"],VDivider:g["a"],VFlex:w["a"],VForm:_["a"],VLayout:R["a"],VSelect:F["a"],VSpacer:L["a"],VTextField:k["a"],VTextarea:y["a"]})}}]);
//# sourceMappingURL=chunk-2d0ab7fe.966fe1cf.js.map