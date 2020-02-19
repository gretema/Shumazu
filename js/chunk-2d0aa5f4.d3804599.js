(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa5f4"],{1175:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container mb-5"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("ValidationObserver",{staticClass:"form bg-light p-5",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),t.payOrder(a)}},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("div",{staticClass:"form-row my-4"},[e("div",{staticClass:"col-6"},[e("h2",{staticClass:"checkout-title"},[t._v("付款資訊")])]),e("div",{staticClass:"col-6 d-flex align-items-center"},[e("div",{staticClass:"process-steps d-flex justify-content-between w-100"},[e("div",{staticClass:"process-circle completed"},[e("i",{staticClass:"fas fa-check"})]),e("div",{staticClass:"process-circle completed"},[e("i",{staticClass:"fas fa-check"})]),e("div",{staticClass:"process-circle active"})])])]),e("div",{staticClass:"form-row mt-3"},[e("div",{staticClass:"col"},[e("ValidationProvider",{staticClass:"form-group",attrs:{name:"信用卡號",rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("label",{staticClass:"checkout-label",attrs:{for:"creditNumber"}},[t._v("信用卡號")]),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardNum,expression:"cardNum"}],staticClass:"form-control rounded-0",class:{"is-invalid":s},attrs:{type:"text",placeholder:"9012-3456-7890-1234",id:"creditNumber",name:"creditNumber"},domProps:{value:t.cardNum},on:{input:function(a){a.target.composing||(t.cardNum=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text",staticStyle:{"font-size":"20px",padding:"0px 16px"}},[e("i",{staticClass:"far fa-credit-card"})])])]),e("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}],null,!0)})],1)]),e("label",{staticClass:"checkout-label mt-2",attrs:{for:"cardLastName"}},[t._v("持卡人姓名")]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"col"},[e("ValidationProvider",{staticClass:"form-group",attrs:{name:"姓氏",rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardLastName,expression:"cardLastName"}],staticClass:"form-control rounded-0",class:{"is-invalid":s},attrs:{type:"text",placeholder:"陳",id:"cardLastName",name:"cardLastName"},domProps:{value:t.cardLastName},on:{input:function(a){a.target.composing||(t.cardLastName=a.target.value)}}}),e("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"col"},[e("ValidationProvider",{staticClass:"form-group",attrs:{name:"名字",rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardFirstName,expression:"cardFirstName"}],staticClass:"form-control rounded-0",class:{"is-invalid":s},attrs:{type:"text",placeholder:"金發",id:"cardFirstName",name:"cardFirstName"},domProps:{value:t.cardFirstName},on:{input:function(a){a.target.composing||(t.cardFirstName=a.target.value)}}}),e("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}],null,!0)})],1)]),e("label",{staticClass:"checkout-label",attrs:{for:"expYear"}},[t._v("有效期限")]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-6"},[e("ValidationProvider",{staticClass:"form-group",attrs:{name:"月份",rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardExpMon,expression:"cardExpMon"}],staticClass:"form-control rounded-0",class:{"is-invalid":s},attrs:{type:"text",id:"cardExpMon",placeholder:"01"},domProps:{value:t.cardExpMon},on:{input:function(a){a.target.composing||(t.cardExpMon=a.target.value)}}}),e("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"col-6"},[e("ValidationProvider",{staticClass:"form-group",attrs:{name:"年份",rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardExpYear,expression:"cardExpYear"}],staticClass:"form-control rounded-0",class:{"is-invalid":s},attrs:{type:"text",id:"cardExpYear",placeholder:"22"},domProps:{value:t.cardExpYear},on:{input:function(a){a.target.composing||(t.cardExpYear=a.target.value)}}}),e("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}],null,!0)})],1),e("div",{staticClass:"col-6"},[e("ValidationProvider",{staticClass:"form-group",attrs:{name:"安全碼",rules:"required",tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.failed,r=a.errors;return[e("label",{staticClass:"checkout-label",attrs:{for:"cardSafeCode"}},[t._v("安全碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cardSafeCode,expression:"cardSafeCode"}],staticClass:"form-control rounded-0",class:{"is-invalid":s},attrs:{type:"text",id:"cardSafeCode",placeholder:"123"},domProps:{value:t.cardSafeCode},on:{input:function(a){a.target.composing||(t.cardSafeCode=a.target.value)}}}),e("div",{staticClass:"text-danger"},[t._v(" "+t._s(r[0])+" ")])]}}],null,!0)})],1)]),e("div",{staticClass:"form-row mt-5"},[e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-block btn-primary btn-lg rounded-0 text-white py-3",attrs:{id:"submit-link",disabled:s}},[t._v(" 確定付款 ")])])])]}}])})],1)])])])},r=[],i=(e("99af"),{data:function(){return{orderId:"",cardNum:"",cardLastName:"",cardFirstName:"",cardExpMon:"",cardExpYear:"",cardSafeCode:""}},methods:{getCart:function(){this.$store.dispatch("getCart")},payOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("gretema","/pay/").concat(t.orderId);this.$store.commit("LOADING",!0),this.$http.post(a).then((function(a){a.data.success&&t.$router.push("/cart/paysuccess/".concat(t.orderId)),t.$store.commit("LOADING",!1)}))}},created:function(){this.orderId=this.$route.params.orderId,this.getCart()}}),o=i,c=e("2877"),d=Object(c["a"])(o,s,r,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0aa5f4.d3804599.js.map