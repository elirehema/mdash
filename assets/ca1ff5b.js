(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5,6],{319:function(t,e,r){"use strict";r.r(e);r(320);var n={props:{page:{type:Number,default:1},pages:{type:Number,default:0}},data:function(){return{current:0}},created:function(){this.current=this.page},methods:{updatepage:function(t){this.current=t,this.requestdateupdate()},previousclicked:function(){this.current=this.current>1?this.current-1:this.current,this.requestdateupdate()},nextclicked:function(){this.current=this.current<this.pages?this.current+1:this.current,this.requestdateupdate()},requestdateupdate:function(){this.$emit("update",this.current)}}},l=r(37),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return t.pages>1?e("div",[e("div",{staticClass:"flex flex-col items-center p-4"},[e("span",{staticClass:"text-sm text-gray-700 dark:text-gray-400"},[t._v("\n      Showing "),e("span",{staticClass:"font-semibold text-gray-900 dark:text-white"},[t._v(t._s(t.page))]),t._v(" out of "),e("span",{staticClass:"font-semibold text-gray-900 dark:text-white"},[t._v(t._s(t.pages))]),t._v(" Pages\n    ")]),t._v(" "),e("div",{staticClass:"inline-flex mt-2 xs:mt-0"},[e("button",{staticClass:"inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-plainblue rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",attrs:{disabled:1==t.page},on:{click:t.previousclicked}},[e("svg",{staticClass:"mr-2 w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})]),t._v("\n        Prev\n      ")]),t._v(" "),e("button",{staticClass:"inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-primary rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",attrs:{disabled:t.page==t.pages},on:{click:t.nextclicked}},[t._v("\n        Next\n        "),e("svg",{staticClass:"ml-2 w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]),t._v(" "),t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,r){"use strict";var n=r(3),l=r(21),o=r(12),c=r(5),path=r(208),d=r(8),f=r(111),v=r(14),h=r(209),_=r(45),x=r(82),m=r(207),y=r(4),w=r(83).f,C=r(39).f,k=r(19).f,N=r(321),E=r(322).trim,I="Number",V=c[I],A=path[I],M=V.prototype,R=c.TypeError,O=d("".slice),S=d("".charCodeAt),L=function(t){var e=m(t,"number");return"bigint"==typeof e?e:P(e)},P=function(t){var e,r,n,l,o,c,d,code,f=m(t,"number");if(x(f))throw R("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=E(f),43===(e=S(f,0))||45===e){if(88===(r=S(f,2))||120===r)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+f}for(c=(o=O(f,2)).length,d=0;d<c;d++)if((code=S(o,d))<48||code>l)return NaN;return parseInt(o,n)}return+f},T=f(I,!V(" 0o1")||!V("0b1")||V("+0x1")),j=function(t){return _(M,t)&&y((function(){N(t)}))},U=function(t){var e=arguments.length<1?0:V(L(t));return j(this)?h(Object(e),this,U):e};U.prototype=M,T&&!l&&(M.constructor=U),n({global:!0,constructor:!0,wrap:!0,forced:T},{Number:U});var Z=function(t,source){for(var e,r=o?w(source):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),n=0;r.length>n;n++)v(source,e=r[n])&&!v(t,e)&&k(t,e,C(source,e))};l&&A&&Z(path[I],A),(T||l)&&Z(path[I],V)},321:function(t,e,r){var n=r(8);t.exports=n(1..valueOf)},322:function(t,e,r){var n=r(8),l=r(30),o=r(16),c=r(323),d=n("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),_=function(t){return function(e){var r=o(l(e));return 1&t&&(r=d(r,v,"")),2&t&&(r=d(r,h,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},323:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},326:function(t,e,r){"use strict";r.r(e);var n={props:{readings:{type:Array,default:null}},data:function(){return{fields:["DevEUI","Battery %","Type","Confirmed?","Unit","Reading","Valve Status","Created at","Updated at"],menu:!1}},methods:{getValveMessage:function(t){var e="INVALID";switch(t){case"00":e="VALVE OPEN";break;case"01":e="VALVE CLOSE";break;case"11":e="VALVE ERROR";break;case null:e="VALVE NOT SUPPORTING"}return e}}},l=r(37),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return t.readings?e("div",{staticClass:"container min-w-full"},[e("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[t.readings?e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-900"},[e("tr",t._l(t.fields,(function(r,i){return e("th",{key:i,staticClass:"py-3 px-6",attrs:{scope:"col"}},[t._v("\n          "+t._s(r)+"\n        ")])})),0)]):t._e(),t._v(" "),e("tbody",t._l(t.readings,(function(r,i){return e("tr",{key:i,staticClass:"odd:bg-gray-50 bg-white border-b text-gray-500 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"},[e("th",{staticClass:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scop:"row"}},[t._v("\n          "+t._s(r.devEUI)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.BatteryPercentage)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.type)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.confirmed)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.Unit)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.Reading)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6 text-green-500 font-semibold"},[t._v("\n          "+t._s("[ "+r.ValveStatus+" ] - "+t.getValveMessage(r.ValveStatus))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(r.createdAt))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(r.updatedAt))+"\n        ")])])})),0)])]):e("div",{staticClass:"grid grid-cols-2 py-10 justify-center content-center"},[e("div",{staticClass:"justify-self-end"},[e("svg",{staticClass:"animate-spin fill-blue-600",attrs:{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.129 3.195a9.033 9.033 0 0 1 3.742 0 .75.75 0 1 1-.31 1.467 7.534 7.534 0 0 0-3.122 0 .75.75 0 0 1-.31-1.467Zm5.736 1.476a.75.75 0 0 1 1.038-.22 9.03 9.03 0 0 1 1.097.84V4.25a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.35a7.537 7.537 0 0 0-1.015-.791.75.75 0 0 1-.22-1.038ZM19.5 12v-.75a.75.75 0 0 1 1.5 0V12c0 .64-.067 1.267-.195 1.871a.75.75 0 0 1-1.467-.31A7.538 7.538 0 0 0 19.5 12ZM8.135 4.671a.75.75 0 0 1-.22 1.038A7.545 7.545 0 0 0 5.71 7.915a.75.75 0 1 1-1.257-.818 9.044 9.044 0 0 1 2.645-2.646.75.75 0 0 1 1.038.22ZM4.662 10.44a.75.75 0 0 0-1.467-.31 9.033 9.033 0 0 0 0 3.742.75.75 0 1 0 1.467-.31 7.534 7.534 0 0 1 0-3.122Zm14.667 5.426a.75.75 0 0 1 .22 1.038 9.043 9.043 0 0 1-2.646 2.646.75.75 0 0 1-.818-1.258 7.548 7.548 0 0 0 2.206-2.206.75.75 0 0 1 1.038-.22Zm-13.62.22a.75.75 0 1 0-1.257.818 9.043 9.043 0 0 0 2.645 2.646.75.75 0 0 0 .818-1.258 7.546 7.546 0 0 1-2.206-2.206Zm3.841 3.831a.75.75 0 0 1 .89-.578 7.538 7.538 0 0 0 3.12 0 .75.75 0 1 1 .311 1.467 9.035 9.035 0 0 1-3.742 0 .75.75 0 0 1-.579-.889Z"}})])]),t._v(" "),t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"mt-1 ml-4 text-blue-600 justify-self-start"},[t("span",[this._v(" Please Wait...")])])}],!1,null,null,null);e.default=component.exports},336:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(10),{components:{"meter-readings":r(326).default},data:function(){return{page:1,pages:0,readings:null}},created:function(){this.fetchpagenatedusagereadings()},methods:{updatepage:function(t){this.readings=null,this.page=t,this.fetchpagenatedusagereadings()},fetchpagenatedusagereadings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("/readings/paginate",{params:{page:t.page,size:Math.round(window.innerHeight/64)}}).then((function(e){t.readings=e.results,t.pages=e.totalPages})).catch((function(t){}));case 2:case"end":return e.stop()}}),e)})))()}}}),o=r(37),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container min-w-full"},[t._m(0),t._v(" "),e("meter-readings",{attrs:{readings:t.readings}}),t._v(" "),e("pagination-component",{attrs:{page:t.page,pages:t.pages},on:{update:function(e){return t.updatepage(e)}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-5 border-b"},[e("p",{staticClass:"font-bold text-primary text-3xl"},[t._v("\n      Meter Readings\n    ")]),t._v(" "),e("p",{staticClass:"text-sm font-light"},[t._v("\n      List of all meter  readings\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MeterReadings:r(326).default,PaginationComponent:r(319).default})}}]);