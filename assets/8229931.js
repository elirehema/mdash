(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{319:function(t,e,l){"use strict";l.r(e);var r={props:{tracks:{type:Array,default:null}},data:function(){return{fields:["ID","MeterID","Recorded Unit","Offset","Valve Status Message","Created","Updated"],menu:!1}}},n=l(37),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return t.tracks?e("div",{staticClass:"container min-w-full"},[e("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[t.tracks?e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-900"},[e("tr",t._l(t.fields,(function(l,i){return e("th",{key:i,staticClass:"py-3 px-6",attrs:{scope:"col"}},[t._v("\n          "+t._s(l)+"\n        ")])})),0)]):t._e(),t._v(" "),e("tbody",t._l(t.tracks,(function(l,i){return e("tr",{key:i,staticClass:"odd:bg-gray-50 bg-white border-b text-gray-500 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"},[e("th",{staticClass:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scop:"row"}},[t._v("\n          "+t._s(l.id)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[e("nuxt-link",{attrs:{to:"/meters/".concat(l.MeterId)}},[e("span",{staticClass:"mt-16 bg-transparent transform hover:scale-125 hover:text-lg hover:italic transition hover:font-bold ease-out hover:text-blue-600 duration-600"},[t._v(t._s(l.MeterId))])])],1),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(l.recordedUnit)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(l.offSet)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6 text-green-500 font-semibold"},[t._v("\n          "+t._s("[ "+l.valveStatus+" ] - "+l.valveStatusMessage)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(l.createdAt))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(l.updatedAt))+"\n        ")])])})),0)])]):e("div",{staticClass:"grid grid-cols-2 py-10 justify-center content-center"},[e("div",{staticClass:"justify-self-end"},[e("svg",{staticClass:"animate-spin fill-blue-600",attrs:{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.129 3.195a9.033 9.033 0 0 1 3.742 0 .75.75 0 1 1-.31 1.467 7.534 7.534 0 0 0-3.122 0 .75.75 0 0 1-.31-1.467Zm5.736 1.476a.75.75 0 0 1 1.038-.22 9.03 9.03 0 0 1 1.097.84V4.25a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.35a7.537 7.537 0 0 0-1.015-.791.75.75 0 0 1-.22-1.038ZM19.5 12v-.75a.75.75 0 0 1 1.5 0V12c0 .64-.067 1.267-.195 1.871a.75.75 0 0 1-1.467-.31A7.538 7.538 0 0 0 19.5 12ZM8.135 4.671a.75.75 0 0 1-.22 1.038A7.545 7.545 0 0 0 5.71 7.915a.75.75 0 1 1-1.257-.818 9.044 9.044 0 0 1 2.645-2.646.75.75 0 0 1 1.038.22ZM4.662 10.44a.75.75 0 0 0-1.467-.31 9.033 9.033 0 0 0 0 3.742.75.75 0 1 0 1.467-.31 7.534 7.534 0 0 1 0-3.122Zm14.667 5.426a.75.75 0 0 1 .22 1.038 9.043 9.043 0 0 1-2.646 2.646.75.75 0 0 1-.818-1.258 7.548 7.548 0 0 0 2.206-2.206.75.75 0 0 1 1.038-.22Zm-13.62.22a.75.75 0 1 0-1.257.818 9.043 9.043 0 0 0 2.645 2.646.75.75 0 0 0 .818-1.258 7.546 7.546 0 0 1-2.206-2.206Zm3.841 3.831a.75.75 0 0 1 .89-.578 7.538 7.538 0 0 0 3.12 0 .75.75 0 1 1 .311 1.467 9.035 9.035 0 0 1-3.742 0 .75.75 0 0 1-.579-.889Z"}})])]),t._v(" "),t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"mt-1 ml-4 text-blue-600 justify-self-start"},[t("span",[this._v(" Please Wait...")])])}],!1,null,null,null);e.default=component.exports},346:function(t,e,l){"use strict";l.r(e);l(38),l(26),l(33),l(11),l(53),l(34),l(54);var r=l(15),n=(l(84),l(48));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var c={name:"NuxtTutorial",components:{"usage-track":l(319).default},data:function(){return{menu:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({totals:"totals",tracks:"recenttracks"})),mounted:function(){this.$nextTick((function(){var t=this;window.setInterval((function(){t.fetchdashboardinfos()}),27e4)}))},created:function(){this.fetchdashboardinfos()},methods:{fetchdashboardinfos:function(){this.$store.dispatch("_fetchrecentusagetracks"),this.$store.dispatch("_fetchstatistics")}}},d=c,v=l(37),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-gray-600 font-body"},[e("div",{staticClass:"p-6"},[t._m(0),t._v(" "),t.totals?e("div",[e("div",{staticClass:"mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10"},[e("nuxt-link",{attrs:{to:"/meters"}},[e("div",{staticClass:"bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg relative"},[e("div",{staticClass:"grid grid-cols-12"},[e("div",{staticClass:"col-span-4 grid justify-center content-center"},[e("svg",{staticClass:"fill-green-500",attrs:{width:"40",height:"40",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"m10.05 15.42 6.256-8.475a.694.694 0 0 1 1.235.57l-.03.098-3.87 9.799a2.07 2.07 0 1 1-3.737-1.765l.069-.116.076-.11 6.257-8.476-6.257 8.476Zm8.56-8.006a10.66 10.66 0 0 1 2.022 2.172c.524.749 1.03 1.656 1.32 2.398a.75.75 0 1 1-1.397.547 8.238 8.238 0 0 0-.378-.812l-2.05 1.183a.75.75 0 0 1-.834-1.242l.085-.057 2.018-1.166-.23-.314a9.156 9.156 0 0 0-1.058-1.16l.38-.964c.038-.096.067-.194.087-.292l.024-.147.01-.146Zm-2.63-1.561a1.715 1.715 0 0 0-.406.328l-.114.14-.54.733a9.205 9.205 0 0 0-2.17-.47v2.672a.75.75 0 0 1-1.493.102l-.007-.102v-2.69A9.108 9.108 0 0 0 6.658 8.2c-.816.572-1.528 1.322-2.119 2.205l2.082 1.202a.75.75 0 0 1-.658 1.344l-.092-.045-2.074-1.197c-.128.266-.246.54-.356.821a.75.75 0 0 1-1.398-.543c.807-2.075 2.08-3.843 3.754-5.016a10.642 10.642 0 0 1 10.183-1.117Z"}})])]),t._v(" "),e("div",{staticClass:"col-span-8 p-4 2xl:p-8 bg-primary flex flex-col"},[e("span",{staticClass:"font-bold text-sm 2xl:text-xl text-white"},[t._v(" Meters")]),t._v(" "),e("span",{staticClass:"font-bold text-lg 2xl:text-2xl text-white"},[t._v(t._s(t.totals.meters))])])])])]),e("nuxt-link",{attrs:{to:"/users"}},[e("div",{staticClass:"rounded-lg overflow-hidden shadow-md hover:shadow-lg relative"},[e("div",{staticClass:"grid grid-cols-12 bg-white"},[e("div",{staticClass:"col-span-4 grid justify-center content-center"},[e("svg",{staticClass:"fill-green-500",attrs:{width:"40",height:"40",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75h5.502Zm0 1.5H9.252a.25.25 0 0 0-.25.25v4.749a3.001 3.001 0 0 0 6.002 0V11.75a.25.25 0 0 0-.25-.25ZM3.75 10h3.381a2.738 2.738 0 0 0-.618 1.5H3.75a.25.25 0 0 0-.25.25v3.249a2.501 2.501 0 0 0 3.082 2.433c.085.504.24.985.453 1.432A4.001 4.001 0 0 1 2 14.999V11.75c0-.966.784-1.75 1.75-1.75Zm13.125 0h3.375c.966 0 1.75.784 1.75 1.75V15a4 4 0 0 1-5.03 3.866c.214-.448.369-.929.455-1.433A2.5 2.5 0 0 0 20.5 15v-3.25a.25.25 0 0 0-.25-.25h-2.757a2.738 2.738 0 0 0-.618-1.5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm6.5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-13 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}})])]),t._v(" "),e("div",{staticClass:"col-span-8 p-4 2xl:p-8 bg-primary flex flex-col"},[e("span",{staticClass:"font-bold text-sm 2xl:text-xl text-white"},[t._v("Users")]),t._v(" "),e("span",{staticClass:"font-bold text-lg 2xl:text-2xl text-white"},[t._v(t._s(t.totals.users))])])])])]),e("nuxt-link",{attrs:{to:"/companies"}},[e("div",{staticClass:"rounded-lg overflow-hidden shadow-md hover:shadow-lg relative"},[e("div",{staticClass:"grid grid-cols-12 bg-white"},[e("div",{staticClass:"col-span-4 grid justify-center content-center"},[e("svg",{staticClass:"fill-green-500",attrs:{width:"40",height:"40",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M12 3a.75.75 0 0 1 .743.648l.007.102v16.5a.75.75 0 0 1-1.493.102l-.007-.102V3.75A.75.75 0 0 1 12 3ZM8.255 6a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75Zm7.49 0a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75ZM4.751 9a.75.75 0 0 1 .743.648l.007.102v4.5a.75.75 0 0 1-1.493.102l-.007-.102v-4.5a.75.75 0 0 1 .75-.75Zm14.501 0a.75.75 0 0 1 .744.648l.006.102v4.499a.75.75 0 0 1-1.493.101l-.007-.101V9.75a.75.75 0 0 1 .75-.75Z"}})])]),t._v(" "),e("div",{staticClass:"col-span-8 p-4 2xl:p-8 bg-primary flex flex-col"},[e("span",{staticClass:"font-bold text-sm 2xl:text-xl text-white"},[t._v("Companies")]),t._v(" "),e("span",{staticClass:"font-bold text-lg 2xl:text-2xl text-white"},[t._v(t._s(t.totals.companies))])])])])]),e("nuxt-link",{attrs:{to:"/purchases"}},[e("div",{staticClass:"rounded-lg overflow-hidden shadow-md hover:shadow-lg relative"},[e("div",{staticClass:"grid grid-cols-12 bg-white"},[e("div",{staticClass:"col-span-4 grid justify-center content-center"},[e("svg",{staticClass:"fill-green-500",attrs:{width:"40",height:"40",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M16.749 2h4.554l.1.014.099.028.06.026c.08.034.153.085.219.15l.04.044.044.057.054.09.039.09.019.064.014.064.009.095v4.532a.75.75 0 0 1-1.493.102l-.007-.102V4.559l-6.44 6.44a.75.75 0 0 1-.976.073L13 11 9.97 8.09l-5.69 5.689a.75.75 0 0 1-1.133-.977l.073-.084 6.22-6.22a.75.75 0 0 1 .976-.072l.084.072 3.03 2.91L19.438 3.5h-2.69a.75.75 0 0 1-.742-.648l-.007-.102a.75.75 0 0 1 .648-.743L16.75 2ZM3.75 17a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Zm5.75-3.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM13.75 15a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75Zm5.75-4.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0v-10.5Z"}})])]),t._v(" "),e("div",{staticClass:"col-span-8 p-4 2xl:p-8 bg-primary flex flex-col"},[e("span",{staticClass:"font-bold text-sm 2xl:text-xl text-white"},[t._v("CR Purchases")]),t._v(" "),e("span",{staticClass:"font-bold text-lg 2xl:text-2xl text-white"},[t._v(t._s(t.totals.purchases))])])])])]),e("nuxt-link",{attrs:{to:"/tracks"}},[e("div",{staticClass:"bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg relative"},[e("div",{staticClass:"grid grid-cols-12"},[e("div",{staticClass:"col-span-4 grid justify-center content-center"},[e("svg",{staticClass:"fill-green-500",attrs:{width:"40",height:"40",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M13.22 17.219a.75.75 0 0 0-.073.976l.073.084 2.367 2.37a.77.77 0 0 0 .664.351.786.786 0 0 0 .611-.276l.053-.075 2.367-2.37.073-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073a.75.75 0 0 0-.883-.007l-.094.08L17 18.44V3.656l-.007-.089c-.05-.32-.363-.567-.743-.567s-.694.247-.743.567l-.007.09V18.44l-1.22-1.221-.084-.073a.75.75 0 0 0-.976.073Zm-6.97 2.789A2.25 2.25 0 0 1 4 17.758v-11.5a2.25 2.25 0 0 1 2.25-2.25h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h4a.75.75 0 0 1 0 1.5h-4Z"}})])]),t._v(" "),e("div",{staticClass:"col-span-8 p-4 2xl:p-8 bg-primary flex flex-col"},[e("span",{staticClass:"font-bold text-sm 2xl:text-xl text-white"},[t._v("Usage Tracks")]),t._v(" "),e("span",{staticClass:"font-bold text-lg 2xl:text-2xl text-white"},[t._v(t._s(t.totals.usageTracks))])])])])])],1)]):t._e(),t._v(" "),e("div",[t._e(),t._v(" "),t._e(),t._v(" "),t.tracks?e("div",[e("h4",{staticClass:"font-bold mt-12 pb-2 border-b border-gray-200"},[t._v("\n          Recent usage tracks\n        ")]),t._v(" "),e("div",{staticClass:"mt-8"},[e("usage-track",{attrs:{tracks:t.tracks}})],1),t._v(" "),t.tracks.length>14?e("div",{staticClass:"flex justify-center mt-4"},[e("nuxt-link",{attrs:{to:"/tracks"}},[e("span",{staticClass:"mt-16 bg-transparent transform hover:scale-125 hover:text-lg italic transition font-bold ease-out text-blue-600 duration-300"},[t._v("\n              Load more ...\n            ")])])],1):t._e()]):t._e()])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center md:justify-between border-b border-gray-200"},[e("div",[e("header",[e("h2",{staticClass:"text-gray-700 text-3xl font-semibold"},[t._v("\n            Dashboard\n          ")]),t._v(" "),e("h3",{staticClass:"text-sm font-thin"},[t._v("\n            For NexIoT Admin\n          ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-4"},[e("span",{staticClass:"font-bold"},[t._v("Top Delicious Foods")]),t._v(" "),e("span",{staticClass:"block text-gray-500 text-sm"},[t._v("\n              Recipies by Mario")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UsageTrack:l(319).default})}}]);