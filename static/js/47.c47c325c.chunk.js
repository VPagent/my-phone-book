"use strict";(self.webpackChunkmy_phone_book=self.webpackChunkmy_phone_book||[]).push([[47],{47:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(885),s=n(791),c=n(982),r={form:"addContactForm_form__sFp4o",form_text:"addContactForm_form_text__1+fAH",label:"addContactForm_label__Es5LV",input:"addContactForm_input__1dDB+",span:"addContactForm_span__oaxiX",btn:"addContactForm_btn__jo5oy"},l=n(126),o=n(329),i=n(373),u=n(795),m=function(e){return e?"".concat(e[0].toLocaleUpperCase()).concat(e.slice(1)):""},d=n(184),_=function(){var e=(0,i.j)("items"),t=(0,a.Z)(e,2),n=t[0],_=t[1],p=(0,s.useState)(""),x=(0,a.Z)(p,2),h=x[0],j=x[1],f=(0,s.useState)(""),b=(0,a.Z)(f,2),N=b[0],C=b[1],v=function(e){switch(e.target.name){case"name":return j(m(e.target.value));case"tel":return C(m(e.target.value));default:console.log("error in switch")}},g=function(){j(""),C("")};return(0,d.jsxs)("form",{action:"",className:r.form,onSubmit:function(e){e.preventDefault();var t={name:h,number:N};if(n.length>0&&n.some((function(e){return e.name===h})))return u.Am.warning("".concat(h," is already in contacts"));(0,o.n5)(t).then((function(e){return _((function(t){return[].concat((0,c.Z)(t),[e])}))})),u.Am.success("contact ".concat(h," has been added")),g()},children:[(0,d.jsx)("p",{className:r.form_text,children:"Please add contact"}),(0,d.jsxs)("label",{className:r.label,children:[(0,d.jsx)("input",{className:r.input,name:"name",type:"text",placeholder:"Name",onChange:v,value:h}),(0,d.jsx)("span",{className:r.span,children:(0,d.jsx)(l.HHm,{className:r.icon})})]}),(0,d.jsxs)("label",{className:r.label,children:[(0,d.jsx)("input",{className:r.input,name:"tel",type:"text",placeholder:"Tel",onChange:v,value:N}),(0,d.jsx)("span",{className:r.span,children:(0,d.jsx)(l.UL8,{className:r.icon})})]}),(0,d.jsx)("button",{className:r.btn,type:"submit",children:"add"})]})},p="contactCard_card__X+QgY",x="contactCard_card_text_wrapper__lwre9",h="contactCard_card_text__oKxZR",j="contactCard_card_controls__eIYY5",f="contactCard_card_btn__xxn6R",b="contactCard_span__LmK-Q",N="contactCard_card_btn_icon__aaRvb",C="contactCard_icon__XlYcG",v=n(856),g=n(853),y={overlay:"editForm_overlay__gNUJK",form:"editForm_form__M8-hU",labelWrapper:"editForm_labelWrapper__U5UZy",label:"editForm_label__98jfN",icon:"editForm_icon__4ynNJ",input:"editForm_input__ban6J",controlsWrapper:"editForm_controlsWrapper__Qm2ES",btn:"editForm_btn__gLumR",checkIcon:"editForm_checkIcon__UWrbH"},F=n(880),k=function(e){var t=e.id,n=e.onClose,c=(0,s.useState)(""),r=(0,a.Z)(c,2),m=r[0],_=r[1],p=(0,s.useState)(""),x=(0,a.Z)(p,2),h=x[0],j=x[1],f=(0,i.j)("items"),b=(0,a.Z)(f,2),N=b[0],C=b[1],g=function(e){switch(e.currentTarget.name){case"name":return _(e.target.value);case"tel":return j(e.target.value);default:return console.log("Error in switch")}};return N&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:y.overlay,onClick:function(){return n()}}),(0,d.jsxs)("form",{className:y.form,onSubmit:function(e){if(e.preventDefault(),!m&&!h)return u.Am.warning("Failed, all fields must be filled");var a={name:m,number:h};(0,o.o1)(t,a),(0,o.K2)().then((function(e){return C(e)})),u.Am.success("Contact has been updated"),n()},children:[(0,d.jsxs)("div",{className:y.labelWrapper,children:[(0,d.jsxs)("label",{className:y.label,children:[(0,d.jsx)("span",{className:y.span,children:(0,d.jsx)(v.sQk,{className:y.icon})}),(0,d.jsx)("input",{className:y.input,type:"text",name:"name",value:m,onChange:g})]}),(0,d.jsxs)("label",{className:y.label,children:[(0,d.jsx)("span",{className:y.span,children:(0,d.jsx)(l.SPk,{size:14,className:y.icon})}),(0,d.jsx)("input",{className:y.input,type:"text",name:"tel",value:h,onChange:g})]})]}),(0,d.jsxs)("div",{className:y.controlsWrapper,children:[(0,d.jsx)("button",{type:"button",className:y.btn,onClick:function(){return n()},children:(0,d.jsx)(F.Fk5,{size:18})}),(0,d.jsx)("button",{type:"submit",className:y.btn,children:(0,d.jsx)(l.rfB,{size:18,className:y.checkIcon})})]})]})]})},Z=function(e){var t=e.item,n=t.id,c=t.name,r=t.number,m=(0,i.j)("items"),_=(0,a.Z)(m,2),y=_[0],F=_[1],Z=(0,s.useState)(!1),w=(0,a.Z)(Z,2),L=w[0],S=w[1],U=function(){S((function(e){return!e}))};return(0,d.jsxs)("li",{id:n,className:p,children:[(0,d.jsxs)("div",{className:x,children:[(0,d.jsxs)("p",{className:h,children:[(0,d.jsx)(l.HHm,{className:C}),c]}),(0,d.jsxs)("p",{className:h,children:[(0,d.jsx)(l.UL8,{className:C}),r]})]}),(0,d.jsxs)("div",{className:j,children:[L?(0,d.jsx)(k,{id:n,onClose:U}):(0,d.jsxs)("button",{className:f,type:"button",onClick:U,children:[(0,d.jsx)(g.IYd,{className:N}),(0,d.jsx)("span",{className:b,children:"edit"})]}),(0,d.jsx)("button",{className:f,type:"button",id:n,onClick:function(){y&&((0,o.GK)(n),F((function(e){return e.filter((function(e){return e.id!==n}))})),u.Am.success("contact has been deleted"))},children:(0,d.jsx)(v.F1H,{className:N,size:20})})]})]})},w="contactsList_box__pt67J",L="contactsList_title__nPcmn",S="contactsList_input__0sS8y",U="contactsList_list__aivKi",H=function(){var e=(0,i.j)("items"),t=(0,a.Z)(e,1)[0],n=(0,s.useState)(""),c=(0,a.Z)(n,2),r=c[0],l=c[1],o=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:w,children:[(0,d.jsx)("p",{className:L,children:"Filter"}),(0,d.jsx)("input",{type:"text",className:S,onChange:function(e){l(e.target.value)},value:r})]}),(0,d.jsx)("ul",{className:U,children:o.map((function(e){return(0,d.jsx)(Z,{item:e},e.id)}))})]})},K=n(626),W="contactsPage_title__SxdMT",A="contactsPage_text__lodMD",P=function(){var e=(0,i.j)("items"),t=(0,a.Z)(e,2),n=(t[0],t[1]);return(0,s.useEffect)((function(){(0,o.K2)().then((function(e){return n(e)}))}),[]),(0,d.jsx)("section",{children:(0,d.jsxs)(K.Z,{children:[(0,d.jsx)("h2",{className:W,children:"ContactsPage"}),(0,d.jsx)("p",{className:A,children:"On this page you can recreate your phone book, as well as edit contacts, if there is a change in the phone number or contact name"}),(0,d.jsx)(_,{}),(0,d.jsx)(H,{})]})})}}}]);
//# sourceMappingURL=47.c47c325c.chunk.js.map