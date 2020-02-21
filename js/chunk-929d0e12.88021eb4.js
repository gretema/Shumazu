(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-929d0e12"],{"21b0":function(t,e,s){"use strict";var a=s("bc89"),i=s.n(a);i.a},"307d":function(t,e,s){"use strict";var a=s("fffb"),i=s.n(a);i.a},"56a6":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(e,a){return s("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v(" "+t._s(e.message)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(a)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n={computed:{messages:function(){return this.$store.state.messages}},methods:{updateMessage:function(t,e){this.$store.dispatch("updateMessage",{message:t,status:e})},removeMessage:function(t){this.$store.dispatch("removeMessage",t)},removeMessageWithTiming:function(t){this.$store.dispatch("removeMessageWithTiming",t)}}},c=n,o=(s("21b0"),s("2877")),r=Object(o["a"])(c,a,i,!1,null,"09dbdcf0",null);e["a"]=r.exports},"62b3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Alert"),s("div",{staticClass:"container my-md-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},[t._m(0),s("div",{staticClass:"bg-light p-3"},t._l(t.cart.carts,(function(e){return s("div",{key:e.id,staticClass:"py-3 d-flex flex-column flex-md-row"},[s("div",{staticClass:"d-flex flex-md-grow-1 mr-md-3"},[s("div",{staticClass:"bg-cover my-4 mr-4 flex-grow-1 flex-md-grow-0 d-none d-md-block",style:[{backgroundImage:"url("+e.product.imageUrl+")"},{height:"110px"},{minWidth:"110px"}]}),s("div",{staticClass:"d-flex flex-column flex-md-row align-items-md-center\n                justify-content-center justify-content-md-between flex-grow-1"},[s("div",{staticClass:"mr-md-4"},[s("span",{staticClass:"h5 cartitem-font-size"},[t._v(" "+t._s(e.product.title)+" ")]),s("br"),s("span",{staticClass:"cartitem-font-size"},[t._v(" "+t._s(t._f("currency")(e.product.price))+" ")])]),s("div",{staticClass:"ml-md-auto",staticStyle:{width:"120px"}},[s("div",{staticClass:"input-group input-group-sm mb-3",staticStyle:{width:"100px"}},[s("div",{staticClass:"input-group-prepend"},[s("button",{staticClass:"btn btn-primary rounded-0",attrs:{type:"button",id:"reduceButton"},on:{click:function(s){return s.preventDefault(),t.changeQty(e.id,e.product.id,e.qty,!1)}}},[t._v("-")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"item.qty"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Example text with button addon","aria-describedby":"button-addon1"},domProps:{value:e.qty},on:{input:function(s){s.target.composing||t.$set(e,"qty",s.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"addButton"},on:{click:function(s){return s.preventDefault(),t.changeQty(e.id,e.product.id,e.qty,!0)}}},[t._v("+")])])])])]),s("div",{staticClass:"d-md-none ml-auto align-items-center justify-content-end"},[s("span",{staticClass:"h5 mr-md-3 mb-0 cartitem-font-size"},[t._v(" "+t._s(t._f("currency")(e.product.price*e.qty))+" ")]),s("a",{staticClass:"btn cartitem-font-size",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.openDelModal(e)}}},[s("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])])]),s("div",{staticClass:"d-none d-md-flex align-items-center justify-content-end\n              justify-content-md-start py-3 cart-border"},[s("span",{staticClass:"h5 mr-md-3 mb-0"},[t._v(t._s(t._f("currency")(e.product.price*e.qty)))]),s("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.openDelModal(e)}}},[s("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])])])})),0)]),s("div",{staticClass:"col-md-4 mb-6 mb-md-0"},[s("div",{staticClass:"text-light bg-accent p-3"},[s("h1",{staticClass:"h4 text-center py-3 bg-primary-lighter bg-md-primary"},[t._v("訂單摘要")]),s("hr",{staticClass:"border-white mt-0"}),s("div",{staticClass:"d-flex justify-content-between mb-2"},[s("span",[t._v("小計")]),s("span",[t._v(t._s(t._f("currency")(t.cart.total)))])]),t._m(1),s("div",{staticClass:"input-group mb-3 input-group-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addCoupon}},[t._v("套用")])])]),s("div",{staticClass:"d-flex justify-content-between"},[s("span",{staticClass:"h5"},[t._v("總計")]),s("span",{staticClass:"h5"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])])]),s("router-link",{staticClass:"btn btn-block btn-lg btn-primary rounded-0 text-white mx-md-0 py-3",attrs:{to:"cart/customerinfo"}},[t._v("下一步")])],1)])]),s("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-sm",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(2),s("div",{staticClass:"modal-body"},[t._v(" 是否自購物車刪除商品(刪除後將無法恢復)？ ")]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.removeCart}},[t._v("確認刪除")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-row py-4 mb-0 mx-0 bg-primary"},[s("div",{staticClass:"col-md-6"},[s("h2",{staticClass:"h4 pl-3 text-md-left text-center text-light"},[t._v("您的購物車")])]),s("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center\n            justify-content-md-end pr-md-3 px-3 px-md-0"},[s("div",{staticClass:"process-steps d-flex justify-content-between w-md-100 w-75"},[s("div",{staticClass:"process-circle active"}),s("div",{staticClass:"process-circle"}),s("div",{staticClass:"process-circle"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-between mb-3"},[s("span",[t._v("運費")]),s("span",[t._v("免運費")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header bg-danger"},[s("h5",{staticClass:"modal-title text-light"},[t._v("刪除商品")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(s("99af"),s("1157")),c=s.n(n),o=s("56a6"),r={components:{Alert:o["a"]},data:function(){return{coupon_code:"",tempProduct:{}}},methods:{getCart:function(){this.$store.dispatch("getCart")},openDelModal:function(t){this.tempProduct=t,c()("#delProductModal").modal("show")},removeCart:function(){this.$store.dispatch("removeCart",this.tempProduct.id),c()("#delProductModal").modal("hide")},addCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("gretema","/coupon"),s={code:t.coupon_code};t.$store.commit("LOADING",!0),t.$http.post(e,{data:s}).then((function(e){if(t.getCart(),t.$store.commit("LOADING",!1),!e.data.success){var s=e.data.message,a="danger";t.$store.dispatch("updateMessage",{message:s,status:a})}}))},changeQty:function(t,e,s,a){var i=this;i.$store.commit("LOADING",!0);var n,c="".concat("https://vue-course-api.hexschool.io","/api/").concat("gretema","/cart/").concat(t),o="".concat("https://vue-course-api.hexschool.io","/api/").concat("gretema","/cart");n=!0===a?s+1:1===s?1:s-1;var r={product_id:e,qty:n};i.$http.all([i.$http.delete(c),i.$http.post(o,{data:r})]).then(i.$http.spread((function(){i.$store.dispatch("getCart"),i.$store.commit("LOADING",!1)})))}},computed:{cart:function(){return this.$store.state.cart}},created:function(){this.getCart()}},d=r,l=(s("307d"),s("2877")),u=Object(l["a"])(d,a,i,!1,null,"d559b170",null);e["default"]=u.exports},bc89:function(t,e,s){},fffb:function(t,e,s){}}]);
//# sourceMappingURL=chunk-929d0e12.88021eb4.js.map