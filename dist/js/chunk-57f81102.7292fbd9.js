(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57f81102"],{8006:function(e,t,r){"use strict";r("96cf");var a=r("3b8d"),n=r("d225"),s=r("b0b4"),i=r("308d"),c=r("6bb5"),u=r("013f"),o=r("4e2b"),l=r("bd86"),p=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(n["a"])(this,e),this.id=r,this.descricao=t},d=r("8141");r.d(t,"a",function(){return h});var h=function(e){function t(){var e,r;Object(n["a"])(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return r=Object(i["a"])(this,(e=Object(c["a"])(t)).call.apply(e,[this].concat(s))),Object(l["a"])(Object(u["a"])(r),"_baseApiUrl","cliente-atividades"),r}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"getModel",value:function(){return new p}},{key:"create",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new p(t.descricao),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return a=e.sent,e.abrupt("return",this.response("Atividade adicionada com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new p(t.descricao,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return a=e.sent,e.abrupt("return",this.response("Atividade editada com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Atividade carregada com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r,a,n,s){var i,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,a,n,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return c=e.sent,e.abrupt("return",this.response(!1,c.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,a,n,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Atividade apagada com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(d["a"])},f802:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-title",[r("v-btn",{attrs:{color:"primary",large:"",to:"cliente-atividades/adicionar"}},[r("v-icon",{attrs:{dark:""}},[e._v("add")]),e._v("\n            Adicionar atividade\n          ")],1)],1),r("v-divider"),r("v-card-text",[r("custom-data-table",{attrs:{headers:e.headers,"table-data":e.tableData,filters:e.filters,"default-sort":e.defaultSort},on:{onDeleteItem:function(t){return e.onDeleteItem(t)},onEditItem:function(t){return e.onEditItem(t)}},scopedSlots:e._u([{key:"filter",fn:function(t){return[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{label:"Descricao",clearable:""},model:{value:t.filters.descricao,callback:function(r){e.$set(t.filters,"descricao",r)},expression:"props.filters.descricao"}})],1)]}},{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.descricao))])]}}]),model:{value:e.tableIpunt,callback:function(t){e.tableIpunt=t},expression:"tableIpunt"}})],1)],1)],1)],1)],1)},n=[],s=(r("96cf"),r("3b8d")),i=r("cebc"),c=r("efa1"),u=r("8006"),o=r("2f62"),l={components:{CustomDataTable:c["a"]},data:function(){return{filters:{descricao:""},defaultSort:"descricao",headers:[{text:"Descricao",align:"left",sortable:!0,value:"nome"}],tableData:null,tableIpunt:{}}},methods:Object(i["a"])({},Object(o["b"])(["SHOW_ALERT","SHOW_LOADER","CLOSE_LOADER"]),{getData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tableIpunt.filters,r=this.tableIpunt.pagination,a=new u["a"],e.next=5,a.list(t,r.page,r.rowsPerPage,r.sortBy,r.descending);case 5:n=e.sent,n.error?this.tableData=[]:this.tableData=n.data;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onDeleteItem:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),r=new u["a"],e.next=4,r.delete(t);case 4:a=e.sent,this.CLOSE_LOADER(),this.SHOW_ALERT({type:a.error?"error":"success",message:a.message}),a.error||this.getData();case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onEditItem:function(e){this.$router.push({path:"/cliente-atividades/editar/".concat(e)})}}),watch:{tableIpunt:{handler:function(){this.getData()},deep:!0}}},p=l,d=r("2877"),h=r("6544"),f=r.n(h),v=r("8336"),b=r("b0af"),m=r("99d9"),w=r("12b2"),g=r("a523"),O=r("ce7e6"),x=r("0e8f"),y=r("132d"),_=r("a722"),k=r("2677"),R=Object(d["a"])(p,a,n,!1,null,null,null);t["default"]=R.exports;f()(R,{VBtn:v["a"],VCard:b["a"],VCardText:m["b"],VCardTitle:w["a"],VContainer:g["a"],VDivider:O["a"],VFlex:x["a"],VIcon:y["a"],VLayout:_["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-57f81102.7292fbd9.js.map