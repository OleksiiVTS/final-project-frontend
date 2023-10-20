"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[687],{687:function(n,e,i){i.r(e),i.d(e,{default:function(){return V}});i(2791);var a,t,r,d,l,o,p,h,s,x,m,u,c=i(9841),f=i(4289),g=i(9434),y=i(5243),b=i(1413),v=i(2426),w=i.n(v),j=i(8820),Z=i(6864),k=i(8007),P=k.Ry().shape({firstName:k.Z_().max(16,"Must be 16 characters or less").required("Username is required"),phone:k.Z_().matches("\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}","Wrong number"),birthday:k.Z_(),skype:k.Z_().max(16,"Must be 16 characters or less"),email:k.Z_().email("Invalid email address").required("Email is required")}),z=i(5147),B=i(168),C=i(7691),N=C.ZP.form(a||(a=(0,B.Z)(["\n  width: 100vh;\n  height: 100vh;\n\n  padding: 95px 20px 40px 20px;\n  background-color: #f7f6f9;\n  @media screen and (min-width: 768px) {\n    padding: 64px 32px 38px 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    padding: 33px 32px 32px 32px;\n  }\n"]))),_=C.ZP.div(t||(t=(0,B.Z)(["\n  width: 335px;\n  position: relative;\n  outline: 1px solid red;\n  display: flex;\n  padding: 59px 18px 40px 18px;\n  flex-direction: column;\n  border-radius: 16px;\n  background: #fff;\n\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    width: 704px;\n    padding: 40px 175px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 1087px;\n    padding: 60px 165px;\n  }\n"]))),F=C.ZP.div(r||(r=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 1440px) {\n    height: 270px;\n    flex-wrap: wrap;\n  }\n"]))),I=C.ZP.img(d||(d=(0,B.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 72px;\n  height: 72px;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  border: 2px solid #3e85f3;\n\n  @media screen and (min-width: 768px) {\n    position: relative;\n    left: 0;\n    transform: translate(0, 0);\n    width: 124px;\n    height: 124px;\n  }\n"]))),U=C.ZP.input(l||(l=(0,B.Z)(["\n  opacity: 0;\n  outline: 1px solid green;\n  width: 30px;\n  height: 20px;\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  z-index: 3;\n  @media screen and (min-width: 768px) {\n    top: 100px;\n  }\n"]))),S=C.ZP.div(o||(o=(0,B.Z)(["\n  position: absolute;\n  top: 25px;\n  left: 52%;\n  z-index: 2;\n  cursor: pointer;\n  @media screen and (min-width: 768px) {\n    top: 150px;\n    left: 51%;\n  }\n  @media screen and (min-width: 1440px) {\n    top: 168px;\n    left: 51%;\n  }\n"]))),A=C.ZP.div(p||(p=(0,B.Z)(["\n  position: absolute;\n  top: 29.5px;\n  left: 53.2%;\n  width: 6px;\n  height: 6px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n  @media screen and (min-width: 768px) {\n    top: 156.5px;\n    left: 52%;\n    width: 10px;\n    height: 10px;\n  }\n  @media screen and (min-width: 1440px) {\n    top: 175px;\n    left: 51.7%;\n  }\n"]))),q=C.ZP.h1(h||(h=(0,B.Z)(["\n  color: #343434;\n\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1; /* 100% */\n\n  margin: 0;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 14px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 20px;\n  }\n"]))),E=C.ZP.h2(s||(s=(0,B.Z)(["\n  color: #343434;\n\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.29; /* 128.571% */\n\n  margin-top: 8px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 44px;\n  }\n"]))),M=C.ZP.label(x||(x=(0,B.Z)(["\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.17; /* 116.667% */\n\n  margin-bottom: 8px;\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.29; /* 128.571% */\n  }\n"]))),Y=C.ZP.input(m||(m=(0,B.Z)(["\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.29; /* 128.571% */\n\n  margin-bottom: 18px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  border: 1px solid rgba(17, 17, 17, 0.1);\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 24px;\n    padding: 14px 18px;\n    font-size: 16px;\n    line-height: 1.12; /* 112.5% */\n  }\n  @media screen and (min-width: 1440px) {\n    width: 354px;\n    &:nth-child(6) {\n      margin-bottom: 0;\n    }\n    &:nth-child(-n + 3) {\n      margin-right: 50px;\n    }\n  }\n"]))),D=C.ZP.button(u||(u=(0,B.Z)(["\n  width: 195px;\n  height: 46px;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 16px;\n  background: #3e85f3;\n  border: none;\n  color: #fff;\n\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.29; /* 128.571% */\n  &:hover {\n    background-color: #2b78ef;\n  }\n  &:focus {\n    background-color: #2b78ef;\n  }\n  @media screen and (min-width: 768px) {\n    width: 262px;\n    height: 48px;\n    margin-top: 18px;\n  }\n  @media screen and (min-width: 768px) {\n    margin-top: 88px;\n  }\n"]))),R=i(3329),L=function(){var n,e,i,a,t,r,d,l=(0,g.I0)(),o=(0,g.v9)(f.dy),p=(0,Z.TA)({initialValues:{usrName:null!==(n=o.username)&&void 0!==n?n:"",phone:null!==(e=o.phone)&&void 0!==e?e:"",birthday:null!==(i=o.birthday)&&void 0!==i?i:"",skype:null!==(a=o.skype)&&void 0!==a?a:"",email:null!==(t=o.email)&&void 0!==t?t:"",avatar:null!==(r=o.avatar)&&void 0!==r?r:""},onSubmit:function(n){var e,i=document.getElementById("avatar");e=(0,b.Z)((0,b.Z)({},n),{},{avatarURL:i}),l((0,z.Vx)(e))}}),h=new Date,s=w()(h).format("YYYY-MM-DD");return(0,R.jsx)(Z.J9,{validationSchema:P,children:(0,R.jsx)(N,{onSubmit:p.handleSubmit,children:(0,R.jsxs)(_,{children:[(0,R.jsxs)("div",{children:[(0,R.jsxs)("label",{htmlFor:"avatar",children:[(0,R.jsx)(I,{src:o.avatarURL,alt:"User avatar"}),(0,R.jsx)(S,{children:(0,R.jsx)(j.OzW,{size:24,fill:"#3E85F3"})}),(0,R.jsx)(A,{}),(0,R.jsx)(U,{type:"file",name:"avatar",accept:"image/*"})]}),(0,R.jsx)(q,{children:null!==(d=o.username)&&void 0!==d?d:"User Name"}),(0,R.jsx)(E,{children:"User"})]}),(0,R.jsxs)(F,{children:[(0,R.jsx)(M,{htmlFor:"usrName",children:"User Name"}),(0,R.jsx)(Y,{id:"usrName",name:"usrName",type:"text",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.usrName}),p.touched.usrName&&p.errors.usrName?(0,R.jsx)("div",{children:p.errors.usrName}):null,(0,R.jsx)(M,{htmlFor:"birthday",children:"Birthday"}),(0,R.jsx)(Y,{id:"birthday",name:"birthday",type:"birthday",placeholder:s,onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.birthday}),(0,R.jsx)(M,{htmlFor:"email",children:"Email"}),(0,R.jsx)(Y,{id:"email",name:"email",type:"email",placeholder:"Add your email",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.email}),p.touched.email&&p.errors.email?(0,R.jsx)("div",{children:p.errors.email}):null,(0,R.jsx)(M,{htmlFor:"phone",children:"Phone"}),(0,R.jsx)(Y,{id:"phone",name:"phone",type:"phone",placeholder:"Add a phone number",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.phone}),(0,R.jsx)(M,{htmlFor:"skype",children:"Skype"}),(0,R.jsx)(Y,{id:"skype",name:"skype",type:"skype",placeholder:"Add a skype number",onChange:p.handleChange,onBlur:p.handleBlur,value:p.values.skype})]}),(0,R.jsx)(D,{type:"submit",children:"Save changes"})]})})})},V=function(){var n=(0,g.v9)(f.wU);return(0,R.jsx)(c.Z,{children:n?(0,R.jsx)(y.p2,{height:"80",width:"80",color:"#4d78a9"}):(0,R.jsxs)("div",{children:[(0,R.jsx)("h1",{children:" AccountForm"}),(0,R.jsx)(L,{})]})})}}}]);
//# sourceMappingURL=687.6506aa4b.chunk.js.map