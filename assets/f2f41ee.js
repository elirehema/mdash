(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5],{314:function(t,e,r){"use strict";r.r(e);r(315);var n={props:{page:{type:Number,default:1},pages:{type:Number,default:0}},data:function(){return{current:0}},created:function(){this.current=this.page},methods:{updatepage:function(t){this.current=t,this.requestdateupdate()},previousclicked:function(){this.current=this.current>1?this.current-1:this.current,this.requestdateupdate()},nextclicked:function(){this.current=this.current<this.pages?this.current+1:this.current,this.requestdateupdate()},requestdateupdate:function(){this.$emit("update",this.current)}}},o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.pages>1?e("div",[e("div",{staticClass:"flex flex-col items-center p-4"},[e("span",{staticClass:"text-sm text-gray-700 dark:text-gray-400"},[t._v("\n      Showing "),e("span",{staticClass:"font-semibold text-gray-900 dark:text-white"},[t._v(t._s(t.page))]),t._v(" out of "),e("span",{staticClass:"font-semibold text-gray-900 dark:text-white"},[t._v(t._s(t.pages))]),t._v(" Pages\n    ")]),t._v(" "),e("div",{staticClass:"inline-flex mt-2 xs:mt-0"},[e("button",{staticClass:"inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-plainblue rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",attrs:{disabled:1==t.page},on:{click:t.previousclicked}},[e("svg",{staticClass:"mr-2 w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})]),t._v("\n        Prev\n      ")]),t._v(" "),e("button",{staticClass:"inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-primary rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",attrs:{disabled:t.page==t.pages},on:{click:t.nextclicked}},[t._v("\n        Next\n        "),e("svg",{staticClass:"ml-2 w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]),t._v(" "),t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,r){"use strict";var n=r(12),o=r(5),c=r(6),l=r(109),d=r(19),f=r(14),v=r(206),h=r(49),_=r(82),x=r(205),m=r(4),y=r(83).f,w=r(39).f,C=r(18).f,k=r(316),N=r(317).trim,I="Number",E=o.Number,A=E.prototype,R=o.TypeError,T=c("".slice),S=c("".charCodeAt),M=function(t){var e=x(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,r,n,o,c,l,d,code,f=x(t,"number");if(_(f))throw R("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(e=S(f,0))||45===e){if(88===(r=S(f,2))||120===r)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(l=(c=T(f,2)).length,d=0;d<l;d++)if((code=S(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+f};if(l(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var P,F=function(t){var e=arguments.length<1?0:E(M(t)),r=this;return h(A,r)&&m((function(){k(r)}))?v(Object(e),r,F):e},L=n?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;L.length>j;j++)f(E,P=L[j])&&!f(F,P)&&C(F,P,w(E,P));F.prototype=A,A.constructor=F,d(o,I,F,{constructor:!0})}},316:function(t,e,r){var n=r(6);t.exports=n(1..valueOf)},317:function(t,e,r){var n=r(6),o=r(30),c=r(16),l=r(318),d=n("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),_=function(t){return function(e){var r=c(o(e));return 1&t&&(r=d(r,v,"")),2&t&&(r=d(r,h,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},318:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},336:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(10),{data:function(){return{fields:["ID","Referecence","Amount","Unit","Tariff","Control No","Transaction Date","Recorderd Date","Updated Date"],menu:!1,page:1,pages:0,notifications:null}},created:function(){this.fetchpagenatednotifications()},methods:{updatepage:function(t){this.notifications=null,this.page=t,this.fetchpagenatednotifications(t)},fetchpagenatednotifications:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("/payments/notifications/paginate",{params:{page:t.page,size:Math.round(window.innerHeight/64)}}).then((function(e){t.notifications=e.results,t.pages=e.totalPages})).catch((function(t){}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=r(37),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return t.notifications?e("div",{staticClass:"container min-w-full"},[t._m(0),t._v(" "),e("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[e("thead",{staticClass:"text-md text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-900"},[e("tr",t._l(t.fields,(function(r,i){return e("th",{key:i,staticClass:"py-3 px-6",attrs:{scope:"col"}},[t._v("\n          "+t._s(r)+"\n        ")])})),0)]),t._v(" "),e("tbody",t._l(t.notifications,(function(r,i){return e("tr",{key:i,staticClass:"odd:bg-gray-50 bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"},[e("th",{staticClass:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scop:"row"}},[t._v("\n          "+t._s(r.id)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.paymentReference)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.amount)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.unit)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.tariffId)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(r.controlNumber)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(r.transactionDate))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(r.createdAt))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(r.updatedAt))+"\n        ")])])})),0)]),t._v(" "),e("pagination-component",{attrs:{page:t.page,pages:t.pages},on:{update:function(e){return t.updatepage(e)}}})],1):t._e()}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-5 border-b flex flex-row justify-between"},[e("div",[e("p",{staticClass:"font-bold text-primary text-3xl"},[t._v("\n        Payment Notifications\n      ")]),t._v(" "),e("p",{staticClass:"text-sm font-light"},[t._v("\n        List of recent notifications\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PaginationComponent:r(314).default})}}]);