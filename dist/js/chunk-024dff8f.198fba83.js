(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-024dff8f"],{"795e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticStyle:{padding:"0px"},attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-title",[r("v-btn",{attrs:{color:"primary",large:"",to:"/clientes/editar/"+this.getClienteID()+"/propostas/adicionar"}},[r("v-icon",{attrs:{dark:""}},[e._v("add")]),e._v("\n            Adicionar proposta\n          ")],1)],1),r("v-divider"),r("v-card-text",[r("custom-data-table",{attrs:{headers:e.headers,"table-data":e.tableData,filters:e.filters,"default-sort":e.defaultSort,"default-descending":e.defaultDescendig},on:{onDeleteItem:function(t){return e.onDeleteItem(t)},onEditItem:function(t){return e.onEditItem(t)}},scopedSlots:e._u([{key:"filter",fn:function(t){return[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{label:"Data",clearable:""},model:{value:t.filters.data,callback:function(r){e.$set(t.filters,"data",r)},expression:"props.filters.data"}})],1)]}},{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.data))]),r("td",[e._v(e._s(t.item.numero))]),r("td",[e._v(e._s(t.item.funcionario?t.item.funcionario.nome:""))]),r("td",[e._v(e._s(t.item.servico?t.item.servico.descricao:""))]),r("td",[t.item.aprovado?r("v-chip",{attrs:{color:"success","text-color":"white"}},[r("v-avatar",[r("v-icon",[e._v("mdi-check-circle")])],1),e._v("\n                  Sim\n                ")],1):r("v-chip",{attrs:{color:"error","text-color":"white"}},[r("v-avatar",[r("v-icon",[e._v("mdi-alert-circle")])],1),e._v("\n                  Não\n                ")],1)],1)]}}]),model:{value:e.tableIpunt,callback:function(t){e.tableIpunt=t},expression:"tableIpunt"}})],1)],1)],1)],1)],1)},n=[],i=(r("96cf"),r("3b8d")),s=r("cebc"),c=r("efa1"),o=r("7d87"),u=r("2f62"),l={components:{CustomDataTable:c["a"]},data:function(){return{filters:{data:""},defaultSort:"data",defaultDescendig:!0,headers:[{text:"Data",align:"left",sortable:!0,value:"data"},{text:"Numero",align:"left",sortable:!0,value:"numero"},{text:"Funcionario",align:"left",sortable:!0,value:"funcionario"},{text:"Serviço",align:"left",sortable:!0,value:"servico"},{text:"Aprovado",align:"left",sortable:!0,value:"aprovado"}],tableData:null,tableIpunt:{}}},methods:Object(s["a"])({},Object(u["c"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{getData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tableIpunt.filters,r=this.tableIpunt.pagination,a=new o["a"],e.next=5,a.list(t,r.page,r.rowsPerPage,r.sortBy,r.descending,this.getClienteID());case 5:n=e.sent,n.error?this.tableData=[]:this.tableData=n.data;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onDeleteItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),r=new o["a"],e.next=4,r.delete(t,this.getClienteID());case 4:a=e.sent,this.CLOSE_LOADER(),this.SHOW_ALERT({type:a.error?"error":"success",message:a.message}),a.error||this.getData();case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onEditItem:function(e){this.$router.push({path:"/clientes/editar/".concat(this.getClienteID(),"/propostas/editar/").concat(e)})},getClienteID:function(){return this.$route.params.id},formatYesNo:function(e){return e?"<b>SIM</b>":"<b>NÃO</b>"}}),watch:{tableIpunt:{handler:function(){this.getData()},deep:!0}},created:function(){this.SET_TOOLBAR_BACK_URL("/clientes")}},d=l,p=r("2877"),h=r("6544"),v=r.n(h),f=r("8212"),b=r("8336"),m=r("b0af"),g=r("99d9"),_=r("12b2"),w=r("cc20"),x=r("a523"),O=r("ce7e6"),y=r("0e8f"),R=r("132d"),k=r("a722"),D=r("2677"),A=Object(p["a"])(d,a,n,!1,null,null,null);t["default"]=A.exports;v()(A,{VAvatar:f["a"],VBtn:b["a"],VCard:m["a"],VCardText:g["b"],VCardTitle:_["a"],VChip:w["a"],VContainer:x["a"],VDivider:O["a"],VFlex:y["a"],VIcon:R["a"],VLayout:k["a"],VTextField:D["a"]})},"7d87":function(e,t,r){"use strict";r("96cf");var a=r("3b8d"),n=r("d225"),i=r("b0b4"),s=r("308d"),c=r("6bb5"),o=r("013f"),u=r("4e2b"),l=r("bd86"),d=(r("cadf"),r("551c"),r("f751"),r("097d"),function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,p=arguments.length>10&&void 0!==arguments[10]?arguments[10]:null,h=arguments.length>11&&void 0!==arguments[11]?arguments[11]:null;Object(n["a"])(this,e),this.data=t,this.vencimento=r,this.numero=a,this.aprovado=i,this.referencia_1=s,this.referencia_2=c,this.referencia_3=o,this.observacao=u,this.servicos_id=l,this.clientes_id=d,this.funcionarios_id=p,this.id=h}),p=r("8141");r.d(t,"a",function(){return h});var h=function(e){function t(){var e,r;Object(n["a"])(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=Object(s["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(i))),Object(l["a"])(Object(o["a"])(r),"_baseApiUrl",""),r}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"getModel",value:function(){return new d}},{key:"getBaseApiUrl",value:function(e){return"clientes/".concat(e,"/propostas")}},{key:"create",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r){var a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new d(t.data,t.vencimento,t.numero,t.aprovado,t.referencia_1,t.referencia_2,t.referencia_3,t.observacao,t.servicos_id,t.clientes_id,t.funcionarios_id),e.next=4,this._request.post(this.getBaseApiUrl(r),a);case 4:return n=e.sent,e.abrupt("return",this.response("Proposta adicionada com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r){var a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new d(t.data,t.vencimento,t.numero,t.aprovado,t.referencia_1,t.referencia_2,t.referencia_3,t.observacao,t.servicos_id,t.clientes_id,t.funcionarios_id,t.id),e.next=4,this._request.put("".concat(this.getBaseApiUrl(r),"/").concat(a.id),a);case 4:return n=e.sent,e.abrupt("return",this.response("Proposta editada com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return a=e.sent,e.abrupt("return",this.response("Proposta carregada com sucesso.",a.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r,a,n,i,s){var c,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,c=this.buildQueryParams(t,r,a,n,i),e.next=4,this._request.get("".concat(this.getBaseApiUrl(s)).concat(c));case 4:return o=e.sent,e.abrupt("return",this.response(!1,o.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,a,n,i,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this.getBaseApiUrl(t)).concat(r));case 4:return a=e.sent,e.abrupt("return",this.response(!1,a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return a=e.sent,e.abrupt("return",this.response("Proposta apagada com sucesso.",a.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()}]),t}(p["a"])}}]);
//# sourceMappingURL=chunk-024dff8f.198fba83.js.map