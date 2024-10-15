/*! For license information please see 8c027020.2a02f9a1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[801608],{234050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var n=r(785893),i=r(511151);const c={id:"integration.getbitbucketfilefetchurl",title:"getBitbucketFileFetchUrl()",description:"API reference for getBitbucketFileFetchUrl()"},s=void 0,o={id:"reference/integration.getbitbucketfilefetchurl",title:"getBitbucketFileFetchUrl()",description:"API reference for getBitbucketFileFetchUrl()",source:"@site/versioned_docs/version-stable/reference/integration.getbitbucketfilefetchurl.md",sourceDirName:"reference",slug:"/reference/integration.getbitbucketfilefetchurl",permalink:"/docs/reference/integration.getbitbucketfilefetchurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/integration.getbitbucketfilefetchurl.md",tags:[],version:"stable",frontMatter:{id:"integration.getbitbucketfilefetchurl",title:"getBitbucketFileFetchUrl()",description:"API reference for getBitbucketFileFetchUrl()"}},l={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration.getbitbucketfilefetchurl",children:(0,n.jsx)(t.code,{children:"getBitbucketFileFetchUrl"})})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsx)(t.p,{children:"no longer in use, bitbucket integration replaced by integrations bitbucketCloud and bitbucketServer."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Given a URL pointing to a file on a provider, returns a URL that is suitable for fetching the contents of the data."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function getBitbucketFileFetchUrl(url: string, config: BitbucketIntegrationConfig): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"url"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"string"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"A URL pointing to a file"}),"\n"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"config"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration.bitbucketintegrationconfig",children:"BitbucketIntegrationConfig"})}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"The relevant provider config"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,n.jsx)(t.p,{children:"string"}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Converts from: ",(0,n.jsx)(t.a,{href:"https://bitbucket.org/orgname/reponame/src/master/file.yaml",children:"https://bitbucket.org/orgname/reponame/src/master/file.yaml"})," to: ",(0,n.jsx)(t.a,{href:"https://api.bitbucket.org/2.0/repositories/orgname/reponame/src/master/file.yaml",children:"https://api.bitbucket.org/2.0/repositories/orgname/reponame/src/master/file.yaml"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},675251:(e,t,r)=>{var n=r(667294),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,c={},a=null,d=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!l.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:i,type:e,key:a,ref:d,props:c,_owner:o.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(667294);const i={},c=n.createContext(i);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);