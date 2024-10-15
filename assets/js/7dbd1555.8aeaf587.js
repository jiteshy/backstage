/*! For license information please see 7dbd1555.8aeaf587.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[599894],{882071:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var d=n(785893),s=n(511151);const a={id:"plugin-catalog-backend-module-ldap.readldaporg",title:"readLdapOrg()",description:"API reference for readLdapOrg()"},o=void 0,c={id:"reference/plugin-catalog-backend-module-ldap.readldaporg",title:"readLdapOrg()",description:"API reference for readLdapOrg()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-ldap.readldaporg.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.readldaporg",permalink:"/docs/reference/plugin-catalog-backend-module-ldap.readldaporg",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/plugin-catalog-backend-module-ldap.readldaporg.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-ldap.readldaporg",title:"readLdapOrg()",description:"API reference for readLdapOrg()"}},t={},l=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,d.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,d.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,d.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldaporg",children:(0,d.jsx)(r.code,{children:"readLdapOrg"})})]}),"\n",(0,d.jsx)(r.p,{children:"Reads users and groups out of an LDAP provider."}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-typescript",children:"function readLdapOrg(client: LdapClient, userConfig: UserConfig[], groupConfig: GroupConfig[], vendorConfig: VendorConfig | undefined, options: {\n    groupTransformer?: GroupTransformer;\n    userTransformer?: UserTransformer;\n    logger: LoggerService;\n}): Promise<{\n    users: UserEntity[];\n    groups: GroupEntity[];\n}>;\n"})}),"\n",(0,d.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsxs)(r.th,{children:["\n",(0,d.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,d.jsxs)(r.th,{children:["\n",(0,d.jsx)(r.p,{children:"Type"}),"\n"]}),(0,d.jsxs)(r.th,{children:["\n",(0,d.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:"client"}),"\n"]}),(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapclient",children:"LdapClient"})}),"\n"]}),(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:"The LDAP client"}),"\n"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:"userConfig"}),"\n"]}),(0,d.jsxs)(r.td,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.userconfig",children:"UserConfig"}),"[]"]}),"\n"]}),(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:"The user data configuration"}),"\n"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:"groupConfig"}),"\n"]}),(0,d.jsxs)(r.td,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.groupconfig",children:"GroupConfig"}),"[]"]}),"\n"]}),(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:"The group data configuration"}),"\n"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:"vendorConfig"}),"\n"]}),(0,d.jsxs)(r.td,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.vendorconfig",children:"VendorConfig"})," | undefined"]}),"\n"]}),(0,d.jsx)(r.td,{children:"\n"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:"options"}),"\n"]}),(0,d.jsxs)(r.td,{children:["\n",(0,d.jsxs)(r.p,{children:["{ groupTransformer?: ",(0,d.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"}),"; userTransformer?: ",(0,d.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"}),"; logger: ",(0,d.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),"; }"]}),"\n"]}),(0,d.jsxs)(r.td,{children:["\n",(0,d.jsx)(r.p,{children:"Additional options"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,d.jsxs)(r.p,{children:["Promise<{ users: ",(0,d.jsx)(r.a,{href:"/docs/reference/catalog-model.userentityv1alpha1",children:"UserEntity"}),"[]; groups: ",(0,d.jsx)(r.a,{href:"/docs/reference/catalog-model.groupentityv1alpha1",children:"GroupEntity"}),"[]; }>"]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}},675251:(e,r,n)=>{var d=n(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var d,a={},l=null,i=null;for(d in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)o.call(r,d)&&!t.hasOwnProperty(d)&&(a[d]=r[d]);if(e&&e.defaultProps)for(d in r=e.defaultProps)void 0===a[d]&&(a[d]=r[d]);return{$$typeof:s,type:e,key:l,ref:i,props:a,_owner:c.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>o});var d=n(667294);const s={},a=d.createContext(s);function o(e){const r=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(a.Provider,{value:r},e.children)}}}]);