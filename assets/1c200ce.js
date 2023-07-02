(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{595:function(t,e,s){"use strict";s.r(e);s(17),s(16),s(18),s(6),s(24),s(19),s(25);var i=s(3),a=s(81);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){Object(i.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var r={data:function(){return{edit:!1}},computed:o(o({},Object(a.b)({settings:"settings"})),{},{ami:function(){return null==this.settings?{}:{username:this.settings.username,password:this.settings.password,baseURL:this.settings.baseURL,token:this.settings.token}}}),created:function(){this.$store.dispatch("_fetchsettings")},methods:{save:function(){var t=this;this.$store.dispatch("_updatesettings",this.ami).then((function(){t.$router.push({path:"/system"})}))}}},l=s(71),d=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container min-w-full"},[t.settings?e("div",{staticClass:"flex justify-between p-5 border-b bg-yellow-50"},[t._m(0),t._v(" "),e("div",{staticClass:"grid grid-cols-2 text-gray-500 text-xs bg-white rounded-lg shadow-md p-4"},[t._m(1),t._v(" "),e("div",[e("span",[t._v(t._s(t.settings.baseURL))])]),t._v(" "),t._m(2),t._v(" "),e("div",[e("span",[t._v(" "+t._s(t.settings.username))])]),t._v(" "),t._m(3),t._v(" "),e("div",[e("span",[t._v(" "+t._s(t.settings.password))])]),t._v(" "),t._m(4),t._v(" "),e("div",[e("span",[t._v(" "+t._s(t._f("dateformat")(t.settings.createdAt)))])]),t._v(" "),t._m(5),t._v(" "),e("div",[e("span",[t._v(" "+t._s(t._f("dateformat")(t.settings.updatedAt)))])])]),t._v(" "),e("div",[e("svg",{staticClass:"fill-green-500",attrs:{width:"40",height:"40",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){t.edit=!t.edit}}},[e("path",{attrs:{d:"M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"}})])])]):t._e(),t._v(" "),t.edit?e("div",{staticClass:"flex justify-center px-16"},[e("div",{staticClass:"form p-16 w-9/12 border-2 border-dashed border-primary mt-16"},[e("form",{ref:"form",staticClass:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 border-b-2 pb-10"},[e("label",{staticClass:"block"},[e("span",{staticClass:"block text-lg font-semibold text-slate-700"},[t._v("Access Token")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ami.token,expression:"ami.token"}],staticClass:"mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",attrs:{type:"text",placeholder:"E.g eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....."},domProps:{value:t.ami.token},on:{input:function(e){e.target.composing||t.$set(t.ami,"token",e.target.value)}}})]),t._v(" "),e("label",{staticClass:"block"},[e("span",{staticClass:"block text-lg font-semibold text-slate-700"},[t._v("Base URL")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ami.baseURL,expression:"ami.baseURL"}],staticClass:"mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",attrs:{type:"text",value:"settings.baseURL",placeholder:"E.g https://boveamiapi.azurewebsites.net/api"},domProps:{value:t.ami.baseURL},on:{input:function(e){e.target.composing||t.$set(t.ami,"baseURL",e.target.value)}}})]),t._v(" "),e("label",{staticClass:"block"},[e("span",{staticClass:"block text-lg font-semibold text-slate-700"},[t._v("Username ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ami.username,expression:"ami.username"}],staticClass:"mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",attrs:{type:"text",placeholder:"E.g johndoe"},domProps:{value:t.ami.username},on:{input:function(e){e.target.composing||t.$set(t.ami,"username",e.target.value)}}})]),t._v(" "),e("label",{staticClass:"block"},[e("span",{staticClass:"block text-lg font-semibold text-slate-700"},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.ami.password,expression:"ami.password"}],staticClass:"mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",attrs:{type:"text",placeholder:"E.g password"},domProps:{value:t.ami.password},on:{input:function(e){e.target.composing||t.$set(t.ami,"password",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"flex justify-end mt-6 pt-3 text-white font-bold"},[e("button",{staticClass:"transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-8 rounded-full",on:{click:t.save}},[t._v("\n          Update configurations\n        ")])])])]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-5"},[e("p",{staticClass:"font-bold text-primary text-3xl"},[t._v("\n        AMI configurations\n      ")]),t._v(" "),e("p",{staticClass:"text-sm font-light"},[t._v("\n        Specify the configurations between a platform and gateways\n      ")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"font-semibold text-primary text-xs"},[this._v(" Base URL: ")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"font-semibold text-primary text-sm"},[this._v(" Username:")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"font-semibold text-primary text-sm"},[this._v(" Password:")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"font-semibold text-primary text-sm"},[this._v(" Created:")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"font-semibold text-primary text-sm"},[this._v(" Updated:")])])}],!1,null,null,null);e.default=d.exports}}]);