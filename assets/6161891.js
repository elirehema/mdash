(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{344:function(t,e,r){"use strict";r.r(e);r(31),r(38),r(29),r(33),r(11),r(53),r(34),r(54);var n=r(15),c=r(44);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{fields:["ID","Name","Unit Price","Is Active ?","Created On","Updated On"],menu:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({tariffs:"tariffs"})),created:function(){this.$store.dispatch("_fetchtariffs")},methods:{openmenu:function(){this.menu=!this.menu}}},f=l,d=r(37),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return t.tariffs?e("div",{staticClass:"container min-w-full"},[e("div",{staticClass:"p-5 border-b flex flex-row justify-between"},[t._m(0),t._v(" "),e("div",[e("nuxt-link",{attrs:{to:"/system/tariffs/add"}},[e("button",{staticClass:"bg-primary font-bold text-white p-2 px-3 rounded-lg border border-primary",attrs:{type:"button"}},[t._v("\n          + New Tariff\n        ")])]),t._v(" "),e("export-button",{attrs:{report:"tariffs"}})],1)]),t._v(" "),e("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-900"},[e("tr",t._l(t.fields,(function(r,i){return e("th",{key:i,staticClass:"py-3 px-6",attrs:{scope:"col"}},[t._v("\n          "+t._s(r)+"\n        ")])})),0)]),t._v(" "),e("tbody",t._l(t.tariffs,(function(r,i){return e("tr",{key:i,staticClass:"odd:bg-gray-50 bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"},[e("th",{staticClass:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scop:"row"}},[t._v("\n          "+t._s(r.id)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.name)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.unitPrice)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.isActive)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(r.createdAt))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(r.updatedAt))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6 text-center"},[r.isActive?e("span",{staticClass:"flex ml-2 h-5 w-5"},[e("span",{staticClass:"animate-ping absolute inline-flex h-5 w-5 rounded-full bg-yellow-400 opacity-75"}),t._v(" "),e("span",{staticClass:"relative inline-flex rounded-full h-5 w-5 bg-yellow-500"})]):e("svg",{staticClass:"fill-red-400",staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{click:function(e){return t.$store.dispatch("_activatetariff",r.id)}}},[e("path",{attrs:{d:"M13,3H11V13H13V3M17.83,5.17L16.41,6.59C18.05,7.91 19,9.9 19,12A7,7 0 0,1 12,19C8.14,19 5,15.88 5,12C5,9.91 5.95,7.91 7.58,6.58L6.17,5.17C2.38,8.39 1.92,14.07 5.14,17.86C8.36,21.64 14.04,22.1 17.83,18.88C19.85,17.17 21,14.65 21,12C21,9.37 19.84,6.87 17.83,5.17Z"}})])])])})),0)])]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"font-bold text-primary text-3xl"},[t._v("\n        Tariffs\n      ")]),t._v(" "),e("p",{staticClass:"text-sm font-light"},[t._v("\n        List of all company tariffs\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);