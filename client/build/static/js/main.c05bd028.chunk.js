(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{301:function(e,t,n){"use strict";n.r(t);var a,r,s,o,c,i,l=n(0),d=n(47),u=n.n(d),b=n(14),j=n(3),h=n(48),p=n(16),x=n.n(p),m=function(e){e?x.a.defaults.headers.common.Authorization=e:delete x.a.defaults.headers.common.Authorization},O="GET_ERRORS",f="USER_LOADING",g="SET_CURRENT_USER",v="SET_USER_NOTES",w=function(e){return{type:g,payload:e}},y=function(){return function(e){localStorage.removeItem("jwtToken"),m(!1),e(w({}))}},N=n(13),k=n(23),C=n(115),S=n(6),R=n(148),F={isAuthenticated:!1,user:{},loading:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(S.a)(Object(S.a)({},e),{},{isAuthenticated:!R(t.payload),user:t.payload});case f:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});default:return e}},E={},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload;default:return e}},A=[],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.payload;default:return e}},L=Object(k.c)({auth:B,errors:T,notes:U}),_=[C.a],D=Object(k.e)(L,{},Object(k.d)(k.a.apply(void 0,_),!1)),H=n(32),I=n(33),M=n(35),P=n(34),z=n(1),J=function(e){Object(M.a)(n,e);var t=Object(P.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(z.jsx)("div",{style:{height:"75vh"},className:"container valign-wrapper",children:Object(z.jsx)("div",{className:"row",children:Object(z.jsxs)("div",{className:"col s12 center-align",children:[Object(z.jsx)("h4",{children:"Please register or login to start taking markdown notes"}),Object(z.jsx)("div",{className:"col s6",children:Object(z.jsx)(b.b,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect waves-light hoverable blue accent-3",children:"Register"})}),Object(z.jsx)("div",{className:"col s6",children:Object(z.jsx)(b.b,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large btn-flat waves-effect white black-text",children:"Log In"})})]})})})}}]),n}(l.Component),V=n(31),W=n(24),G=n.n(W),Y=function(e){Object(M.a)(n,e);var t=Object(P.a)(n);function n(){var e;return Object(H.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState(Object(V.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(n,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(z.jsx)("div",{className:"container",children:Object(z.jsx)("div",{className:"row",children:Object(z.jsxs)("div",{className:"col s8 offset-s2",children:[Object(z.jsxs)(b.b,{to:"/",className:"btn-flat waves-effect",children:[Object(z.jsx)("i",{className:"material-icons left",children:"keyboard_backspace"})," Back to home"]}),Object(z.jsxs)("div",{className:"col s12",style:{paddingLeft:"11.250px"},children:[Object(z.jsxs)("h4",{children:[Object(z.jsx)("b",{children:"Register"})," below"]}),Object(z.jsxs)("p",{className:"grey-text text-darken-1",children:["Already have an account? ",Object(z.jsx)(b.b,{to:"/login",children:"Log in"})]})]}),Object(z.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(z.jsxs)("div",{className:"input-field col s12",children:[Object(z.jsx)("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:G()("",{invalid:e.name})}),Object(z.jsx)("label",{htmlFor:"name",children:"Name"}),Object(z.jsx)("span",{className:"red-text",children:e.name})]}),Object(z.jsxs)("div",{className:"input-field col s12",children:[Object(z.jsx)("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:G()("",{invalid:e.email})}),Object(z.jsx)("label",{htmlFor:"email",children:"Email"}),Object(z.jsx)("span",{className:"red-text",children:e.email})]}),Object(z.jsxs)("div",{className:"input-field col s12",children:[Object(z.jsx)("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:G()("",{invalid:e.password})}),Object(z.jsx)("label",{htmlFor:"password",children:"Password"}),Object(z.jsx)("span",{className:"red-text",children:e.password})]}),Object(z.jsxs)("div",{className:"input-field col s12",children:[Object(z.jsx)("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:G()("",{invalid:e.password2})}),Object(z.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(z.jsx)("span",{className:"red-text",children:e.password2})]}),Object(z.jsx)("div",{className:"col s12",style:{paddingLeft:"11.250px"},children:Object(z.jsx)("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3",children:"Sign up"})})]})]})})})}}]),n}(l.Component),q=Object(N.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(n){x.a.post("/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return n({type:O,payload:e.response.data})}))}}})(Object(j.g)(Y)),K=function(e){Object(M.a)(n,e);var t=Object(P.a)(n);function n(){var e;return Object(H.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState(Object(V.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n={email:e.state.email,password:e.state.password};e.props.loginUser(n)},e.state={email:"",password:"",errors:{}},e}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(z.jsx)("div",{className:"container",children:Object(z.jsx)("div",{style:{marginTop:"4rem"},className:"row",children:Object(z.jsxs)("div",{className:"col s8 offset-s2",children:[Object(z.jsxs)(b.b,{to:"/",className:"btn-flat waves-effect",children:[Object(z.jsx)("i",{className:"material-icons left",children:"keyboard_backspace"})," Back to home"]}),Object(z.jsxs)("div",{className:"col s12",style:{paddingLeft:"11.250px"},children:[Object(z.jsxs)("h4",{children:[Object(z.jsx)("b",{children:"Login"})," below"]}),Object(z.jsxs)("p",{className:"grey-text text-darken-1",children:["Don't have an account? ",Object(z.jsx)(b.b,{to:"/register",children:"Register"})]})]}),Object(z.jsxs)("form",{noValidate:!0,onSubmit:this.onSubmit,children:[Object(z.jsxs)("div",{className:"input-field col s12",children:[Object(z.jsx)("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:G()("",{invalid:e.email||e.emailnotfound})}),Object(z.jsx)("label",{htmlFor:"email",children:"Email"}),Object(z.jsxs)("span",{className:"red-text",children:[e.email,e.emailnotfound]})]}),Object(z.jsxs)("div",{className:"input-field col s12",children:[Object(z.jsx)("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:G()("",{invalid:e.password||e.passwordincorrect})}),Object(z.jsx)("label",{htmlFor:"password",children:"Password"}),Object(z.jsxs)("span",{className:"red-text",children:[e.password,e.passwordincorrect]})]}),Object(z.jsx)("div",{className:"col s12",style:{paddingLeft:"11.250px"},children:Object(z.jsx)("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3",children:"Login"})})]})]})})})}}]),n}(l.Component),Q=Object(N.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){x.a.post("/api/users/login",e).then((function(e){var n=e.data.token;localStorage.setItem("jwtToken",n),m(n);var a=Object(h.a)(n);t(w(a))})).catch((function(e){return t({type:O,payload:e.response.data})}))}}})(K),X=n(49),Z=Object(N.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth,a=Object(X.a)(e,["component","auth"]);return Object(z.jsx)(j.b,Object(S.a)(Object(S.a)({},a),{},{render:function(e){return!0===n.isAuthenticated?Object(z.jsx)(t,Object(S.a)({},e)):Object(z.jsx)(j.a,{to:"/login"})}}))})),$=n(39),ee=n(18),te="#FFFFFF",ne="#161617",ae={background:"#F8F8F9",noteHeaderBackground:ne,noteHeaderColor:te,noteBodyBackground:te,noteBodyColor:ne,noteBorderColor:ne,body:ne},re={background:ne,noteHeaderBackground:te,noteHeaderColor:ne,noteBodyBackground:ne,noteBodyColor:te,noteBorderColor:te,body:te},se=function(e){return"dark"===e?re:ae},oe={dark:!1,toggle:function(){}},ce=Object(l.createContext)(oe),ie=function(e){var t=e.children,n=Object(l.useState)({dark:!1,hasThemeLoaded:!1}),a=Object($.a)(n,2),r=a[0],s=a[1];if(Object(l.useEffect)((function(){var e="true"===localStorage.getItem("dark");s(Object(S.a)(Object(S.a)({},r),{},{dark:e,hasThemeLoaded:!0}))}),[]),!r.hasThemeLoaded)return Object(z.jsx)("div",{});var o=r.dark?se("dark"):se("light");return Object(z.jsx)(ee.a,{theme:o,children:Object(z.jsx)(ce.Provider,{value:{dark:r.dark,toggle:function(){var e=!r.dark;localStorage.setItem("dark",JSON.stringify(e)),s(Object(S.a)(Object(S.a)({},r),{},{dark:e}))}},children:t})})},le=n(119),de=n.n(le),ue=n(120),be=n.n(ue),je=n(26),he=Object(ee.b)(a||(a=Object(je.a)(["\n  html, body {\n    height: 100vh;\n  }\n  body {\n    background: ",";\n    color: ",";\n    width: 100vw;\n    margin: 10;\n    padding: 0;\n    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n  button {\n    background: ",";\n    color: ",";\n    border: 1px solid ",";\n    border-radius: 2px;\n    padding: 10px 25px;\n    font-size: 14px;\n    outline: none;\n    cursor: pointer;\n  }\n  pre {\n    background: #333;\n    white-space: pre;\n    word-wrap: break-word;\n    overflow: auto;\n    margin: 20px 25px;\n    border-radius: 4px;\n    border: 1px solid #292929;\n    position: relative;\n  }\n  pre code {\n    display: block;\n    padding: 15px;\n    overflow-x: auto;\n    font-size: 13px;\n    line-height: 19px;\n    color: #ffa726;\n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.body}),(function(e){return e.theme.background}),(function(e){return e.theme.body}),(function(e){return!e.theme.background})),pe=ee.c.span(r||(r=Object(je.a)(["\n  cursor: pointer;\n"]))),xe=ee.c.textarea(s||(s=Object(je.a)(["\n  resize: none;\n  outline: none;\n  overflow: auto;\n  height: 100px;\n  border: none;\n  background: ",";\n  color: ",";\n  font-size: 14px;\n  padding: 10px;\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.body})),me=ee.c.div(o||(o=Object(je.a)(["\n  display: flex;\n  border: 1px solid ",";\n  line-height: 20px;\n  flex-direction: column;\n  margin: 30px;\n  width: 90%;\n"])),(function(e){return e.theme.noteBorderColor})),Oe=ee.c.div(c||(c=Object(je.a)(["\n  display: flex;\n  background: ",";\n  color: ",";\n  font-size: 18px;\n  justify-content: space-between;\n  padding: 10px;\n"])),(function(e){return e.theme.noteHeaderBackground}),(function(e){return e.theme.noteHeaderColor})),fe=ee.c.div(i||(i=Object(je.a)(["\n  padding: 10px;\n"])));function ge(e){var t=e.text,n=Object(X.a)(e,["text"]);return Object(z.jsx)(xe,Object(S.a)({defaultValue:t},n))}function ve(e){var t=e.text;return Object(z.jsx)(fe,{children:t})}var we=function(e){var t=e.note,n=e.onDelete,a=e.handleEditNote,r=t.body,s=Object(l.useState)(),o=Object($.a)(s,2),c=o[0],i=o[1],d=Object(l.useState)(!1),u=Object($.a)(d,2),b=u[0],j=u[1],h=new Date(t.createdAt),p=h.getDate(),x=h.getMonth()+1,m=h.getFullYear(),O=h.getHours(),f=h.getMinutes(),g=h.getSeconds();p<10&&(p="0".concat(p)),x<10&&(x="0".concat(x)),g<10&&(g="0".concat(g)),O=O>12?O-12:O<10?"0"+O:O;var v="".concat(p,"-").concat(x,"-").concat(m," ").concat(O,":").concat(f,":").concat(g," ").concat(h.getHours()>12?"PM":"AM");return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(me,{children:[Object(z.jsxs)(Oe,{children:[Object(z.jsx)("span",{children:v}),Object(z.jsxs)("div",{children:[b?Object(z.jsx)(pe,{role:"img","aria-label":"preview",onClick:function(){return j(!b),void a(t._id,c)},children:"\ud83d\udc4c"}):Object(z.jsx)(pe,{role:"img","aria-label":"edit",onClick:function(){j(!b)},children:"\u270d\ufe0f"}),Object(z.jsx)(pe,{role:"img","aria-label":"delete",onClick:function(){return n()},children:"\ud83d\uddd1\ufe0f"})]})]}),b?Object(z.jsx)(ge,{text:c||r,onChange:function(e){return i(e.target.value)}}):Object(z.jsx)(ve,{text:de()().use(be.a).processSync(c||r).result})]})})},ye=Object(N.b)((function(e){return{notes:e.notes,errors:e.errors,auth:e.auth}}),{getUserNotes:function(e){return function(t){x.a.get("/api/notes",{params:{userId:e}}).then((function(e){var n=e.data;t({type:v,payload:n})})).catch((function(e){return t({type:O,payload:e.response.data})}))}},postNote:function(e){return function(t){return x.a.post("/api/notes",e).catch((function(e){return t({type:O,payload:e.response.data})}))}},deleteNote:function(e){return function(t){return x.a.delete("/api/notes/".concat(e)).catch((function(e){return t({type:O,payload:e.response.data})}))}},editNote:function(e,t){return function(n){return x.a.put("/api/notes/".concat(e),t).catch((function(e){return n({type:O,payload:e.response.data})}))}}})((function(e){var t=e.auth,n=e.notes,a=e.getUserNotes,r=(e.errors,e.postNote),s=e.deleteNote,o=e.editNote,c=Object(l.useContext)(ce),i=function(e,n){var r=t.user,s={user_id:r.id,body:n};o(e,s).then((function(e){a(r.id)}))};return Object(l.useEffect)((function(){if(t&&t.user){var e=t.user;a(e.id)}}),[t,a]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(he,{}),Object(z.jsx)("div",{children:Object(z.jsxs)("h1",{children:["React Markdown Note"," ",c.dark?Object(z.jsx)(pe,{role:"img","aria-label":"sun",onClick:c.toggle,children:"\ud83c\udf1e"}):Object(z.jsx)(pe,{role:"img","aria-label":"moon",onClick:c.toggle,children:"\ud83c\udf19"})]})}),Object(z.jsx)("button",{onClick:function(){return function(){var e=t.user,n={user_id:e.id,body:"# Hello World"};r(n).then((function(t){a(e.id)}))}()},type:"button",children:"Add New Note"}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),n.length&&n.map((function(e,n){return Object(z.jsx)(we,{note:e,onDelete:function(){return function(e){var n=t.user;s(e).then((function(e){a(n.id)}))}(e._id)},handleEditNote:i},e._id)}))]})})),Ne=Object(N.b)((function(e){return{auth:e.auth}}),{logoutUser:y})((function(e){var t=e.auth,n=e.logoutUser,a=t.user;return Object(z.jsx)("div",{className:"container",children:Object(z.jsxs)("div",{className:"col s12 center-align",children:[Object(z.jsxs)("h4",{children:[Object(z.jsx)("b",{children:"Hello "})," ",a.name.split(" ")[0],Object(z.jsx)("p",{className:"flow-text grey-text text-darken-1",children:"You are logged into Markdown Notes app \ud83d\udc4f"})]}),Object(z.jsx)(ye,{}),Object(z.jsx)("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:function(e){e.preventDefault(),n()},className:"btn btn-large waves-effect waves-light hoverable blue accent-3",children:"Logout"})]})})})),ke=function(){if(localStorage.jwtToken){var e=localStorage.jwtToken;m(e);var t=Object(h.a)(e);D.dispatch(w(t));var n=Date.now()/1e3;t.exp<n&&(D.dispatch(y()),window.location.href="./login")}return Object(z.jsx)(N.a,{store:D,children:Object(z.jsx)(b.a,{children:Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(j.b,{exact:!0,path:"/",component:J}),Object(z.jsx)(j.b,{exact:!0,path:"/register",component:q}),Object(z.jsx)(j.b,{exact:!0,path:"/login",component:Q}),Object(z.jsx)(j.d,{children:Object(z.jsx)(Z,{exact:!0,path:"/dashboard",component:Ne})})]})})})};u.a.render(Object(z.jsx)(ie,{children:Object(z.jsx)(ke,{})}),document.getElementById("root"))}},[[301,1,2]]]);
//# sourceMappingURL=main.c05bd028.chunk.js.map