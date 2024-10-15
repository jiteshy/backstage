/*! For license information please see 0f0de245.bbdce335.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[402498],{94545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(785893),s=n(511151);const i={id:"frontend-plugin-api.analyticscontext",title:"AnalyticsContext()",description:"API reference for AnalyticsContext()"},c=void 0,a={id:"reference/frontend-plugin-api.analyticscontext",title:"AnalyticsContext()",description:"API reference for AnalyticsContext()",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.analyticscontext.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.analyticscontext",permalink:"/docs/reference/frontend-plugin-api.analyticscontext",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/frontend-plugin-api.analyticscontext.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api.analyticscontext",title:"AnalyticsContext()",description:"API reference for AnalyticsContext()"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(t.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.analyticscontext",children:(0,r.jsx)(t.code,{children:"AnalyticsContext"})})]}),"\n",(0,r.jsx)(t.p,{children:"Provides components in the child react tree an Analytics Context, ensuring all analytics events captured within the context have relevant attributes."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"AnalyticsContext: (options: {\n    attributes: Partial<AnalyticsContextValue>;\n    children: ReactNode;\n}) => React.JSX.Element\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["{ attributes: Partial<",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.analyticscontextvalue",children:"AnalyticsContextValue"}),">; children: ReactNode; }"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:"React.JSX.Element"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Analytics contexts are additive, meaning the context ultimately emitted with an event is the combination of all contexts in the parent tree."})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var r=n(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!o.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(667294);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);