/*! For license information please see fb1b1b82.ae32d543.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[328082],{562895:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(785893),s=t(511151);const i={id:"plugin-kubernetes-react.kubernetesapi.getcluster",title:"KubernetesApi.getCluster()",description:"API reference for KubernetesApi.getCluster()"},c=void 0,a={id:"reference/plugin-kubernetes-react.kubernetesapi.getcluster",title:"KubernetesApi.getCluster()",description:"API reference for KubernetesApi.getCluster()",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-react.kubernetesapi.getcluster.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-react.kubernetesapi.getcluster",permalink:"/docs/reference/plugin-kubernetes-react.kubernetesapi.getcluster",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-kubernetes-react.kubernetesapi.getcluster.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-react.kubernetesapi.getcluster",title:"KubernetesApi.getCluster()",description:"API reference for KubernetesApi.getCluster()"}},o={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesapi",children:(0,n.jsx)(r.code,{children:"KubernetesApi"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesapi.getcluster",children:(0,n.jsx)(r.code,{children:"getCluster"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"getCluster(clusterName: string): Promise<{\n        name: string;\n        authProvider: string;\n        oidcTokenProvider?: string;\n        dashboardUrl?: string;\n    } | undefined>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"clusterName"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"string"}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:"Promise<{ name: string; authProvider: string; oidcTokenProvider?: string; dashboardUrl?: string; } | undefined>"})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,r,t)=>{var n=t(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,i={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,n)&&!o.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:a.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},785893:(e,r,t)=>{e.exports=t(675251)},511151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>c});var n=t(667294);const s={},i=n.createContext(s);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);