(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{325:function(t,e,l){"use strict";l.r(e);l(38),l(26),l(33),l(11),l(53),l(34),l(54);var r=l(15),n=l(47);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var c={data:function(){return{menu:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({profile:"account"})),created:function(){this.$store.dispatch("_fetchuseraccount")},methods:{}},f=c,d=l(37),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container min-w-full"},[t._m(0),t._v(" "),e("div",{staticClass:"lg:flex w-auto"},[t.profile?e("div",{staticClass:"grid w-auto mt-4"},[e("div",{staticClass:"rounded-lg overflow-hidden shadow-md hover:shadow-lg relative"},[e("div",{staticClass:"grid grid-cols-12 bg-white"},[e("div",{staticClass:"col-span-12 md:col-span-5 grid justify-center content-center h-64 md:h-full"},[e("svg",{staticClass:"fill-green-500",attrs:{width:"40",height:"40",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25V13h-.258a3.74 3.74 0 0 0-1.242-2.545V7.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 7.25v9.5c0 .966.784 1.75 1.75 1.75H12v.5c0 .34.04.674.118 1H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM21.5 17a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4-3.14 0-5-2.029-5-4v-.5a1.5 1.5 0 0 1 1.5-1.5h7ZM18 10.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"}})])]),t._v(" "),e("div",{staticClass:"col-span-12 md:col-span-7 p-4 2xl:p-8 gap-4 bg-gray-100 flex flex-col text-primary"},[e("span",{staticClass:"font-bold text-sm 2xl:text-xl"},[t._v("Name: "+t._s(t.profile.firstname)+"  "+t._s(t.profile.lastname))]),t._v(" "),e("span",{staticClass:"font-bold text-sm 2xl:text-xl"},[t._v("User Email: "+t._s(t.profile.email))]),t._v(" "),e("span",{staticClass:"font-bold text-sm 2xl:text-xl"},[t._v("Phone: "+t._s(t.profile.phone))]),t._v(" "),e("span",{staticClass:"font-bold text-lg 2xl:text-2xl"},[t._v("Office Name: "+t._s(t.profile.companyName))]),t._v(" "),e("span",{staticClass:"font-bold text-lg 2xl:text-2xl"},[t._v("Roles: "+t._s(t.profile.role))])])])])]):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-5 border-b"},[e("p",{staticClass:"font-bold text-primary text-3xl"},[t._v("\n      Profile\n    ")]),t._v(" "),e("p",{staticClass:"text-sm font-light"},[t._v("\n      My profile account information\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);