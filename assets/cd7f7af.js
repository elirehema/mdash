(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{483:function(e,t,n){var i=n(484);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(31).default)("1377ef10",i,!0,{sourceMap:!1})},484:function(e,t,n){var i=n(30)((function(e){return e[1]}));i.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),i.locals={},e.exports=i},504:function(e,t,n){"use strict";n(17),n(16),n(24),n(19),n(25);var i=n(3),s=(n(65),n(6),n(18),n(81),n(160),n(464),n(50),n(66),n(483),n(487)),a=n(496),r=n(127),l=n(1);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=c(c({},s.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=s.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s.a.options.props.menuProps.type,default:function(){return u}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return c(c({},s.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(l.q)(t,e.itemText),i=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=s.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),c(c({},u),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=s.a.options.computed.listData.call(this);return e.props=c(c({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex((function(e){return e===i}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===l.w.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l.w.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l.w.backspace&&e!==l.w.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[i]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,s.a.options.methods.clearableCallback.call(this)},genInput:function(){var e=a.a.options.methods.genInput.call(this);return e.data=Object(r.a)(e.data,{attrs:{"aria-activedescendant":Object(l.o)(this.$refs.menu,"activeTile.id"),autocomplete:Object(l.o)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=s.a.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?s.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[l.w.home,l.w.end].includes(t)||s.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){s.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){s.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){s.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],s=this.getText(i);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",s),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}}})},520:function(e,t,n){"use strict";n.r(t);var i=n(455),s=n(504),a=n(438),r=n(466),l=n(458),o=n(503),c=n(456),u=n(585),d=n(608),h=n(582),m=n(437),p=n(518),f=n(451),v=n(496),I=n(64),g=n(457),x=(n(34),n(17),n(16),n(18),n(6),n(24),n(19),n(25),n(3)),b=(n(56),n(83));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={data:function(){return{dialog:!1,valid:!0,editedIndex:-1,rules:{required:function(e){return!!e||"Field Required"}},editedItem:{id:0,password:"",phone:"",email:"",role:"",firstname:"",lastname:"",companyId:0},defaultItem:{id:0,password:"",phone:"",email:"",role:"",firstname:"",lastname:"",companyId:0},headers:[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Organization",value:"company"},{text:"Is Active ?",value:"status"},{text:"Last Updated",value:"updated"},{text:"Action",value:"actions"}]}},computed:_(_({},Object(b.c)({users:"users",companies:"companies"})),{},{formTitle:function(){return-1===this.editedIndex?"Add new user":"Edit user"}}),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.$store.dispatch("_fetchusers")},methods:{editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1})),setTimeout((function(){e.$store.dispatch("_fetchusers")}),5e3)},save:function(){this.$refs.form.validate()&&(this.editedIndex>-1?this.$store.dispatch("_updateuser",{id:this.editedItem.id,payload:this.editedItem}):this.$store.dispatch("_registeruser",this.editedItem),this.close())}}},w=n(59),O=Object(w.a)(S,(function(){var e=this,t=e._self._c;return e.users?t(u.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,"items-per-page":15,"server-items-length":e.pages},on:{"click:row":e.handleRowClick,"update:items-per-page":function(t){return e.$emit("paginate",t)},"update:options":function(t){return e.$emit("paginate",t)}},scopedSlots:e._u([{key:"top",fn:function(){return[t(I.a,{attrs:{flat:""}},[t(g.a,{staticClass:"font-weight-bold"},[e._v("\n        Users\n      ")]),e._v(" "),t(f.a),e._v(" "),t(d.a,{attrs:{"max-width":"60%"},scopedSlots:e._u([{key:"activator",fn:function(n){var i=n.on,s=n.attrs;return[t(a.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),i),[t(m.a,{attrs:{left:""}},[e._v("\n              mdi-account-plus\n            ")]),e._v("\n            New User\n          ")],1)]}}],null,!1,597332941),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(r.a,[t(i.a,{attrs:{color:"primary",dark:"",flat:""}},[t("span",{staticClass:"text-h5 font-weight-bold"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(l.b,[t(h.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(c.a,[t(p.a,[t(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(v.a,{attrs:{rules:[e.rules.required],label:"First Name"},model:{value:e.editedItem.firstname,callback:function(t){e.$set(e.editedItem,"firstname",t)},expression:"editedItem.firstname"}})],1),e._v(" "),t(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(v.a,{attrs:{rules:[e.rules.required],label:"Last Name"},model:{value:e.editedItem.lastname,callback:function(t){e.$set(e.editedItem,"lastname",t)},expression:"editedItem.lastname"}})],1),e._v(" "),-1===e.editedIndex?t(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(v.a,{attrs:{rules:[e.rules.required],label:"Email"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1):e._e(),e._v(" "),t(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(v.a,{attrs:{rules:[e.rules.required],label:"Phone Number"},model:{value:e.editedItem.phone,callback:function(t){e.$set(e.editedItem,"phone",t)},expression:"editedItem.phone"}})],1),e._v(" "),t(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(v.a,{attrs:{rules:[e.rules.required],label:"Role"},model:{value:e.editedItem.role,callback:function(t){e.$set(e.editedItem,"role",t)},expression:"editedItem.role"}})],1),e._v(" "),-1===e.editedIndex?t(o.a,{attrs:{cols:"12",sm:"12",md:"4"}},[t(v.a,{attrs:{rules:[e.rules.required],label:"Password"},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}})],1):e._e(),e._v(" "),t(o.a,{attrs:{cols:"12",sm:"12",md:-1===e.editedIndex?"12":"8"}},[t(s.a,{attrs:{items:e.companies,"item-text":"name","item-value":"id",label:"Select Company",rules:[e.rules.required],name:"editedItem.companyId","persistent-hint":"","single-line":""},on:{focus:function(t){return e.$store.dispatch("_fetchcompanies")}},model:{value:e.editedItem.companyId,callback:function(t){e.$set(e.editedItem,"companyId",t)},expression:"editedItem.companyId"}})],1)],1)],1)],1)],1),e._v(" "),t(l.a,[t(f.a),e._v(" "),t(a.a,{attrs:{color:"primary darken-1",small:""},on:{click:e.close}},[e._v("\n              Cancel\n            ")]),e._v(" "),t(a.a,{attrs:{color:"warning darken-1",small:""},on:{click:e.save}},[e._v("\n              Save\n            ")])],1)],1)],1),e._v(" "),t("export-button",{attrs:{report:"users"}})],1)]},proxy:!0},{key:"item.status",fn:function(n){return[n.item.isActive?t(m.a,{attrs:{small:"",color:"green"}},[e._v("\n      mdi-check\n    ")]):t(m.a,{attrs:{small:"",color:"blue"}},[e._v("\n      mdi-close\n    ")])]}},{key:"item.name",fn:function(n){var i=n.item;return[t("span",[e._v(e._s(i.firstname)+" "+e._s(i.lastname))])]}},{key:"item.company",fn:function(n){var i=n.item;return[t("span",[e._v(e._s(i.company.name))])]}},{key:"item.actions",fn:function(n){var i=n.item;return[t(c.a,{staticClass:"ma-0 pa-0",on:{click:function(e){e.stopPropagation()}}},[t(m.a,{staticClass:"mr-2",attrs:{color:"info"},on:{click:function(t){return e.editItem(i)}}},[e._v("\n        mdi-account-edit\n      ")])],1)]}},{key:"item.updated",fn:function(n){var i=n.item;return[t("span",[e._v(e._s(e._f("simpledateformat")(i.updatedAt)))])]}}],null,!1,2182708801)}):t("skeleton-table-loader")}),[],!1,null,null,null);t.default=O.exports}}]);