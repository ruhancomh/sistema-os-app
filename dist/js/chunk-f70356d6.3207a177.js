(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f70356d6"],{"9a1e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-title",[r("v-btn",{attrs:{color:"primary",large:"",to:"residuos/adicionar"}},[r("v-icon",{attrs:{dark:""}},[e._v("add")]),e._v("\n            Adicionar residuo\n          ")],1)],1),r("v-divider"),r("v-card-text",[r("custom-data-table",{attrs:{headers:e.headers,"table-data":e.tableData,filters:e.filters,"default-sort":e.defaultSort},on:{onDeleteItem:function(t){return e.onDeleteItem(t)},onEditItem:function(t){return e.onEditItem(t)}},scopedSlots:e._u([{key:"filter",fn:function(t){return[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{label:"Grupo",clearable:""},model:{value:t.filters.grupo,callback:function(r){e.$set(t.filters,"grupo",r)},expression:"props.filters.grupo"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{label:"Código",clearable:""},model:{value:t.filters.codigo,callback:function(r){e.$set(t.filters,"codigo",r)},expression:"props.filters.codigo"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{label:"Classe",clearable:""},model:{value:t.filters.classe,callback:function(r){e.$set(t.filters,"classe",r)},expression:"props.filters.classe"}})],1)]}},{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.grupo))]),r("td",[e._v(e._s(t.item.codigo))]),r("td",[e._v(e._s(t.item.onu))]),r("td",[e._v(e._s(t.item.classe?t.item.classe.descricao:""))])]}}]),model:{value:e.tableIpunt,callback:function(t){e.tableIpunt=t},expression:"tableIpunt"}})],1)],1)],1)],1)],1)},n=[],s=(r("96cf"),r("3b8d")),i=r("cebc"),u=r("efa1"),o=r("de2a"),c=r("2f62"),l={components:{CustomDataTable:u["a"]},data:function(){return{filters:{grupo:"",codigo:"",classe:""},defaultSort:"grupo",headers:[{text:"Grupo",align:"left",sortable:!0,value:"grupo"},{text:"Código",align:"left",sortable:!0,value:"codigo"},{text:"Onu",align:"left",sortable:!1,value:"onu"},{text:"Classe",align:"left",sortable:!0,value:"classe"}],tableData:null,tableIpunt:{}}},methods:Object(i["a"])({},Object(c["b"])(["SHOW_ALERT","SHOW_LOADER","CLOSE_LOADER"]),{getData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tableIpunt.filters,r=this.tableIpunt.pagination,a=new o["a"],e.next=5,a.list(t,r.page,r.rowsPerPage,r.sortBy,r.descending);case 5:n=e.sent,n.error?this.tableData=[]:this.tableData=n.data;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onDeleteItem:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),r=new o["a"],e.next=4,r.delete(t);case 4:a=e.sent,this.CLOSE_LOADER(),this.SHOW_ALERT({type:a.error?"error":"success",message:a.message}),a.error||this.getData();case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onEditItem:function(e){this.$router.push({path:"/residuos/editar/".concat(e)})}}),watch:{tableIpunt:{handler:function(){this.getData()},deep:!0}}},d=l,p=r("2877"),h=r("6544"),f=r.n(h),v=r("8336"),b=r("b0af"),g=r("99d9"),m=r("12b2"),_=r("a523"),w=r("ce7e6"),x=r("0e8f"),O=r("132d"),y=r("a722"),R=r("2677"),k=Object(p["a"])(d,a,n,!1,null,null,null);t["default"]=k.exports;f()(k,{VBtn:v["a"],VCard:b["a"],VCardText:g["b"],VCardTitle:m["a"],VContainer:_["a"],VDivider:w["a"],VFlex:x["a"],VIcon:O["a"],VLayout:y["a"],VTextField:R["a"]})},de2a:function(e,t,r){"use strict";r("96cf");var a=r("3b8d"),n=r("d225"),s=r("b0b4"),i=r("308d"),u=r("6bb5"),o=r("013f"),c=r("4e2b"),l=r("bd86"),d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;Object(n["a"])(this,e),this.grupo=t,this.descricao=r,this.codigo=a,this.onu=s,this.residuo_tratamentos_id=i,this.residuo_classes_id=u,this.id=o},p=r("8141");r.d(t,"a",function(){return h});var h=function(e){function t(){var e,r;Object(n["a"])(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return r=Object(i["a"])(this,(e=Object(u["a"])(t)).call.apply(e,[this].concat(s))),Object(l["a"])(Object(o["a"])(r),"_baseApiUrl","residuos"),r}return Object(c["a"])(t,e),Object(s["a"])(t,[{key:"getModel",value:function(){return new d}},{key:"create",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.grupo,t.descricao,t.codigo,t.onu,t.residuo_tratamentos_id,t.residuo_classes_id),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return a=e.sent,e.abrupt("return",this.response("Residuo adicionado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.grupo,t.descricao,t.codigo,t.onu,t.residuo_tratamentos_id,t.residuo_classes_id,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return a=e.sent,e.abrupt("return",this.response("Residuo editado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Residuo carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r,a,n,s){var i,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,a,n,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return u=e.sent,e.abrupt("return",this.response(!1,u.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,a,n,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Residuo apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(p["a"])}}]);
//# sourceMappingURL=chunk-f70356d6.3207a177.js.map