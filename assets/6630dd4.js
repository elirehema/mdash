(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{494:function(t,e,a){"use strict";a.r(e);var r=a(581),n=a(447),s=a(62),u=a(453),i=(a(37),{props:{purchases:{type:Array,default:null},pages:{type:Number,default:-1}},data:function(){return{headers:[{text:"Control Number",sortable:!1,value:"controlNumber"},{text:"MeterID",value:"meterId"},{text:"Amount",value:"amount"},{text:"Purchased Units",value:"purchasedUnits"},{text:"Effective Units",value:"effectiveUnits"},{text:"Offset",value:"offsetUnits"},{text:"Payment Ref",value:"paymentReference"},{text:"Tarrif",value:"tarrifId"},{text:"Transaction Date",value:"transactionDate"},{text:"Created At",value:"createdAt"}]}}}),o=a(71),l=Object(o.a)(i,(function(){var t=this,e=t._self._c;return t.purchases?e(r.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.purchases,"items-per-page":15,"server-items-length":t.pages},on:{"update:items-per-page":function(e){return t.$emit("paginate",e)},"update:options":function(e){return t.$emit("paginate",e)}},scopedSlots:t._u([{key:"top",fn:function(){return[e(s.a,{attrs:{flat:""}},[e(u.a,{staticClass:"font-weight-bold"},[t._v("\n        Credit Purchases \n      ")]),t._v(" "),e(n.a),t._v(" "),e("export-button",{attrs:{report:"purchases"}})],1)]},proxy:!0},{key:"item.transactionDate",fn:function(a){var r=a.item;return[e("span",[t._v(t._s(t._f("dateformat")(r.transactionDate)))])]}},{key:"item.createdAt",fn:function(a){var r=a.item;return[e("span",[t._v(t._s(t._f("dateformat")(r.createdAt)))])]}}],null,!1,723399800)}):e("skeleton-table-loader")}),[],!1,null,null,null);e.default=l.exports}}]);