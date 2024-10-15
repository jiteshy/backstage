/*! For license information please see 7804c1b5.376e0d3f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[706468],{106294:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(785893),s=n(511151);const i={id:"backend-plugin-api.httpauthservice.credentials",title:"HttpAuthService.credentials()",description:"API reference for HttpAuthService.credentials()"},c=void 0,a={id:"reference/backend-plugin-api.httpauthservice.credentials",title:"HttpAuthService.credentials()",description:"API reference for HttpAuthService.credentials()",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.httpauthservice.credentials.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.httpauthservice.credentials",permalink:"/docs/reference/backend-plugin-api.httpauthservice.credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-plugin-api.httpauthservice.credentials.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.httpauthservice.credentials",title:"HttpAuthService.credentials()",description:"API reference for HttpAuthService.credentials()"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function o(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.httpauthservice",children:(0,t.jsx)(r.code,{children:"HttpAuthService"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.httpauthservice.credentials",children:(0,t.jsx)(r.code,{children:"credentials"})})]}),"\n",(0,t.jsx)(r.p,{children:"Extracts the caller's credentials from a request."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"credentials<TAllowed extends keyof BackstagePrincipalTypes = 'unknown'>(\n    req: Request<any, any, any, any, any>, \n    options?: {\n        allow?: Array<TAllowed>;\n        allowLimitedAccess?: boolean;\n    }): Promise<BackstageCredentials<BackstagePrincipalTypes[TAllowed]>>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"req"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"Request<any, any, any, any, any>"}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"options"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"{ allow?: Array<TAllowed>; allowLimitedAccess?: boolean; }"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backstagecredentials",children:"BackstageCredentials"}),"<",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backstageprincipaltypes",children:"BackstagePrincipalTypes"}),"[TAllowed]>>"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["The credentials have been validated before returning, and are guaranteed to adhere to whatever policies have been added to this route using ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.httprouterservice.addauthpolicy",children:"HttpRouterService.addAuthPolicy()"}),", if any."]}),"\n",(0,t.jsx)(r.p,{children:"Further restrictions can be imposed by passing in options that control the allowed types of credential."}),"\n",(0,t.jsxs)(r.p,{children:["You can narrow the returned credentials object to specific principal types using ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.authservice.isprincipal",children:"AuthService.isPrincipal()"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,i={},l=null,o=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(o=r.ref),r)c.call(r,t)&&!d.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:o,props:i,_owner:a.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var t=n(667294);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);