(this["webpackJsonpproject-k30"]=this["webpackJsonpproject-k30"]||[]).push([[0],{125:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(1),i=t.n(n),s=t(23),l=t.n(s),r=(t(56),t(57),t(58),t(59),t(60),t(61),t(5)),d=t(9),o=t(6),j=t(2),m=t(13),b=t(24),u=t.n(b);function h(e){var c=e.product,t=u()(c.name,{lower:!0});return Object(a.jsxs)("div",{className:"product-item card text-center",children:[Object(a.jsx)(d.b,{to:"/p-".concat(t,".").concat(c._id),children:Object(a.jsx)("img",{src:"http://vietpro.online/assets/uploads/".concat(c.image)})}),Object(a.jsx)("h4",{children:Object(a.jsx)(d.b,{to:"/p-".concat(t,".").concat(c._id),children:c.name})}),Object(a.jsxs)("p",{children:["Gi\xe1 B\xe1n:",Object(a.jsx)("span",{children:new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(c.price)})]})]})}var O=t(25),x=t.n(O),v=function(){return Object(a.jsxs)("div",{className:"product-item card text-center",children:[Object(a.jsx)(x.a,{height:250,width:"90%"}),Object(a.jsx)(x.a,{style:{marginTop:15},height:10,width:"90%"}),Object(a.jsx)(x.a,{height:10,width:"90%"})]})};function p(e){var c=e.data,t=void 0===c?[]:c,n=e.loading,i=void 0===n||n,s=e.litmit,l=void 0===s?6:s;return Object(a.jsx)("div",{className:"product-list card-deck",children:i?Array(l).fill(1).map((function(e,c){return Object(a.jsx)(v,{},c)})):t.map((function(e){return Object(a.jsx)(h,{product:e},e._id)}))})}var g=t(15),f=t.n(g);f.a.defaults.baseURL="http://api.vietpro.online/v1";var N=function(e){return f.a.get("/products",e)},y=function(e,c){return f.a.get("/products/".concat(e,"/comments"),c)};function T(){var e=i.a.useState([]),c=Object(r.a)(e,2),t=c[0],n=c[1],s=i.a.useState([]),l=Object(r.a)(s,2),d=l[0],o=l[1],m=i.a.useReducer((function(e,c){return Object(j.a)(Object(j.a)({},e),c)}),{loadNewProd:!1,loadFeaturePrd:!1}),b=Object(r.a)(m,2),u=b[0],h=b[1];return i.a.useEffect((function(){h({loadNewProd:!0,loadFeaturePrd:!0}),N({params:{limit:6}}).then((function(e){var c,t;(null===(c=e.data)||void 0===c||null===(t=c.data)||void 0===t?void 0:t.docs)&&(n(e.data.data.docs),h({loadFeaturePrd:!1}))})),N({params:{limit:6,"filter[is_featured]":!0}}).then((function(e){var c,t;(null===(c=e.data)||void 0===c||null===(t=c.data)||void 0===t?void 0:t.docs)&&(o(e.data.data.docs),h({loadNewProd:!1}))}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"products",children:[Object(a.jsx)("h3",{children:"S\u1ea3n ph\u1ea9m n\u1ed5i b\u1eadt"}),Object(a.jsx)(p,{loading:u.loadNewProd,data:d})]}),Object(a.jsxs)("div",{className:"products",children:[Object(a.jsx)("h3",{children:"S\u1ea3n ph\u1ea9m m\u1edbi"}),Object(a.jsx)(p,{loading:u.loadNewProd,data:t})]})]})}function w(){return Object(a.jsx)("h1",{children:"NotFound"})}var S=t(16),C=t.n(S),_=t(46),D=function(e){var c=e.limit,t=void 0===c?10:c,n=e.totalDocument,i=void 0===n?0:n,s=Math.ceil(i/t),l=Object(o.h)(),r=l.pathname,m=C.a.parse(l.search),b=parseInt(m.page)||1;function u(e){return"".concat(r,"?").concat(C.a.stringify(Object(j.a)(Object(j.a)({},m),{},{page:e})))}return Object(a.jsxs)("ul",{className:"pagination",children:[b>1&&Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)(d.b,{className:"page-link",to:u(b-1),children:"Trang tr\u01b0\u1edbc"})}),function(){for(var e=[],c=b-2,t=b+2,n=1;n<=s;n++)(1===n||n===s||n>=c&&n<=t)&&(n===c&&n-e[e.length-1]>1&&e.push("..."),e.push(n),n===t&&s-n>1&&e.push("..."));return e.map((function(e,c){return Object(a.jsx)("li",{className:"page-item ".concat(b===e?"active":null," "),children:Object(a.jsx)(d.b,{className:"page-link",to:u(e),children:e})},c)}))}(),b<s&&Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)(d.b,{className:"page-link",to:u(b+1),children:"Trang sau"})})]})};function k(e){var c=e.match,t=e.history,n=e.location,s=i.a.useState(),l=Object(r.a)(s,2),d=l[0],o=l[1],m=i.a.useState([]),b=Object(r.a)(m,2),u=b[0],h=b[1],O=i.a.useReducer((function(e,c){return Object(j.a)(Object(j.a)({},e),c)}),{limit:12,totalDocument:0,loading:!1}),x=Object(r.a)(O,2),v=x[0],g=x[1],y=C.a.parse(n.search).page,T=(null===c||void 0===c?void 0:c.params).id,w=function(){g({loading:!0}),N({params:{"filter[category_id]":T,limit:v.limit,page:y}}).then((function(e){var c,t,a,n;(null===e||void 0===e||null===(c=e.data)||void 0===c||null===(t=c.data)||void 0===t?void 0:t.docs)&&h(e.data.data.docs),(null===e||void 0===e||null===(a=e.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.pages)&&g({loading:!1,totalDocument:e.data.data.pages.total})}))};return i.a.useEffect((function(){(function(e,c){return f.a.get("/categories/".concat(e),c)})(T).then((function(e){var c;(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.data)&&o(e.data.data)})).catch((function(e){return t.push("/404")})),w()}),[T]),i.a.useEffect((function(){w()}),[y]),Object(a.jsxs)("div",{children:[Object(a.jsx)(_.a,{children:Object(a.jsx)("title",{children:null===d||void 0===d?void 0:d.name})}),Object(a.jsxs)("div",{className:"products",children:[Object(a.jsxs)("h3",{children:[null===d||void 0===d?void 0:d.name," (hi\u1ec7n c\xf3 ",v.totalDocument," s\u1ea3n ph\u1ea9m)"]}),Object(a.jsx)(p,{limit:v.limit,loading:v.loading,data:u})]}),Object(a.jsx)("div",{id:"pagination",children:Object(a.jsx)("ul",{className:"pagination",children:Object(a.jsx)(D,Object(j.a)({},v))})})]})}var A=t(18);function E(e){var c=e.history,t=Object(m.b)(),n=i.a.useReducer((function(e,c){return Object(j.a)(Object(j.a)({},c),e)}),{}),s=Object(r.a)(n,2),l=s[0],d=s[1],o=Object(m.c)((function(e){return e.cart.items})),b=o.reduce((function(e,c){return e+c.qty*c.price}),0),u=function(e){var c=e.target,t=c.value,a=c.name;d(Object(A.a)({},a,t))};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"my-cart",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"cart-nav-item col-lg-7 col-md-7 col-sm-12",children:"Th\xf4ng tin s\u1ea3n ph\u1ea9m"}),Object(a.jsx)("div",{className:"cart-nav-item col-lg-2 col-md-2 col-sm-12",children:"T\xf9y ch\u1ecdn"}),Object(a.jsx)("div",{className:"cart-nav-item col-lg-3 col-md-3 col-sm-12",children:"Gi\xe1"})]}),Object(a.jsxs)("form",{method:"post",children:[o.map((function(e){return Object(a.jsxs)("div",{className:"cart-item row",children:[Object(a.jsxs)("div",{className:"cart-thumb col-lg-7 col-md-7 col-sm-12",children:[Object(a.jsx)("img",{src:"http://vietpro.online/assets/uploads/".concat(e.img)}),Object(a.jsx)("h4",{children:e.name})]}),Object(a.jsx)("div",{className:"cart-quantity col-lg-2 col-md-2 col-sm-12",children:Object(a.jsx)("input",{type:"number",id:"quantity",className:"form-control form-blue quantity",value:e.qty,onChange:function(c){return function(e,c){var a=parseInt(e.target.value);isNaN(a)&&(a=1),t({type:"UPDATE_CART_ITEM",payload:{id:c,qty:a}})}(c,e.id)},min:1})}),Object(a.jsxs)("div",{className:"cart-price col-lg-3 col-md-3 col-sm-12",children:[Object(a.jsx)("b",{children:new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e.price)}),Object(a.jsx)("a",{href:"#",onClick:function(c){return function(e,c){e.preventDefault(),confirm("Ban muon xoa san pham nay")&&t({type:"DELETE_CART_ITEM",payload:c})}(c,e.id)},children:"X\xf3a"})]})]},e.id)})),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"cart-thumb col-lg-7 col-md-7 col-sm-12"}),Object(a.jsx)("div",{className:"cart-total col-lg-2 col-md-2 col-sm-12",children:Object(a.jsx)("b",{children:"T\u1ed5ng c\u1ed9ng:"})}),Object(a.jsx)("div",{className:"cart-price col-lg-3 col-md-3 col-sm-12",children:Object(a.jsx)("b",{children:new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(b)})})]})]})]}),o.length&&Object(a.jsx)("div",{id:"customer",children:Object(a.jsxs)("form",{method:"post",onSubmit:function(e){var a,n;e.preventDefault(),(a=Object(j.a)(Object(j.a)({},l),{},{items:o.map((function(e){return{prd_id:e.id,qty:e.qty}}))}),f.a.post("/order",a,n)).then((function(e){t({type:"RESET_CART"}),c.push("/order-success")}))},children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{id:"customer-name",className:"col-lg-4 col-md-4 col-sm-12",children:Object(a.jsx)("input",{placeholder:"H\u1ecd v\xe0 t\xean (b\u1eaft bu\u1ed9c)",type:"text",name:"name",onChange:u,className:"form-control",required:!0})}),Object(a.jsx)("div",{id:"customer-phone",className:"col-lg-4 col-md-4 col-sm-12",children:Object(a.jsx)("input",{placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i (b\u1eaft bu\u1ed9c)",type:"text",name:"phone",onChange:u,className:"form-control",required:!0})}),Object(a.jsx)("div",{id:"customer-mail",className:"col-lg-4 col-md-4 col-sm-12",children:Object(a.jsx)("input",{placeholder:"Email (b\u1eaft bu\u1ed9c)",type:"text",name:"email",onChange:u,className:"form-control",required:!0})}),Object(a.jsx)("div",{id:"customer-add",className:"col-lg-12 col-md-12 col-sm-12",children:Object(a.jsx)("input",{placeholder:"\u0110\u1ecba ch\u1ec9 nh\xe0 ri\xeang ho\u1eb7c c\u01a1 quan (b\u1eaft bu\u1ed9c)",type:"text",name:"address",onChange:u,className:"form-control",required:!0})})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"by-now col-lg-6 col-md-6 col-sm-12",children:Object(a.jsxs)("button",{className:"btn btn-primary",children:[Object(a.jsx)("b",{children:"Mua ngay"}),Object(a.jsx)("span",{children:"Giao h\xe0ng t\u1eadn n\u01a1i si\xeau t\u1ed1c"})]})})})]})})||null]})}function q(e){var c,t,n=i.a.useState(null),s=Object(r.a)(n,2),l=s[0],d=s[1],o=i.a.useState([]),b=Object(r.a)(o,2),u=b[0],h=b[1],O=i.a.useState({content:"",email:"",name:""}),x=Object(r.a)(O,2),v=x[0],p=x[1],g=i.a.useState(1),N=Object(r.a)(g,2),T=N[0],w=N[1],S=Object(m.b)(),C=null===e||void 0===e||null===(c=e.match)||void 0===c||null===(t=c.params)||void 0===t?void 0:t.id;function _(e){var c=e.target,t=c.value,a=c.name;p(Object(j.a)(Object(j.a)({},v),{},Object(A.a)({},a,t)))}return i.a.useEffect((function(){(function(e,c){return f.a.get("/products/".concat(e),c)})(C).then((function(e){e.data.data&&d(e.data.data)})),y(C,{params:{sort:"-_id"}}).then((function(e){var c,t;(null===e||void 0===e||null===(c=e.data)||void 0===c||null===(t=c.data)||void 0===t?void 0:t.docs)&&h(e.data.data.docs)}))}),[C]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"product",children:[Object(a.jsxs)("div",{id:"product-head",className:"row",children:[Object(a.jsx)("div",{id:"product-img",className:"col-lg-6 col-md-6 col-sm-12",children:Object(a.jsx)("img",{src:"http://vietpro.online/assets/uploads/".concat(null===l||void 0===l?void 0:l.image)})}),Object(a.jsxs)("div",{id:"product-details",className:"col-lg-6 col-md-6 col-sm-12",children:[Object(a.jsx)("h1",{children:null===l||void 0===l?void 0:l.name}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"B\u1ea3o h\xe0nh:"})," 12 Th\xe1ng"]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"\u0110i k\xe8m:"})," ",null===l||void 0===l?void 0:l.accessories]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"T\xecnh tr\u1ea1ng:"})," ",null===l||void 0===l?void 0:l.status]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{children:"Khuy\u1ebfn M\u1ea1i:"})," ",null===l||void 0===l?void 0:l.promotion]}),Object(a.jsx)("li",{id:"price",children:"Gi\xe1 B\xe1n (ch\u01b0a bao g\u1ed3m VAT)"}),Object(a.jsx)("li",{id:"price-number",children:new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(null===l||void 0===l?void 0:l.price)}),Object(a.jsx)("li",{children:(null===l||void 0===l?void 0:l.is_stock)?Object(a.jsx)("span",{className:"badge badge-success",children:"C\xf2n h\xe0ng"}):Object(a.jsx)("span",{className:"badge badge-danger",children:"H\u1ebft h\xe0ng"})})]}),(null===l||void 0===l?void 0:l.is_stock)?Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S({type:"ADD_TO_CART",payload:{id:l._id,qty:T,name:l.name,price:l.price,img:l.image}}),w(1)},className:"form-inline row",children:[Object(a.jsx)("div",{className:"form-group mx-sm-3 mb-2",children:Object(a.jsx)("input",{type:"number",min:1,value:T,className:"form-control",onChange:function(e){var c=e.target.value;w(parseInt(c))}})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:"Add to cart"})]}):null]})]}),Object(a.jsx)("div",{id:"product-body",className:"row",children:Object(a.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:[Object(a.jsx)("h3",{children:"\u0110\xe1nh gi\xe1 v\u1ec1 iPhone X 64GB"}),Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:null===l||void 0===l?void 0:l.details}})]})}),Object(a.jsx)("div",{id:"comment",className:"row",children:Object(a.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:[Object(a.jsx)("h3",{children:"B\xecnh lu\u1eadn s\u1ea3n ph\u1ea9m"}),Object(a.jsxs)("form",{method:"post",onSubmit:function(e){e.preventDefault(),function(e,c,t){return f.a.post("/products/".concat(e,"/comments"),c,t)}(C,v).then((function(e){p(Object(j.a)(Object(j.a)({},v),{},{content:""})),y(C,{params:{sort:"-_id"}}).then((function(e){var c,t;(null===e||void 0===e||null===(c=e.data)||void 0===c||null===(t=c.data)||void 0===t?void 0:t.docs)&&h(e.data.data.docs)}))}))},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"T\xean:"}),Object(a.jsx)("input",{onChange:_,name:"name",value:null===v||void 0===v?void 0:v.name,required:!0,type:"text",className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{onChange:_,name:"email",value:null===v||void 0===v?void 0:v.email,required:!0,type:"email",className:"form-control",id:"pwd"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"N\u1ed9i dung:"}),Object(a.jsx)("textarea",{onChange:_,name:"content",value:null===v||void 0===v?void 0:v.content,required:!0,rows:8,className:"form-control",defaultValue:""})]}),Object(a.jsx)("button",{type:"submit",name:"sbm",className:"btn btn-primary",children:"G\u1eedi"})]})]})}),Object(a.jsx)("div",{id:"comments-list",className:"row",children:Object(a.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:u.map((function(e){return Object(a.jsx)("div",{className:"comment-item",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("b",{children:e.name})}),Object(a.jsx)("li",{children:e.createdAt}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:e.content})})]})})}))})})]}),Object(a.jsx)("div",{id:"pagination",children:Object(a.jsxs)("ul",{className:"pagination",children:[Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)("a",{className:"page-link",href:"#",children:"Trang tr\u01b0\u1edbc"})}),Object(a.jsx)("li",{className:"page-item active",children:Object(a.jsx)("a",{className:"page-link",href:"#",children:"1"})}),Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)("a",{className:"page-link",href:"#",children:"2"})}),Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)("a",{className:"page-link",href:"#",children:"3"})}),Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)("a",{className:"page-link",href:"#",children:"Trang sau"})})]})})]})}function V(){return Object(a.jsx)("h1",{children:"OrderSuccess"})}function R(e){var c=i.a.useState([]),t=Object(r.a)(c,2),n=t[0],s=t[1],l=i.a.useState({limit:12,totalDocument:0}),d=Object(r.a)(l,2),o=d[0],m=d[1],b=C.a.parse(e.location.search),u=b.key,h=b.page;return i.a.useEffect((function(){N({params:{name:u,page:h,limit:o.limit}}).then((function(e){var c,t,a,n;(null===e||void 0===e||null===(c=e.data)||void 0===c||null===(t=c.data)||void 0===t?void 0:t.docs)&&s(e.data.data.docs),(null===e||void 0===e||null===(a=e.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.pages)&&m(Object(j.a)(Object(j.a)({},o),{},{totalDocument:e.data.data.pages.total}))}))}),[u,h]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"products",children:[u?Object(a.jsxs)("div",{id:"search-result",children:["K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm v\u1edbi t\u1eeb kh\xf3a ",Object(a.jsx)("span",{children:u})]}):null,Object(a.jsx)(p,{data:n})]}),Object(a.jsx)("div",{id:"pagination",children:Object(a.jsx)(D,Object(j.a)({},o))})]})}function I(){var e=Object(o.g)(),c=Object(m.c)((function(e){return e.cart})).items,t=i.a.useState(null),n=Object(r.a)(t,2),s=n[0],l=n[1];return Object(a.jsxs)("div",{id:"header",children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{id:"logo",className:"col-lg-3 col-md-3 col-sm-12",children:Object(a.jsx)("h1",{children:Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)("img",{className:"img-fluid",src:"images/logo.png"})})})}),Object(a.jsx)("div",{id:"search",className:"col-lg-6 col-md-6 col-sm-12",children:Object(a.jsxs)("form",{onSubmit:function(c){c.preventDefault(),e.push("/search?key=".concat(s))},className:"form-inline",children:[Object(a.jsx)("input",{className:"form-control mt-3",type:"search",placeholder:"T\xecm ki\u1ebfm","aria-label":"Search",onChange:function(e){var c=e.target.value;l(c)},name:"key"}),Object(a.jsx)("button",{className:"btn btn-danger mt-3",type:"submit",children:"T\xecm ki\u1ebfm"})]})}),Object(a.jsxs)("div",{id:"cart",className:"col-lg-3 col-md-3 col-sm-12",children:[Object(a.jsx)(d.b,{className:"mt-4 mr-2",to:"/cart",children:"gi\u1ecf h\xe0ng"}),Object(a.jsx)("span",{className:"mt-3",children:c.reduce((function(e,c){return e+c.qty}),0)})]})]})}),Object(a.jsx)("button",{className:"navbar-toggler navbar-light",type:"button","data-toggle":"collapse","data-target":"#menu",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})})]})}function P(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"footer-top",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{id:"logo-2",className:"col-lg-3 col-md-6 col-sm-12",children:[Object(a.jsx)("h2",{children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("img",{src:"images/logo-footer.png"})})}),Object(a.jsx)("p",{children:"Vietpro Academy th\xe0nh l\u1eadp n\u0103m 2009. Ch\xfang t\xf4i \u0111\xe0o t\u1ea1o chuy\xean s\xe2u trong 2 l\u0129nh v\u1ef1c l\xe0 L\u1eadp tr\xecnh Website & Mobile nh\u1eb1m cung c\u1ea5p cho th\u1ecb tr\u01b0\u1eddng CNTT Vi\u1ec7t Nam nh\u1eefng l\u1eadp tr\xecnh vi\xean th\u1ef1c s\u1ef1 ch\u1ea5t l\u01b0\u1ee3ng, c\xf3 kh\u1ea3 n\u0103ng l\xe0m vi\u1ec7c \u0111\u1ed9c l\u1eadp, c\u0169ng nh\u01b0 Team Work \u1edf m\u1ecdi m\xf4i tr\u01b0\u1eddng \u0111\xf2i h\u1ecfi s\u1ef1 chuy\xean nghi\u1ec7p cao."})]}),Object(a.jsxs)("div",{id:"address",className:"col-lg-3 col-md-6 col-sm-12",children:[Object(a.jsx)("h3",{children:"\u0110\u1ecba ch\u1ec9"}),Object(a.jsx)("p",{children:"B8A V\xf5 V\u0103n D\u0169ng - Ho\xe0ng C\u1ea7u \u0110\u1ed1ng \u0110a - H\xe0 N\u1ed9i"}),Object(a.jsx)("p",{children:"S\u1ed1 25 Ng\xf5 178/71 - T\xe2y S\u01a1n \u0110\u1ed1ng \u0110a - H\xe0 N\u1ed9i"})]}),Object(a.jsxs)("div",{id:"service",className:"col-lg-3 col-md-6 col-sm-12",children:[Object(a.jsx)("h3",{children:"D\u1ecbch v\u1ee5"}),Object(a.jsx)("p",{children:"B\u1ea3o h\xe0nh r\u01a1i v\u1ee1, ng\u1ea5m n\u01b0\u1edbc Care Diamond"}),Object(a.jsx)("p",{children:"B\u1ea3o h\xe0nh Care X60 r\u01a1i v\u1ee1 ng\u1ea5m n\u01b0\u1edbc v\u1eabn \u0110\u1ed5i m\u1edbi"})]}),Object(a.jsxs)("div",{id:"hotline",className:"col-lg-3 col-md-6 col-sm-12",children:[Object(a.jsx)("h3",{children:"Hotline"}),Object(a.jsx)("p",{children:"Phone Sale: (+84) 0988 550 553"}),Object(a.jsx)("p",{children:"Email: vietpro.edu.vn@gmail.com"})]})]})})}),Object(a.jsx)("div",{id:"footer-bottom",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:Object(a.jsx)("p",{children:"2018 \xa9 Vietpro Academy. All rights reserved. Developed by Vietpro Software."})})})})})]})}function F(e){var c=e.data,t=void 0===c?[]:c;return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:Object(a.jsx)("nav",{children:Object(a.jsx)("div",{id:"menu",className:"collapse navbar-collapse",children:Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)("li",{className:"menu-item",children:Object(a.jsx)(d.b,{to:"/cat-".concat(u()(e.name),".").concat(e._id),children:e.name})},e._id)}))})})})})})}var B=t(49),M=t.n(B),L=(t(121),t(122),{dots:!0,lazyLoad:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:2});function H(){return Object(a.jsxs)(M.a,Object(j.a)(Object(j.a)({},L),{},{children:[Object(a.jsx)("div",{className:"carousel-item active",children:Object(a.jsx)("img",{src:"images/slide-1.png",alt:"Vietpro Academy"})}),Object(a.jsx)("div",{className:"carousel-item",children:Object(a.jsx)("img",{src:"images/slide-2.png",alt:"Vietpro Academy"})}),Object(a.jsx)("div",{className:"carousel-item",children:Object(a.jsx)("img",{src:"images/slide-3.png",alt:"Vietpro Academy"})}),Object(a.jsx)("div",{className:"carousel-item",children:Object(a.jsx)("img",{src:"images/slide-4.png",alt:"Vietpro Academy"})}),Object(a.jsx)("div",{className:"carousel-item",children:Object(a.jsx)("img",{src:"images/slide-5.png",alt:"Vietpro Academy"})}),Object(a.jsx)("div",{className:"carousel-item",children:Object(a.jsx)("img",{src:"images/slide-6.png",alt:"Vietpro Academy"})})]}))}function G(){return Object(a.jsx)("div",{id:"sidebar",className:"col-lg-4 col-md-12 col-sm-12",children:Object(a.jsxs)("div",{id:"banner",children:[Object(a.jsx)("div",{className:"banner-item",children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("img",{className:"img-fluid",src:"images/banner-1.png"})})}),Object(a.jsx)("div",{className:"banner-item",children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("img",{className:"img-fluid",src:"images/banner-2.png"})})}),Object(a.jsx)("div",{className:"banner-item",children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("img",{className:"img-fluid",src:"images/banner-3.png"})})}),Object(a.jsx)("div",{className:"banner-item",children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("img",{className:"img-fluid",src:"images/banner-4.png"})})}),Object(a.jsx)("div",{className:"banner-item",children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("img",{className:"img-fluid",src:"images/banner-5.png"})})}),Object(a.jsx)("div",{className:"banner-item",children:Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("img",{className:"img-fluid",src:"images/banner-6.png"})})})]})})}function U(){var e=i.a.useState([]),c=Object(r.a)(e,2),t=c[0],n=c[1];return i.a.useEffect((function(){var e;f.a.get("/categories",e).then((function(e){var c,t;(null===e||void 0===e||null===(c=e.data)||void 0===c||null===(t=c.data)||void 0===t?void 0:t.docs)&&n(e.data.data.docs)}))}),[]),Object(a.jsxs)(d.a,{children:[Object(a.jsx)(I,{}),Object(a.jsx)("div",{id:"body",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(F,{data:t}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{id:"main",className:"col-lg-8 col-md-12 col-sm-12",children:[Object(a.jsx)(H,{}),Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{path:"/",exact:!0,component:T}),Object(a.jsx)(o.b,{path:"/404",exact:!0,component:w}),Object(a.jsx)(o.b,{path:"/cat-:slug.:id",exact:!0,component:k}),Object(a.jsx)(o.b,{path:"/p-:slug.:id",exact:!0,component:q}),Object(a.jsx)(o.b,{path:"/cart",exact:!0,component:E}),Object(a.jsx)(o.b,{path:"/order-success",exact:!0,component:V}),Object(a.jsx)(o.b,{path:"/search",exact:!0,component:R}),Object(a.jsx)(o.b,{render:function(){return Object(a.jsx)(o.a,{to:"/404"})}})]})]}),Object(a.jsx)(G,{})]})]})}),Object(a.jsx)(P,{})]})}var X=t(14),J=t(31),K=t(50),W=t.n(K),z={name:"ABC"},Q={items:[]},Y=Object(X.b)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,c=arguments.length>1?arguments[1]:void 0;switch(console.log("\ud83d\ude80 ~ file: store.js ~ line 12 ~ cartReducer ~ action",c),c.type){case"ADD_TO_CART":var t=c.payload,a=e.items,n=!1;return a.map((function(e){return e.id===t.id&&(n=!0,e.qty+=t.qty),e})),n||a.push(t),Object(j.a)(Object(j.a)({},e),{},{items:a});case"DELETE_CART_ITEM":var i=e.items.filter((function(e){return e.id!==c.payload}));return Object(j.a)(Object(j.a)({},e),{},{items:i});case"UPDATE_CART_ITEM":var s=c.payload,l=s.id,r=s.qty,d=e.items.map((function(e){return e.id===l&&(e.qty=r),e}));return Object(j.a)(Object(j.a)({},e),{},{items:d});case"RESET_CART":return Object(j.a)(Object(j.a)({},e),{},{items:[]});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,c=arguments.length>1?arguments[1]:void 0;return c.type,e}}),Z={key:"root",storage:W.a,whitelist:["cart"]},$=Object(J.a)(Z,Y),ee=Object(X.c)($);Object(J.b)(ee);var ce=ee;var te=function(){return Object(a.jsx)(m.a,{store:ce,children:Object(a.jsx)(U,{})})},ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,126)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,i=c.getLCP,s=c.getTTFB;t(e),a(e),n(e),i(e),s(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(te,{})}),document.getElementById("root")),ae()},56:function(e,c,t){},57:function(e,c,t){},58:function(e,c,t){},59:function(e,c,t){},60:function(e,c,t){},61:function(e,c,t){}},[[125,1,2]]]);