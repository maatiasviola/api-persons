(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(15),s=n.n(r),a=n(3),o=n(0),u=function(e){e.filter;var t=e.setFilter;return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"filter shown with"}),Object(o.jsx)("input",{onChange:function(e){t(e.target.value)}})]})},i=n(6),l=n(4),j=n.n(l),b="http://localhost:3001/api/persons",d=function(){return j.a.get(b).then((function(e){return e.data}))},f=function(e){return j.a.post(b,e).then((function(e){return e.data}))},m=function(e,t){window.confirm("Delete ".concat(t,"?"))?(j.a.delete("".concat(b,"/").concat(e)),alert("Delete succesfull")):console.log("delete paused")},h=function(e,t){return j.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},O=function(e){var t=e.persons,n=e.setPersons,c=e.newName,r=e.setNewName,s=e.newNumber,a=e.setNewNumber,u=e.setErrorMessage,l=e.setMessageType;return Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),void 0!==t.find((function(e){return e.name===c}))){if(window.confirm("".concat(c," is already added to phonebook, replace the old number with a new one?"))){var o=t.find((function(e){return e.name===c})),j=Object(i.a)(Object(i.a)({},o),{},{number:s});h(o.id,j).then((function(e){n(t.map((function(t){return t.name!==c?t:e}))),u("Updated ".concat(o.name)),l(!0),setTimeout((function(){u(null)}),5e3)})).catch((function(e){u("Person '".concat(o.name,"' was already removed from server")),l(!1),setTimeout((function(){u(null)}),5e3),n(t.filter((function(e){return e.name!==c})))}))}}else f({name:c,number:s}).then((function(e){n(t.concat(e)),u("Added ".concat(e.name)),l(!0),setTimeout((function(){u(null)}),5e3)}));r(""),a("")},children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{onChange:function(e){return r(e.target.value)},value:c}),"number: ",Object(o.jsx)("input",{onChange:function(e){return a(e.target.value)},value:s})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var t=e.persons,n=e.filter,c=""===n?t:t.filter((function(e){return e.name.toLowerCase().includes(n)}));return Object(o.jsx)("div",{children:c.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[e.name," ",e.number]}),Object(o.jsx)("button",{onClick:function(){return t=e.id,n=e.name,void m(t,n);var t,n},children:"delete"})]},e.name)}))})},v=(n(39),function(e){var t=e.message,n=e.messageType;if(null===t)return null;var c=n?"success":"error";return Object(o.jsx)("div",{className:c,children:t})}),x=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(a.a)(s,2),l=i[0],j=i[1],b=Object(c.useState)(""),f=Object(a.a)(b,2),m=f[0],h=f[1],x=Object(c.useState)(""),w=Object(a.a)(x,2),g=w[0],N=w[1],y=Object(c.useState)(null),k=Object(a.a)(y,2),S=k[0],T=k[1],C=Object(c.useState)(!0),E=Object(a.a)(C,2),M=E[0],P=E[1];return Object(c.useEffect)((function(){d().then((function(e){r(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(v,{message:S,messageType:M}),Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(u,{filter:g,setFilter:N}),Object(o.jsx)("h2",{children:"Add a new"}),Object(o.jsx)(O,{persons:n,setPersons:r,newName:l,setNewName:j,newNumber:m,setNewNumber:h,setErrorMessage:T,setMessageType:P}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(p,{persons:n,filter:g})]})};s.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.061617c5.chunk.js.map