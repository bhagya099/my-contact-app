(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(5),i=n.n(a),d=(n(4),n(6)),l=n(7),r=n(2),s=n(9),h=n(8),u=n(0);function p(e){return Object(u.jsxs)("div",{className:"todo-item",children:[Object(u.jsx)("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),Object(u.jsx)("p",{style:e.item.completed?{fonStyle:"italic",color:"grey",textDecoration:"line-through"}:null,children:e.item.text})]})}var m=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Clean fish tank",completed:!1},{id:4,text:"Mow the lawn",completed:!1},{id:5,text:"Learn React",completed:!0},{id:6,text:"Take Rest",completed:!1}],j=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).state={todos:m},o.handleChange=o.handleChange.bind(Object(r.a)(o)),o}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){console.log(t);var n=t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));return console.log(n),{todos:n}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return Object(u.jsx)(p,{item:t,handleChange:e.handleChange},t.id)}));return Object(u.jsx)("div",{className:"tood-list",children:t})}}]),n}(c.a.Component);i.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))},4:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.bef5b29f.chunk.js.map