(window.webpackJsonp=window.webpackJsonp||[]).push([[20,14,16],{456:function(t,e,r){var a=r(457);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(33).default)("61d1dd60",a,!0,{sourceMap:!1})},457:function(t,e,r){var a=r(32)((function(t){return t[1]}));a.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{word-wrap:break-word;border-width:thin;display:block;max-width:100%;outline:none;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-property:box-shadow,opacity;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{left:0;overflow:hidden;right:0;top:0}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;letter-spacing:.0071428571em;line-height:1.375rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),a.locals={},t.exports=a},464:function(t,e,r){"use strict";r(17),r(16),r(18),r(6),r(24),r(19),r(25);var a=r(3),n=(r(37),r(284),r(285),r(456),r(195)),o=r(459),i=r(161),c=r(13);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=Object(c.a)(o.a,i.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return l(l({"v-card":!0},i.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var t=l({},n.a.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},481:function(t,e,r){"use strict";r.r(e);var a=r(431),n=r(581),o=r(430),i=r(447),c=r(62),s=r(453),l=(r(37),{props:{tracks:{type:Array,default:null},pages:{type:Number,default:1},titled:{type:Boolean,default:!1}},data:function(){return{headers:[{text:"Id",sortable:!1,value:"id"},{text:"Serial No.#",value:"meter.serialNumber"},{text:"Recorded Unit",value:"recordedUnit"},{text:"Offset Unit",value:"offSet"},{text:"Valve Status",value:"status"},{text:"Recorded At",value:"recordedtime"}]}}}),u=r(71),d=Object(u.a)(l,(function(){var t=this,e=t._self._c;return t.tracks?e(n.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tracks,"items-per-page":15,"server-items-length":t.pages},on:{"update:items-per-page":function(e){return t.$emit("paginate",e)},"update:options":function(e){return t.$emit("paginate",e)}},scopedSlots:t._u([t.titled?{key:"top",fn:function(){return[e(c.a,{attrs:{flat:""}},[e(s.a,{staticClass:"font-weight-bold"},[t._v("\n        Meter Usage tracks\n      ")]),t._v(" "),e(i.a),t._v(" "),e(a.a,{staticClass:"text-capitalize",attrs:{color:"blue","x-small":"",text:"",to:"/readings"}},[t._v("\n        Meter Readings\n      ")]),t._v(" "),e("export-button",{attrs:{report:"tracks"}})],1)]},proxy:!0}:null,{key:"item.status",fn:function(r){return["00"===r.item.valveStatus?e(o.a,{attrs:{small:"",color:"blue"}},[t._v("\n      mdi-water-check\n    ")]):e(o.a,{attrs:{small:"",color:"red"}},[t._v("\n      mdi-water-check\n    ")])]}},{key:"item.recordedtime",fn:function(r){var a=r.item;return[e("span",[t._v(t._s(t._f("dateformat")(a.createdAt)))])]}},t.tracks.length>14?{key:"footer.prepend",fn:function(){return[t.titled?t._e():e(a.a,{staticClass:"text-capitalize",attrs:{color:"blue","x-small":"",text:"",to:"/tracks"}},[t._v("\n      Load more ...\n    ")])]},proxy:!0}:null],null,!0)}):e("skeleton-table-loader")}),[],!1,null,null,null);e.default=d.exports},484:function(t,e,r){var a=r(492);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(33).default)("47defbda",a,!0,{sourceMap:!1})},491:function(t,e,r){"use strict";r(484)},492:function(t,e,r){var a=r(32)((function(t){return t[1]}));a.push([t.i,".outlined[data-v-f4e817d0]{border-color:blue!important;color:blue!important}",""]),a.locals={},t.exports=a},505:function(t,e,r){"use strict";r(16),r(18),r(24),r(25);var a=r(3),n=(r(6),r(37),r(17),r(22),r(51),r(466),r(39),r(467),r(468),r(469),r(470),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(478),r(479),r(41),r(50),r(19),r(66),r(287),r(0)),o=r(127),i=r(1);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=["sm","md","lg","xl"],u=l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),d=l.reduce((function(t,e){return t["offset"+Object(i.D)(e)]={type:[String,Number],default:null},t}),{}),p=l.reduce((function(t,e){return t["order"+Object(i.D)(e)]={type:[String,Number],default:null},t}),{}),f={col:Object.keys(u),offset:Object.keys(d),order:Object.keys(p)};function v(t,e,r){var a=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");a+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(a+="-".concat(r)).toLowerCase():a.toLowerCase()}}var b=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:s(s(s(s({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},p),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,n=e.data,i=e.children,c=(e.parent,"");for(var s in r)c+=String(r[s]);var l=b.get(c);if(!l){var u,d;for(d in l=[],f)f[d].forEach((function(t){var e=r[t],a=v(d,t,e);a&&l.push(a)}));var p=l.some((function(t){return t.startsWith("col-")}));l.push((u={col:!p||!r.cols},Object(a.a)(u,"col-".concat(r.cols),r.cols),Object(a.a)(u,"offset-".concat(r.offset),r.offset),Object(a.a)(u,"order-".concat(r.order),r.order),Object(a.a)(u,"align-self-".concat(r.alignSelf),r.alignSelf),u)),b.set(c,l)}return t(r.tag,Object(o.a)(n,{class:l}),i)}})},508:function(t,e,r){"use strict";r.r(e);var a=r(503),n=r(464),o=r(505),i=r(430),c=r(488),s=r(461),l={props:{item:{type:Object,default:null}},data:function(){return{}}},u=(r(491),r(71)),d=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"pa-1",attrs:{xs:"6",sm:"6",md:"2",xl:"2"}},[e(n.a,{staticClass:"mx-auto",attrs:{color:"#fef2f2",flat:"",elevation:"1",to:t.item.to}},[e(c.a,[e(s.a,[e(s.c,{staticClass:"font-weight-black",domProps:{innerHTML:t._s(t.item.value)}}),t._v(" "),e(s.b,{staticClass:"font-weight-normal black--text my-1",domProps:{innerHTML:t._s(t.item.title)}})],1),t._v(" "),e(a.a,{staticClass:"ml-0 mr-3",attrs:{color:t.item.color,size:"48"}},[e(i.a,{attrs:{color:"white"},domProps:{textContent:t._s(t.item.icon)}})],1)],1)],1)],1)}),[],!1,null,"f4e817d0",null);e.default=d.exports},570:function(t,e,r){"use strict";r(16),r(18),r(24),r(25);var a=r(3),n=(r(6),r(50),r(64),r(36),r(17),r(22),r(51),r(466),r(39),r(467),r(468),r(469),r(470),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(478),r(479),r(41),r(19),r(287),r(0)),o=r(127),i=r(1);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=["sm","md","lg","xl"],u=["start","end","center"];function d(t,e){return l.reduce((function(r,a){return r[t+Object(i.D)(a)]=e(),r}),{})}var p=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},b=d("justify",(function(){return{type:String,default:null,validator:v}})),g=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},h=d("alignContent",(function(){return{type:String,default:null,validator:g}})),m={align:Object.keys(f),justify:Object.keys(b),alignContent:Object.keys(h)},y={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,r){var a=y[t];if(null!=r){if(e){var n=e.replace(t,"");a+="-".concat(n)}return(a+="-".concat(r)).toLowerCase()}}var O=new Map;e.a=n.a.extend({name:"v-row",functional:!0,props:s(s(s({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p}},f),{},{justify:{type:String,default:null,validator:v}},b),{},{alignContent:{type:String,default:null,validator:g}},h),render:function(t,e){var r=e.props,n=e.data,i=e.children,c="";for(var s in r)c+=String(r[s]);var l=O.get(c);if(!l){var u,d;for(d in l=[],m)m[d].forEach((function(t){var e=r[t],a=_(d,t,e);a&&l.push(a)}));l.push((u={"no-gutters":r.noGutters,"row--dense":r.dense},Object(a.a)(u,"align-".concat(r.align),r.align),Object(a.a)(u,"justify-".concat(r.justify),r.justify),Object(a.a)(u,"align-content-".concat(r.alignContent),r.alignContent),u)),O.set(c,l)}return t(r.tag,Object(o.a)(n,{staticClass:"row",class:l}),i)}})},602:function(t,e,r){"use strict";r.r(e);var a=r(570),n=(r(17),r(16),r(18),r(6),r(24),r(19),r(25),r(3)),o=(r(65),r(81)),i=r(481),c=r(508);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}var l={name:"NuxtTutorial",components:{"usage-track":i.default,"summary-card":c.default},data:function(){return{summaries:[{title:"Usage track",value:"20"},{title:"Usage track",value:"20"},{title:"Usage track",value:"20"},{title:"Usage track",value:"20"},{title:"Usage track",value:"20"},{title:"Usage track",value:"20"},{title:"Usage track",value:"20"},{title:"Usage track",value:"20"},{title:"Usage track",value:"20"}]}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(o.b)({totals:"totals",tracks:"recenttracks",units:"units"})),mounted:function(){this.$nextTick((function(){var t=this;window.setInterval((function(){t.fetchdashboardinfos()}),27e4)}))},created:function(){this.fetchdashboardinfos()},methods:{fetchdashboardinfos:function(){this.$store.dispatch("_fetchrecentusagetracks"),this.$store.dispatch("_fetchstatistics"),this.$store.dispatch("_fetchstatisticalunits")}}},u=l,d=r(71),p=Object(d.a)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-gray-600 font-body"},[e("div",{staticClass:"p-6"},[t._m(0),t._v(" "),t.totals?e("div",[e(a.a,{attrs:{"no-gutters":""}},t._l(t.totals,(function(t,r){return e("summary-card",{key:r,attrs:{item:t}})})),1)],1):t._e(),t._v(" "),e("div",[t.tracks?e("div",[e("h4",{staticClass:"font-bold mt-12 border-b border-gray-200"},[t._v("\n          Recent usage tracks\n        ")]),t._v(" "),e("div",{staticClass:"mt-8"},[e("usage-track",{attrs:{tracks:t.tracks}})],1)]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"flex justify-center md:justify-between border-b border-gray-200"},[t("div",[t("header",[t("h2",{staticClass:"text-gray-700 ml-2 font-semibold"},[this._v("\n            Summaries\n          ")])])])])}],!1,null,null,null);e.default=p.exports;installComponents(p,{UsageTrack:r(481).default})}}]);