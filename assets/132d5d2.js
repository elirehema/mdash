(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{594:function(t,e,a){"use strict";a.r(e);var n=a(431),r=a(452),i=a(581),s=a(430),o=a(447),c=a(62),u=a(453),l=a(4),p=(a(21),{data:function(){return{page:1,pages:100,readings:null,headers:[{text:"Reference",sortable:!1,value:"paymentReference"},{text:"Amount",value:"amount"},{text:"Unit",value:"unit"},{text:"Tarrif",value:"tariffId"},{text:"Valve Status",value:"status"},{text:"Recorded At",value:"createdAt"}],fields:["ID","Referecence","Amount","Unit","Tariff","Control No","Transaction Date","Recorderd Date","Updated Date"],menu:!1,notifications:null}},created:function(){this.paginate({page:0,itemsPerPage:Math.round(window.innerHeight/64)})},methods:{paginate:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$api.$get("/payments/notifications/paginate",{params:{page:t.page,size:t.itemsPerPage}}).then((function(t){e.notifications=t.results,e.pages=t.totalPages})).catch((function(t){}));case 2:case"end":return a.stop()}}),a)})))()}}}),f=a(71),d=Object(f.a)(p,(function(){var t=this,e=t._self._c;return t.notifications?e(i.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.notifications,"items-per-page":15,"footer-props":t.footerprops,"server-items-length":t.pages},on:{"update:items-per-page":t.updateitems,"update:options":t.paginate},scopedSlots:t._u([{key:"top",fn:function(){return[e(c.a,{attrs:{flat:""}},[e(u.a,{staticClass:"font-weight-bold"},[t._v("\n        Payment Notifications\n      ")]),t._v(" "),e(o.a),t._v(" "),e(n.a,{staticClass:"mb-2 ml-2",attrs:{color:"primary",dark:""}},[e(s.a,{attrs:{left:""}},[t._v("\n          mdi-download\n        ")]),t._v("\n        Export CVS\n      ")],1)],1)]},proxy:!0},{key:"item.status",fn:function(a){return[a.item.isValveClosed?e(s.a,{attrs:{small:"",color:"red"}},[t._v("\n      mdi-water-off\n    ")]):e(s.a,{attrs:{small:"",color:"blue"}},[t._v("\n      mdi-water-check\n    ")])]}},{key:"item.actions",fn:function(a){var n=a.item;return[e(r.a,{staticClass:"ma-0 pa-0",on:{click:function(t){t.stopPropagation()}}},[e(s.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("\n        mdi-pencil\n      ")])],1)]}},{key:"item.createdAt",fn:function(a){var n=a.item;return[e("span",[t._v(t._s(t._f("dateformat")(n.createdAt)))])]}}],null,!1,1361505347)}):e("skeleton-table-loader")}),[],!1,null,null,null);e.default=d.exports}}]);