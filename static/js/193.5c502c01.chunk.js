"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[193],{5193:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r,i,o=n(9439),a=n(2791),l=n(1951),s=n(6753),d=n(9040),f=n(9434),c=n(4830),u=n(7117),x=n(2839),h=n(466),y=n(2891),g=n(7281),p=n(2339),j=n(7970),k=n(1576),F=n(168),b=n(4709),v=b.Z.div(r||(r=(0,F.Z)(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 150px;\n  background-color: #ffffff;\n"]))),m=b.Z.div(i||(i=(0,F.Z)(["\n  width: 640px;\n  height: 424px;\n  border: 0.8px solid #e3f3ff;\n  border-radius: 29px;\n"]))),D=n(3329),M=function(t){var e=t.date,n=(0,f.v9)(k.Uq),r=(0,l.default)(e,"yyyy-MM-dd"),i=n.filter((function(t){return t.date===r})).map((function(t){return t.category})),o=i.filter((function(t){return t.includes("to-do")})).length,a=i.filter((function(t){return t.includes("in-progress")})).length,s=i.filter((function(t){return t.includes("done")})).length,d=o+a+s,c=(o/d*100).toFixed(0),F=(a/d*100).toFixed(0),b=(s/d*100).toFixed(0),M={categoryTask:n.map((function(t){return t.category}))},C=M.categoryTask.filter((function(t){return t.includes("to-do")})),S=M.categoryTask.filter((function(t){return t.includes("in-progress")})),B=M.categoryTask.filter((function(t){return t.includes("done")})),w=C.length+S.length+B.length,T=[{name:"To Do","By Day":c,"By Month":(C.length/w*100).toFixed(0)},{name:"In Progress","By Day":F,"By Month":(S.length/w*100).toFixed(0)},{name:"Done","By Day":b,"By Month":(B.length/w*100).toFixed(0)}];return(0,D.jsx)(v,{children:(0,D.jsx)(m,{children:(0,D.jsxs)(u.v,{width:640,height:424,data:T,margin:{top:77,right:32,left:32,bottom:60},children:[(0,D.jsx)(x.q,{vertical:!1,stroke:"#E3F3FF"}),(0,D.jsx)(h.K,{dataKey:"name",axisLine:!1,tickLine:!1,fontSize:14,fontFamily:"Inter",tickMargin:20}),(0,D.jsx)(y.B,{domain:[0,100],tickCount:6,axisLine:!1,tickLine:!1,label:{value:"Tasks",position:"top",dx:-14,dy:-24,fontFamily:"Inter",fontSize:14,fontWeight:600,fill:"#343434"},tickMargin:32,fontFamily:"Inter",fontSize:14}),(0,D.jsx)(g.D,{wrapperStyle:{position:"absolute",top:-50},layout:"horizontal",verticalAlign:"top",align:"end",iconSize:8,iconType:"circle",markerWidth:5,fontSize:16}),(0,D.jsx)("defs",{children:(0,D.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"1",x2:"0",y2:"0.2",children:[(0,D.jsx)("stop",{offset:"30%",stopColor:"#FFD2DD",stopOpacity:1}),(0,D.jsx)("stop",{offset:"95%",stopColor:"#FFFFFF",stopOpacity:.8})]})}),(0,D.jsx)("defs",{children:(0,D.jsxs)("linearGradient",{id:"colorXv",x1:"0",y1:"1",x2:"0",y2:"0.2",children:[(0,D.jsx)("stop",{offset:"30%",stopColor:"#3E85F3",stopOpacity:1}),(0,D.jsx)("stop",{offset:"95%",stopColor:"#FFFFFF",stopOpacity:.8})]})}),(0,D.jsx)(p.$,{dataKey:"By Day",fill:"url(#colorUv)",barSize:27,radius:10,children:(0,D.jsx)(j.e,{dataKey:"By Day",position:"insideTop",fill:"#343434",style:{fontWeight:500}})}),(0,D.jsx)(p.$,{dataKey:"By Month",fill:"url(#colorXv)",barSize:27,radius:10,children:(0,D.jsx)(j.e,{dataKey:"By Month",position:"insideTop",fill:"#343434",style:{fontWeight:500}})})]})})})},C=n(8678),S=n(6932),B=n(5370),w=n(9513),T=n.n(w),Z=(n(9414),n(4390)),z=function(t){var e=t.date,n=t.setDate,r=(0,a.useState)(!1),i=(0,o.Z)(r,2),s=i[0],d=i[1],f=function(){return d(!s)};return(0,D.jsxs)(Z.Bb,{children:[(0,D.jsx)(Z.iY,{type:"button",onClick:f,children:(0,l.default)(e,"d MMM y")}),s&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(T(),{selected:e,onChange:function(t){n(t),f()},allowSameDay:!0,inline:!0,calendarStartDay:1,dateFormat:"dd MMMM yyyy",formatWeekDay:function(t){return t.substring(0,1)}}),(0,D.jsx)(Z.cs,{})]})]})},K=n(1495),P=n(9077),I=n(5942),L=function(t){var e=t.date,n=t.onClickPrev,r=t.onClickNext,i=t.setDate,o=(0,f.v9)(K.Pu);return(0,D.jsxs)(I.im,{children:[(0,D.jsx)(z,{date:e,setDate:i}),(0,D.jsxs)(I.Zg,{children:[(0,D.jsx)(I.Tr,{onClick:function(){return n()},bgcolor:"dark"===o?"#21222c":"#ffffff",bordercolor:"dark"===o?"rgba(255, 255, 255, 0.15)":"rgba(220, 227, 229, 0.80)",color:"dark"===o?"#ffffff":"#343434",hovercolor:"dark"===o?"rgba(255, 255, 255, 0.15)":"rgba(220, 227, 229, 1)",children:(0,D.jsx)(P._,{width:"18px",height:"18px"})}),(0,D.jsx)(I.Hc,{onClick:function(){return r()},bgcolor:"dark"===o?"#21222C":"#ffffff",bordercolor:"dark"===o?"rgba(255, 255, 255, 0.15)":"rgba(220, 227, 229, 0.80)",color:"dark"===o?"#ffffff":"#343434",hovercolor:"dark"===o?"rgba(255, 255, 255, 0.15)":"rgba(220, 227, 229, 1)",children:(0,D.jsx)(P.s,{width:"18px",height:"18px"})})]})]})},W=n(7430),_=function(){var t=(0,f.I0)(),e=(0,a.useState)(new Date),n=(0,o.Z)(e,2),r=n[0],i=n[1],u=(0,a.useRef)(null);(0,a.useEffect)((function(){var e=(0,l.default)(r,"MM");u.current!==e&&(u.current=e,t((0,W.Ak)((0,l.default)(r,"yyyy-MM-dd").slice(0,7))))}),[t,r]);var x=function(){i((0,s.default)(r,1))},h=function(){i((0,d.default)(r,1))},y=(0,f.v9)(K.Pu);return(0,D.jsx)(c.Z,{children:(0,D.jsxs)(B.Lb,{bgcolor:"dark"===y?"#171820":"#f7f6f9",children:[(0,D.jsx)(C.g,{children:(0,D.jsx)(S.Z,{pageName:"Statistics"})}),(0,D.jsx)(L,{date:r,onClickPrev:x,onClickNext:h,setDate:i}),(0,D.jsx)(M,{date:r,children:(0,D.jsx)(L,{date:r,onClickPrev:x,onClickNext:h,setDate:i})})]})})}}}]);
//# sourceMappingURL=193.5c502c01.chunk.js.map