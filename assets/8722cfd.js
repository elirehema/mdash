(window.webpackJsonp=window.webpackJsonp||[]).push([[38,16],{481:function(t,e,a){"use strict";a.r(e);var r=a(431),n=a(581),s=a(430),i=a(447),u=a(62),o=a(453),c=(a(37),{props:{tracks:{type:Array,default:null},pages:{type:Number,default:1},titled:{type:Boolean,default:!1}},data:function(){return{headers:[{text:"Id",sortable:!1,value:"id"},{text:"Serial No.#",value:"meter.serialNumber"},{text:"Recorded Unit",value:"recordedUnit"},{text:"Offset Unit",value:"offSet"},{text:"Valve Status",value:"status"},{text:"Recorded At",value:"recordedtime"}]}}}),l=a(71),p=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.tracks?e(n.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tracks,"items-per-page":15,"server-items-length":t.pages},on:{"update:items-per-page":function(e){return t.$emit("paginate",e)},"update:options":function(e){return t.$emit("paginate",e)}},scopedSlots:t._u([t.titled?{key:"top",fn:function(){return[e(u.a,{attrs:{flat:""}},[e(o.a,{staticClass:"font-weight-bold"},[t._v("\n        Meter Usage tracks\n      ")]),t._v(" "),e(i.a),t._v(" "),e(r.a,{staticClass:"text-capitalize",attrs:{color:"blue","x-small":"",text:"",to:"/readings"}},[t._v("\n        Meter Readings\n      ")]),t._v(" "),e("export-button",{attrs:{report:"tracks"}})],1)]},proxy:!0}:null,{key:"item.status",fn:function(a){return["00"===a.item.valveStatus?e(s.a,{attrs:{small:"",color:"blue"}},[t._v("\n      mdi-water-check\n    ")]):e(s.a,{attrs:{small:"",color:"red"}},[t._v("\n      mdi-water-check\n    ")])]}},{key:"item.recordedtime",fn:function(a){var r=a.item;return[e("span",[t._v(t._s(t._f("dateformat")(r.createdAt)))])]}},t.tracks.length>14?{key:"footer.prepend",fn:function(){return[t.titled?t._e():e(r.a,{staticClass:"text-capitalize",attrs:{color:"blue","x-small":"",text:"",to:"/tracks"}},[t._v("\n      Load more ...\n    ")])]},proxy:!0}:null],null,!0)}):e("skeleton-table-loader")}),[],!1,null,null,null);e.default=p.exports},592:function(t,e,a){"use strict";a.r(e);var r=a(4),n=(a(21),{name:"NuxtTutorial",components:{"usage-track":a(481).default},data:function(){return{page:1,pages:0,tracks:null}},created:function(){this.paginate({page:0,itemsPerPage:Math.round(window.innerHeight/64)})},methods:{updatepage:function(t){this.tracks=null,this.page=t,this.fetchpagenatedusagetracks()},fetchpagenatedusagetracks:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("/tracks/paginate",{params:{page:t.page,size:Math.round(window.innerHeight/64)}}).then((function(e){t.tracks=e.results,t.pages=e.totalPages})).catch((function(t){}));case 2:case"end":return e.stop()}}),e)})))()},paginate:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$api.$get("/tracks/paginate",{params:{page:t.page,size:t.itemsPerPage}}).then((function(t){e.pages=t.totalRows,e.page=t.currentPage,e.tracks=t.results})).catch((function(t){}));case 2:case"end":return a.stop()}}),a)})))()}}}),s=a(71),i=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.tracks?e("div",[e("usage-track",{attrs:{tracks:t.tracks,titled:!0,pages:t.pages},on:{paginate:t.paginate}})],1):t._e()])}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{UsageTrack:a(481).default})}}]);