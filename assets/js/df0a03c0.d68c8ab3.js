/*! For license information please see df0a03c0.d68c8ab3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[418247],{752634:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(785893),o=r(511151);const i={id:"plugin-permission-node.createconditionfactory",title:"createConditionFactory()",description:"API reference for createConditionFactory()"},s=void 0,c={id:"reference/plugin-permission-node.createconditionfactory",title:"createConditionFactory()",description:"API reference for createConditionFactory()",source:"@site/versioned_docs/version-stable/reference/plugin-permission-node.createconditionfactory.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.createconditionfactory",permalink:"/docs/reference/plugin-permission-node.createconditionfactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-permission-node.createconditionfactory.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-node.createconditionfactory",title:"createConditionFactory()",description:"API reference for createConditionFactory()"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-permission-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.createconditionfactory",children:(0,t.jsx)(n.code,{children:"createConditionFactory"})})]}),"\n",(0,t.jsx)(n.p,{children:"Creates a condition factory function for a given authorization rule and parameter types."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"createConditionFactory: <TResourceType extends string, TParams extends PermissionRuleParams = PermissionRuleParams>(rule: PermissionRule<unknown, unknown, TResourceType, TParams>) => (params: TParams) => PermissionCondition<TResourceType, TParams>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"rule"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"<unknown, unknown, TResourceType, TParams>"]}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(n.p,{children:["(params: TParams) => ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"<TResourceType, TParams>"]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"For example, an isEntityOwner rule for catalog entities might take an array of entityRef strings. The rule itself defines _how_ to check a given resource, whereas a condition also includes _what_ to verify."}),"\n",(0,t.jsxs)(n.p,{children:["Plugin authors should generally use the ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-permission-node.createconditionexports",children:"createConditionExports()"})," in order to efficiently create multiple condition factories. This helper should generally only be used to construct condition factories for third-party rules that aren't part of the backend plugin with which they're intended to integrate."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var t=r(667294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,i={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!a.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var t=r(667294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);