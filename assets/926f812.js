(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{340:function(e,t,n){"use strict";n.r(t);n(55),n(33),n(11),n(27),n(38),n(26),n(53),n(34),n(54);var r=n(2),o=n(15),l=(n(10),n(47));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={data:function(){return{form:!0,delayInMilliseconds:5e3,gateway:{gwid:"",rssi:0,snr:0}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({companies:"companies",isadmin:"isadmin",cid:"companyId"})),created:function(){this.$store.dispatch("_fetchuseraccount"),this.$store.dispatch("_fetchcompanies")},mounted:function(){this.gateway.companyId=parseInt(this.cid)},methods:{save:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.$post("/gateways",{gwid:e.gateway.gwid,rssi:parseInt(e.gateway.rssi),snr:parseInt(e.gateway.snr)}).then((function(t){e.$router.push("/system/gateways")})).catch((function(e){}));case 2:case"end":return t.stop()}}),t)})))()}}},f=d,m=n(37),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container min-w-full bg-[#FAFAFA]"},[e._m(0),e._v(" "),t("div",{staticClass:"flex justify-center px-16"},[t("div",{staticClass:"form p-16 w-9/12 border-2 border-dashed border-primary mt-16"},[t("form",{ref:"form",staticClass:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 border-b-2 pb-10"},[t("label",{staticClass:"block"},[t("span",{staticClass:"block text-lg font-semibold text-slate-700"},[e._v("Gateway Unique Identifier")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.gateway.gwid,expression:"gateway.gwid"}],staticClass:"mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",attrs:{type:"text",placeholder:"E.g GT-10"},domProps:{value:e.gateway.gwid},on:{input:function(t){t.target.composing||e.$set(e.gateway,"gwid",t.target.value)}}})]),e._v(" "),t("label",{staticClass:"block"},[t("span",{staticClass:"block text-lg font-semibold text-slate-700"},[e._v("Signal to noise ratio")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.gateway.snr,expression:"gateway.snr"}],staticClass:"mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",attrs:{type:"number",placeholder:"E.g 20"},domProps:{value:e.gateway.snr},on:{input:function(t){t.target.composing||e.$set(e.gateway,"snr",t.target.value)}}})]),e._v(" "),t("label",{staticClass:"block"},[t("span",{staticClass:"block text-lg font-semibold text-slate-700"},[e._v("Signal Strength")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.gateway.rssi,expression:"gateway.rssi"}],staticClass:"mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",attrs:{type:"number",placeholder:"E.g 20"},domProps:{value:e.gateway.rssi},on:{input:function(t){t.target.composing||e.$set(e.gateway,"rssi",t.target.value)}}})]),e._v(" "),t("label",{staticClass:"block"},[t("span",{staticClass:"block text-lg font-semibold text-slate-700"},[e._v("Company")]),e._v(" "),t("div",{staticClass:"flex justify-center mt-2"},[t("div",{staticClass:"w-full"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.gateway.companyId,expression:"gateway.companyId"}],staticClass:"form-select appearance-none disabled:opacity-75 block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{disabled:!e.isadmin,"aria-label":"Select company"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.gateway,"companyId",t.target.multiple?n:n[0])}}},[t("option",{attrs:{selected:""}},[e._v("Select company")]),e._v(" "),e._l(e.companies,(function(n){return t("option",{key:n.id,domProps:{value:n.id}},[e._v(e._s(n.name))])}))],2)])])])]),e._v(" "),t("div",{staticClass:"flex justify-end mt-6 pt-3 text-white font-bold"},[t("button",{staticClass:"transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-8 rounded-full",on:{click:e.save}},[e._v("\n          Add gateway\n        ")])])])])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"p-5 border-b flex flex-row justify-between"},[t("div",[t("p",{staticClass:"font-bold text-primary text-3xl"},[e._v("\n        Add new Gateway\n      ")]),e._v(" "),t("p",{staticClass:"text-sm font-light"},[e._v("\n        Register new gateway\n      ")])])])}],!1,null,null,null);t.default=component.exports}}]);