/*! For license information please see 9d7c4a63.55405694.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[315787],{534200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(785893),a=n(511151);const o={id:"catalog-model.entityenvelopeschemavalidator",title:"entityEnvelopeSchemaValidator()",description:"API reference for entityEnvelopeSchemaValidator()"},s=void 0,c={id:"reference/catalog-model.entityenvelopeschemavalidator",title:"entityEnvelopeSchemaValidator()",description:"API reference for entityEnvelopeSchemaValidator()",source:"@site/versioned_docs/version-stable/reference/catalog-model.entityenvelopeschemavalidator.md",sourceDirName:"reference",slug:"/reference/catalog-model.entityenvelopeschemavalidator",permalink:"/docs/reference/catalog-model.entityenvelopeschemavalidator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/catalog-model.entityenvelopeschemavalidator.md",tags:[],version:"stable",frontMatter:{id:"catalog-model.entityenvelopeschemavalidator",title:"entityEnvelopeSchemaValidator()",description:"API reference for entityEnvelopeSchemaValidator()"}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model",children:(0,r.jsx)(t.code,{children:"@backstage/catalog-model"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entityenvelopeschemavalidator",children:(0,r.jsx)(t.code,{children:"entityEnvelopeSchemaValidator"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Creates a validation function that takes some arbitrary data, and either returns that data cast to an ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entityenvelope",children:"EntityEnvelope"})," (or the given subtype) if it matches that schema, or throws a  describing the errors."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function entityEnvelopeSchemaValidator<T extends EntityEnvelope = EntityEnvelope>(schema?: unknown): (data: unknown) => T;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"schema"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"unknown"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"(Optional)"})}),"\n"]})]})})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:"(data: unknown) => T"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Note that this validator is only meant for applying the base schema checks; it does not take custom policies or additional processor based validation into account."}),"\n",(0,r.jsxs)(t.p,{children:["By default, the plain ",(0,r.jsx)(t.code,{children:"EntityEnvelope"})," schema is used. If you pass in your own, it may contain ",(0,r.jsx)(t.code,{children:"$ref"})," references to the following, which are resolved automatically for you:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entityenvelope",children:"EntityEnvelope"})," - ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})," - ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.entitymeta",children:"EntityMeta"})," - ",(0,r.jsx)(t.code,{children:"common#<id>"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["See also ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model/src/schema",children:"https://github.com/backstage/backstage/tree/master/packages/catalog-model/src/schema"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(667294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);