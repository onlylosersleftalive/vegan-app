(this["webpackJsonpvegan-app"]=this["webpackJsonpvegan-app"]||[]).push([[0],[,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(1),r=t.n(i),c=t(5),s=t.n(c),a=(t(10),t(2)),o=(t(11),t(12),t(0));var d=function(e){var n=Object(i.useState)(""),t=Object(a.a)(n,2),r=t[0],c=t[1];return Object(o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.onSaveFormData(r),c("")},children:[Object(o.jsx)("label",{children:"Add one or more ingredients:"}),Object(o.jsx)("input",{type:"text",onChange:function(e){e.preventDefault(),c(e.target.value)},value:r}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})},j=t(3);t(14);var u=function(){return Object(o.jsx)("p",{children:" Your ingredient(s) is(are) vegan! \ud83d\ude04"})};t(15);var g=function(){return Object(o.jsx)("p",{children:"Your ingredient(s) is(are) not vegan \ud83d\ude14 "})};var l=function(){var e=Object(i.useState)({checkedIngredient:!1}),n=Object(a.a)(e,2),t=n[0],r=n[1];return console.log(t),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)("h1",{className:"title",children:"Check if your food ingridients are vegan"}),Object(o.jsx)(d,{onSaveFormData:function(e){r((function(){var n=e.split(" ");return{checkedIngredient:n.length>1?j.isVeganIngredientList(n):j.isVeganIngredient(e),nonVeganIngredients:j.containsNonVeganIngredients(n)}}))}}),!0===t.checkedIngredient?Object(o.jsx)(u,{}):Object(o.jsx)(g,{}),!1===t.checkedIngredient&&void 0!==t.nonVeganIngredients&&Object(o.jsxs)("p",{children:["The non-vegan ingredient(s) from your list:",t.nonVeganIngredients.join(" ")]})]}),Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("p",{children:["Made by ",Object(o.jsx)("a",{href:"https://github.com/onlylosersleftalive",children:"Sveta M."})]})})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.2ce8e7d8.chunk.js.map