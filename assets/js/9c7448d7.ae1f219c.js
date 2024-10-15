/*! For license information please see 9c7448d7.ae1f219c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[249165],{42419:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=r(785893),s=r(511151);const t={id:"plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",title:"gcpIapSignInResolvers",description:"API reference for gcpIapSignInResolvers"},o=void 0,c={id:"reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",title:"gcpIapSignInResolvers",description:"API reference for gcpIapSignInResolvers",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",permalink:"/docs/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",title:"gcpIapSignInResolvers",description:"API reference for gcpIapSignInResolvers"}},a={},d=[{value:"Variables",id:"variables",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend-module-gcp-iap-provider",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-auth-backend-module-gcp-iap-provider"})})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers",children:(0,i.jsx)(n.code,{children:"gcpIapSignInResolvers"})})]}),"\n",(0,i.jsx)(n.p,{children:"Available sign-in resolvers for the Google auth provider."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"namespace gcpIapSignInResolvers \n"})}),"\n",(0,i.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers.emailmatchinguserentityannotation",children:"emailMatchingUserEntityAnnotation"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Looks up the user by matching their email to the ",(0,i.jsx)(n.code,{children:"google.com/email"})," annotation."]}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend-module-gcp-iap-provider.gcpiapsigninresolvers.idmatchinguserentityannotation",children:"idMatchingUserEntityAnnotation"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Looks up the user by matching their user ID to the ",(0,i.jsx)(n.code,{children:"google.com/user-id"})," annotation."]}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},675251:(e,n,r)=>{var i=r(667294),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var i,t={},d=null,p=null;for(i in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)o.call(n,i)&&!a.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:s,type:e,key:d,ref:p,props:t,_owner:c.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var i=r(667294);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);