(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{326:function(t,e,r){"use strict";r.r(e);r(38),r(26),r(33),r(11),r(53),r(34),r(54);var n=r(15),c=r(47);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var o={data:function(){return{fields:["Device ID","Serial No. ","Batch No.","Control No.","Units","Offset","Valve Status"],menu:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({meters:"meters"})),created:function(){this.$store.dispatch("_fetchmeters")},methods:{viewMeter:function(t){this.$router.push({path:"meters/".concat(t)})}}},d=o,f=r(37),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.meters?e("div",{staticClass:"container min-w-full"},[e("div",{staticClass:"p-5 border-b flex flex-row justify-between"},[t._m(0),t._v(" "),e("div",[e("nuxt-link",{attrs:{to:"/meters/add"}},[e("button",{staticClass:"button",attrs:{type:"button"}},[t._v("\n          + New Meter\n        ")])])],1)]),t._v(" "),e("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-900"},[e("tr",t._l(t.fields,(function(r,i){return e("th",{key:i,staticClass:"py-3",attrs:{scope:"col"}},[t._v("\n          "+t._s(r)+"\n        ")])})),0)]),t._v(" "),e("tbody",t._l(t.meters,(function(r,i){return e("tr",{key:i,staticClass:"odd:bg-gray-50 bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700",on:{click:function(e){return t.viewMeter(r.id)}}},[e("th",{staticClass:"py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scop:"row"}},[t._v("\n          "+t._s(r.deviceId)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4"},[t._v("\n          "+t._s(r.serialNumber)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4"},[t._v("\n          "+t._s(r.batchNumber)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4"},[t._v("\n          "+t._s(r.controlNumber)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4"},[t._v("\n          "+t._s(r.Bill.credits)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4"},[t._v("\n          "+t._s(r.Bill.offSet)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4"},[r.isValveClosed?e("svg",{staticClass:"fill-red-500 ml-5",staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20.84 22.73L16.29 18.18C15.2 19.3 13.69 20 12 20C8.69 20 6 17.31 6 14C6 12.67 6.67 11.03 7.55 9.44L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M18 14C18 10 12 3.25 12 3.25S10.84 4.55 9.55 6.35L17.95 14.75C18 14.5 18 14.25 18 14Z"}})]):e("svg",{staticClass:"fill-plainblue ml-5",staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M21.75 16.25L17 21L14.25 18L15.41 16.84L17 18.43L20.59 14.84L21.75 16.25M17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20H12.34C12.12 19.36 12 18.7 12 18C12 14.82 14.5 12.22 17.62 12Z"}})])])])})),0)])]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"font-bold text-primary text-3xl"},[t._v("\n        Meters\n      ")]),t._v(" "),e("p",{staticClass:"text-sm font-light"},[t._v("\n        List of all registered meters\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);