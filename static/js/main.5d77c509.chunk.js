(this.webpackJsonpresolute=this.webpackJsonpresolute||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(15),l=a.n(o),i=(a(27),a(5)),s=a(18);var c={admin:{color:"white",float:"right",border:"1px solid lightgrey",borderRadius:10,fontSize:16,padding:5,margin:15,cursor:"pointer",marginRight:30}},m=function(e){return console.log("nav",e),r.a.createElement("div",{className:"navbar"},"userLoggedIn"===e.logInCheck&&r.a.createElement("div",{style:c.admin,onClick:e.handleSignOut},"Sign Out"))},u=a(16),d=a(17),g=a(21),p=a(20);var h=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2);return a[0],a[1],r.a.createElement("div",{className:"login-signup-form"},r.a.createElement("form",{action:"#",onSubmit:e.handleUserLogIn},r.a.createElement("input",{type:"email",placeholder:"Enter email",className:"input-form",name:"email"}),r.a.createElement("input",{type:"password",placeholder:"Enter password",className:"input-form",name:"password"}),r.a.createElement("button",{className:"btn"},"Log In")))},f=a(8);var v=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2);return t[0],t[1],r.a.createElement("div",{className:"login-signup-form"},r.a.createElement("form",{action:"#",onSubmit:function(e){e.preventDefault();var t=e.target.name.value,a=e.target.gender.value,n=e.target.email.value,r=e.target.hometown.value,o=e.target.password.value,l=e.target.confirmPassword.value;if(0!==t.length&&0!==a.length&&0!==n.length&&0!==r.length&&0!==o.length&&0!==l.length)return o!==l?(console.log("incorect"),document.getElementsByTagName("form")[0].reset(),void alert(" Please check your password")):void f.firestore().collection("resoluteData").add({name:t,gender:a,email:n,hometown:r,password:o}).then((function(e){alert("Successfully sign up please log in")})).catch((function(e){console.log("error")}));alert("Please dont submit empty credential")}},r.a.createElement("input",{type:"text",placeholder:"Enter Full name",className:"input-form",name:"name"}),r.a.createElement("div",{style:{marginTop:-15,marginBottom:10}},r.a.createElement("h5",null,"Gender"),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement("input",{type:"radio",name:"gender",value:"male"}),"Male",r.a.createElement("input",{type:"radio",name:"gender",value:"female"}),"Female",r.a.createElement("input",{type:"radio",name:"gender",value:"other"}),"Other")),r.a.createElement("input",{type:"email",placeholder:"Enter email",className:"input-form",name:"email"}),r.a.createElement("input",{type:"text",placeholder:"Enter Hometown",className:"input-form",name:"hometown"}),r.a.createElement("input",{type:"password",placeholder:"Enter password",className:"input-form",name:"password"}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",className:"input-form",name:"confirmPassword"}),r.a.createElement("button",{className:"btn"},"Sign Up")))},E=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleLogIn=function(){document.getElementById("signup").style.backgroundColor="gainsboro",document.getElementById("login").style.backgroundColor="chocolate",e.setState({logInSignInStatus:!0})},e.handleSignUp=function(){document.getElementById("login").style.backgroundColor="gainsboro",document.getElementById("signup").style.backgroundColor="chocolate",e.setState({logInSignInStatus:!1})},e.state={logInSignInStatus:!0},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.logInSignInStatus;return r.a.createElement("div",{className:"login-signup-container"},r.a.createElement("div",{style:b.logInSignup},r.a.createElement("div",{style:b.buttonLogInSignUP,id:"login",onClick:this.handleLogIn},"Log In "),r.a.createElement("div",{style:b.buttonLogInSignUP,id:"signup",onClick:this.handleSignUp},"Sign Up")),e&&r.a.createElement(h,{handleUserLogIn:this.props.handleUserLogIn}),!e&&r.a.createElement(v,null))}}]),a}(r.a.Component),b={logInSignup:{display:"flex",height:50,width:"90%",borderRadius:10,justifyContent:"space-around",margin:"auto",marginTop:20},buttonLogInSignUP:{border:"1px solid gainsboro",borderRadius:10,padding:10,width:100,marginTop:10,paddingLeft:50,cursor:"pointer"}},y=E;var I=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2);return a[0],a[1],console.log("abt",e),r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"user-details"},"Name :    ",e.data.name),r.a.createElement("div",{className:"user-details"},"E-mail :  ",e.data.email),r.a.createElement("div",{className:"user-details"},"Gender :  ",e.data.gender),r.a.createElement("div",{className:"user-details"},"Hometown :    ",e.data.hometown))};var S={};function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return console.log("ac",t.data),{data:t.data};default:return e}}var N=function(){var e=Object(n.useState)("notLoogged"),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)("userLogInForm"),c=Object(i.a)(l,2),u=c[0],d=c[1],g=Object(s.a)(w),p=function(e){o(e)};return console.log("store",g.getState()),r.a.createElement("div",{className:"App"},r.a.createElement(m,{logInCheck:u,handleSignOut:function(){d("userLogInForm")}}),"userLogInForm"===u&&r.a.createElement(y,{handleUserLogIn:function(e){e.preventDefault();var t=e.target.email.value,a=e.target.password.value;0!==t.length&&0!==a.length?f.firestore().collection("resoluteData").where("email","==",t).get().then((function(e){e.docs.map((function(e){if(e.data().password===a){var t=e.data();t.userId=e.id,p(t),d("userLoggedIn")}else alert("please check your email or passweor")}))})).catch((function(e){console.log("Error getting documents: ",e)})):alert("Please dont submit empty credential")}}),"userLoggedIn"===u&&r.a.createElement(I,{data:a}))};a(38);f.initializeApp({apiKey:"AIzaSyAjh1eJTdpsepMu_PnVPirtgOxFpqxK9NY",authDomain:"resolute-e3a10.firebaseapp.com",databaseURL:"https://resolute-e3a10.firebaseio.com",projectId:"resolute-e3a10",storageBucket:"resolute-e3a10.appspot.com",messagingSenderId:"177972743991",appId:"1:177972743991:web:6a7ac57a950e34f6e354b2"}),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5d77c509.chunk.js.map