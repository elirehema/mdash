(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4],{313:function(t,e,n){"use strict";n.r(e);n(314);var r={props:{page:{type:Number,default:1},pages:{type:Number,default:0}},data:function(){return{current:0}},created:function(){this.current=this.page},methods:{updatepage:function(t){this.current=t,this.requestdateupdate()},previousclicked:function(){this.current=this.current>1?this.current-1:this.current,this.requestdateupdate()},nextclicked:function(){this.current=this.current<this.pages?this.current+1:this.current,this.requestdateupdate()},requestdateupdate:function(){this.$emit("update",this.current)}}},o=n(37),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.pages>1?e("div",[e("div",{staticClass:"min-w-full bg-emerald-50 py-5"},[e("div",{staticClass:"flex justify-end w-full"},[e("nav",{staticClass:"isolate inline-flex -space-x-px rounded-md shadow-sm",attrs:{"aria-label":"Pagination"}},[e("a",{staticClass:"relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",on:{click:t.previousclicked}},[e("span",{staticClass:"sr-only"},[t._v("Previous")]),t._v(" "),e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})])]),t._v(" "),t._l(t.pages,(function(p){return e("a",{key:p,staticClass:"relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20 cursor-pointer",class:p==t.current?"border-plainblue bg-plainblue text-white font-bold":"text-gray-500 bg-white border-gray-300",attrs:{type:"button","aria-current":"page"},on:{click:function(e){return t.updatepage(p)}}},[t._v(t._s(p))])})),t._v(" "),e("a",{staticClass:"relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",on:{click:t.nextclicked}},[e("span",{staticClass:"sr-only"},[t._v("Next")]),t._v(" "),e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"}})])])],2)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},314:function(t,e,n){"use strict";var r=n(12),o=n(6),c=n(4),l=n(109),d=n(19),f=n(14),v=n(205),m=n(48),h=n(82),_=n(204),y=n(5),x=n(83).f,w=n(39).f,C=n(18).f,N=n(315),k=n(316).trim,I="Number",E=o.Number,A=E.prototype,R=o.TypeError,T=c("".slice),z=c("".charCodeAt),M=function(t){var e=_(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,o,c,l,d,code,f=_(t,"number");if(h(f))throw R("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=z(f,0))||45===e){if(88===(n=z(f,2))||120===n)return NaN}else if(48===e){switch(z(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=T(f,2)).length,d=0;d<l;d++)if((code=z(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var P,S=function(t){var e=arguments.length<1?0:E(M(t)),n=this;return m(A,n)&&y((function(){N(n)}))?v(Object(e),n,S):e},j=r?x(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;j.length>F;F++)f(E,P=j[F])&&!f(S,P)&&C(S,P,w(E,P));S.prototype=A,A.constructor=S,d(o,I,S,{constructor:!0})}},315:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},316:function(t,e,n){var r=n(4),o=n(30),c=n(16),l=n(317),d=r("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},317:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},327:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(10),{components:{"pagination-component":n(313).default},data:function(){return{fields:["ID","Amount","Unit","Tariff","Control No","Referecence","Transaction Date","Recorderd Date","Updated Date"],menu:!1,page:1,pages:0,payments:null}},created:function(){this.fetchpagenatedpayments()},methods:{updatepage:function(t){this.payments=null,this.page=t,this.fetchpagenatedpayments(t)},fetchpagenatedpayments:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("/payments/paginate",{params:{page:t.page,size:Math.round(window.innerHeight/64)}}).then((function(e){t.payments=e.results,t.pages=e.totalPages})).catch((function(t){}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return t.payments?e("div",{staticClass:"container min-w-full"},[e("div",{staticClass:"p-5 border-b flex justify-between"},[t._m(0),t._v(" "),e("nuxt-link",{attrs:{to:"/payments/notifications"}},[e("a",{staticClass:"underline italic text-blue-500"},[t._v("View all payments notifications")])])],1),t._v(" "),e("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[e("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-900"},[e("tr",t._l(t.fields,(function(n,i){return e("th",{key:i,staticClass:"py-3 px-6",attrs:{scope:"col"}},[t._v("\n          "+t._s(n)+"\n        ")])})),0)]),t._v(" "),e("tbody",t._l(t.payments,(function(n,i){return e("tr",{key:i,staticClass:"odd:bg-gray-50 bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"},[e("th",{staticClass:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white",attrs:{scop:"row"}},[t._v("\n          "+t._s(n.id)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.amount)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.unit)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.tarrifId)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.controlNumber)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(n.paymentReference)+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(n.transactionDate))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(n.createdAt))+"\n        ")]),t._v(" "),e("td",{staticClass:"py-4 px-6"},[t._v("\n          "+t._s(t._f("dateformat")(n.updatedAt))+"\n        ")])])})),0)]),t._v(" "),e("pagination-component",{attrs:{page:t.page,pages:t.pages},on:{update:function(e){return t.updatepage(e)}}})],1):t._e()}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"font-bold text-primary text-3xl"},[t._v("\n        Payments\n      ")]),t._v(" "),e("p",{staticClass:"text-sm font-light"},[t._v("\n        List of all payments\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PaginationComponent:n(313).default})}}]);