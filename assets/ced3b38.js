(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4],{313:function(t,e,n){"use strict";n.r(e);n(314);var r={props:{page:{type:Number,default:1},pages:{type:Number,default:0}},data:function(){return{current:0}},created:function(){this.current=this.page},methods:{updatepage:function(t){this.current=t,this.requestdateupdate()},previousclicked:function(){this.current=this.current>1?this.current-1:this.current,this.requestdateupdate()},nextclicked:function(){this.current=this.current<this.pages?this.current+1:this.current,this.requestdateupdate()},requestdateupdate:function(){this.$emit("update",this.current)}}},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.pages>1?e("div",[e("div",{staticClass:"min-w-full bg-emerald-50 py-5"},[e("div",{staticClass:"flex justify-end w-full"},[e("nav",{staticClass:"isolate inline-flex -space-x-px rounded-md shadow-sm",attrs:{"aria-label":"Pagination"}},[e("a",{staticClass:"relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",on:{click:t.previousclicked}},[e("span",{staticClass:"sr-only"},[t._v("Previous")]),t._v(" "),e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})])]),t._v(" "),t._l(t.pages,(function(p){return e("a",{key:p,staticClass:"relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20 cursor-pointer",class:p==t.current?"border-plainblue bg-plainblue text-white font-bold":"text-gray-500 bg-white border-gray-300",attrs:{type:"button","aria-current":"page"},on:{click:function(e){return t.updatepage(p)}}},[t._v(t._s(p))])})),t._v(" "),e("a",{staticClass:"relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",on:{click:t.nextclicked}},[e("span",{staticClass:"sr-only"},[t._v("Next")]),t._v(" "),e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"}})])])],2)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},314:function(t,e,n){"use strict";var r=n(12),o=n(6),c=n(4),l=n(109),f=n(19),d=n(14),v=n(205),h=n(48),_=n(82),m=n(204),x=n(5),y=n(83).f,w=n(39).f,C=n(18).f,N=n(315),k=n(316).trim,I="Number",E=o.Number,A=E.prototype,R=o.TypeError,T=c("".slice),z=c("".charCodeAt),M=function(t){var e=m(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,o,c,l,f,code,d=m(t,"number");if(_(d))throw R("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=k(d),43===(e=z(d,0))||45===e){if(88===(n=z(d,2))||120===n)return NaN}else if(48===e){switch(z(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=T(d,2)).length,f=0;f<l;f++)if((code=z(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(l(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var P,S=function(t){var e=arguments.length<1?0:E(M(t)),n=this;return h(A,n)&&x((function(){N(n)}))?v(Object(e),n,S):e},j=r?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;j.length>F;F++)d(E,P=j[F])&&!d(S,P)&&C(S,P,w(E,P));S.prototype=A,A.constructor=S,f(o,I,S,{constructor:!0})}},315:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},316:function(t,e,n){var r=n(4),o=n(30),c=n(16),l=n(317),f=r("".replace),d="["+l+"]",v=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),_=function(t){return function(e){var n=c(o(e));return 1&t&&(n=f(n,v,"")),2&t&&(n=f(n,h,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},317:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},334:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(10),{data:function(){return{fields:["ID","Referecence","Amount","Unit","Tariff","Control No","Transaction Date","Recorderd Date","Updated Date"],menu:!1,page:1,pages:0,notifications:null}},created:function(){this.fetchpagenatednotifications()},methods:{updatepage:function(t){this.notifications=null,this.page=t,this.fetchpagenatednotifications(t)},fetchpagenatednotifications:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("/payments/notifications/paginate",{params:{page:t.page,size:Math.round(window.innerHeight/64)}}).then((function(e){t.notifications=e.results,t.pages=e.totalPages})).catch((function(t){}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return t.notifications?e("div",{staticClass:"container min-w-full"},[t._m(0),t._v(" "),e("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[e("thead",{staticClass:"text-md text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-900"},[e("tr",t._l(t.fields,(function(n,i){return e("th",{key:i,staticClass:"py-3 px-6",attrs:{scope:"col"}},[t._v("\n          "+t._s(n)+"\n        ")])})),0)]),t._v(" "),e("tbody",t._l(t.notifications,(function(n,i){return e("tr",{key:i,staticClass:"odd:bg-gray-50 bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"},[e("th",{staticClass:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scop:"row"}},[t._v("\n          "+t._s(n.id)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.paymentReference)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.amount)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.unit)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.tariffId)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.controlNumber)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(n.transactionDate))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(n.createdAt))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(n.updatedAt))+"\n        ")])])})),0)]),t._v(" "),e("pagination-component",{attrs:{page:t.page,pages:t.pages},on:{update:function(e){return t.updatepage(e)}}})],1):t._e()}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-5 border-b flex flex-row justify-between"},[e("div",[e("p",{staticClass:"font-bold text-primary text-3xl"},[t._v("\n        Payment Notifications\n      ")]),t._v(" "),e("p",{staticClass:"text-sm font-light"},[t._v("\n        List of recent notifications\n      ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PaginationComponent:n(313).default})}}]);