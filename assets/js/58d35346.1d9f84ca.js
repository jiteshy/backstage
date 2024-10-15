/*! For license information please see 58d35346.1d9f84ca.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[894111],{137149:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=r(785893),c=r(511151);const t={id:"backend-dynamic-feature-service.legacypluginenvironment",title:"LegacyPluginEnvironment",description:"API reference for LegacyPluginEnvironment"},o=void 0,a={id:"reference/backend-dynamic-feature-service.legacypluginenvironment",title:"LegacyPluginEnvironment",description:"API reference for LegacyPluginEnvironment",source:"@site/versioned_docs/version-stable/reference/backend-dynamic-feature-service.legacypluginenvironment.md",sourceDirName:"reference",slug:"/reference/backend-dynamic-feature-service.legacypluginenvironment",permalink:"/docs/reference/backend-dynamic-feature-service.legacypluginenvironment",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/versioned_docs/version-stable/reference/backend-dynamic-feature-service.legacypluginenvironment.md",tags:[],version:"stable",frontMatter:{id:"backend-dynamic-feature-service.legacypluginenvironment",title:"LegacyPluginEnvironment",description:"API reference for LegacyPluginEnvironment"}},s={},d=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service",children:(0,i.jsx)(n.code,{children:"@backstage/backend-dynamic-feature-service"})})," > ",(0,i.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service.legacypluginenvironment",children:(0,i.jsx)(n.code,{children:"LegacyPluginEnvironment"})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,i.jsx)(n.p,{children:"Support for the legacy backend system will be removed in the future."}),"\n",(0,i.jsx)(n.p,{children:"When adding a legacy plugin installer entrypoint in your plugin, you should always take the opportunity to also implement support for the new backend system if not already done."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"export type LegacyPluginEnvironment = {\n    logger: Logger;\n    cache: PluginCacheManager;\n    database: PluginDatabaseManager;\n    config: Config;\n    reader: UrlReaderService;\n    discovery: PluginEndpointDiscovery;\n    tokenManager: TokenManager;\n    permissions: PermissionEvaluator;\n    scheduler: SchedulerService;\n    identity: IdentityApi;\n    eventBroker: EventBroker;\n    events: EventsService;\n    pluginProvider: BackendPluginProvider;\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"References:"})," ",(0,i.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"}),", ",(0,i.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),", ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"}),", ",(0,i.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.schedulerservice",children:"SchedulerService"}),", ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.identityapi",children:"IdentityApi"}),", ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventbroker",children:"EventBroker"}),", ",(0,i.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventsservice",children:"EventsService"}),", ",(0,i.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service.backendpluginprovider",children:"BackendPluginProvider"})]})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675251:(e,n,r)=>{var i=r(667294),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var i,t={},d=null,l=null;for(i in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,i)&&!s.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:c,type:e,key:d,ref:l,props:t,_owner:a.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var i=r(667294);const c={},t=i.createContext(c);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);