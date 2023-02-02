"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[724],{5920:function(n,e,t){t.d(e,{e:function(){return w}});var i,r,c,a,o,d=t(168),s=t(1087),p=t(6444),x=p.ZP.ul(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    row-gap: 24px;\n    column-gap: 8px;\n\n    margin: 0;\n  }\n\n  @media screen and (min-width: 1280px) {\n    justify-content: center;\n  }\n"]))),l=p.ZP.li(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 16px) / 3);\n  }\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - 32px) / 5);\n  }\n"]))),u=(0,p.ZP)(s.OL)(c||(c=(0,d.Z)(["\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover:not(.active),\n  &:focus-visible:not(.active) {\n    color: #ec9706;\n    transform: scale(1.1);\n  }\n"]))),h=p.ZP.img(a||(a=(0,d.Z)(["\n  height: 365px;\n  object-fit: cover;\n\n  @media screen and (max-width: 767px) {\n    width: 280px;\n    height: 390px;\n  }\n"]))),f=p.ZP.div(o||(o=(0,d.Z)(["\n  padding: 12px 4px;\n"]))),m=t(5230),b=t(184),w=function(n){var e=n.items,t=n.type;return(0,b.jsx)(x,{children:e.map((function(n){var e=n.id,i=n.poster_path,r=n.title,c=n.name;return(0,b.jsx)(l,{children:(0,b.jsxs)(u,{to:"/".concat(t,"/").concat(e),children:[(0,b.jsx)(h,{src:i?"https://image.tmdb.org/t/p/w500".concat(i):m,alt:r||c}),(0,b.jsx)(f,{children:(0,b.jsx)("p",{children:r||c})})]})},e)}))})}},5724:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var i,r,c,a,o=t(3433),d=t(9439),s=t(2791),p=t(7425),x=t(5920),l=t(168),u=t(6444),h=u.ZP.section(i||(i=(0,l.Z)(["\n  padding: 36px 0;\n"]))),f=u.ZP.div(r||(r=(0,l.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 480px) {\n    width: 480px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 768px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n  }\n"]))),m=u.ZP.div(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 36px;\n"]))),b=u.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n\n  @media screen and (min-width: 1280px) {\n    gap: 36px;\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n\n    width: 134px;\n    height: 44px;\n\n    font-size: 16px;\n\n    color: #fefefe;\n    background-color: transparent;\n\n    border: 2px solid #fefefe;\n    border-radius: 4px;\n    cursor: pointer;\n    outline: none;\n\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      border-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n      color: #212121;\n      background-color: #fce205;\n      border-color: #fce205;\n      box-shadow: 0px 8px 12px -4px rgba(236, 151, 6, 0.32);\n    }\n\n    @media screen and (min-width: 768px) {\n      width: 180px;\n      height: 50px;\n    }\n\n    @media screen and (min-width: 1280px) {\n      width: 210px;\n\n      font-size: 20px;\n    }\n  }\n"]))),w=t(184),g=function(n){var e=n.type,t=(0,s.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem("watchList")))&&void 0!==n?n:[]})),i=(0,d.Z)(t,1)[0],r=(0,s.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem("watched")))&&void 0!==n?n:[]})),c=(0,d.Z)(r,1)[0],a=[].concat((0,o.Z)(i),(0,o.Z)(c)).map((function(n){return n.id})).filter((function(n,e,t){return t.indexOf(n)===e})).map((function(n){return[].concat((0,o.Z)(i),(0,o.Z)(c)).find((function(e){return e.id===n}))})),l=(0,s.useState)(a),u=(0,d.Z)(l,2),g=u[0],Z=u[1],j=function(n){switch(n){case"watchList":Z((0,o.Z)(i));break;case"watched":Z((0,o.Z)(c));break;default:return}};return(0,w.jsx)(h,{children:(0,w.jsx)(f,{children:(0,w.jsxs)(m,{children:[(0,w.jsxs)(b,{children:[(0,w.jsxs)("button",{type:"button",onClick:function(){return j("watchList")},children:[(0,w.jsx)(p.s0d,{size:24}),(0,w.jsx)("span",{children:"Queue"})]}),(0,w.jsxs)("button",{type:"button",onClick:function(){return j("watched")},children:[(0,w.jsx)(p.MGh,{size:24}),(0,w.jsx)("span",{children:"Watched"})]})]}),(0,w.jsx)(x.e,{items:g,type:e})]})})})}},5230:function(n,e,t){n.exports=t.p+"static/media/placeholder.3496ad2beeb2c8bafdd6.jpg"}}]);
//# sourceMappingURL=724.ba97b037.chunk.js.map